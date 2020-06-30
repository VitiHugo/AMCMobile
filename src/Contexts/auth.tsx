import React, { createContext, useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator} from 'react-native';
import * as auth from '../Services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../Services/api';


interface User {
    username: string;
    name: string;
    email:string;
    wishList: object[];
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    groups: Group[] | null;
    loading: boolean;
    signIn(username: string, password:string): Promise<void>;
    signOut(): void;
}

interface Group {
    _id: string,
    administrator: Administrator,
    title: string,
    revealDate: Date,
    minValue: Number,
    maxValue: Number,
    revealPlaceLatitude: Number,
    revealPlaceLongetude: Number,
    members: User[]
}

interface Administrator{
    username: string,
    name: string,
    email: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    
    const [user, setUser] = useState<User | null>(null);
    const [groups, setGroups] = useState<Group[] | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData(){
            // Try laterr 
            //const storagedUser  =  await AsyncStorage.multiGet(['@RNAuth:user','@RNAuth:token']);
            const storagedUser  =  await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken =  await AsyncStorage.getItem('@RNAuth:token');
            
            if(storagedUser && storagedToken){
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }

        loadStorageData(); 
    },[]);

    async function signIn(username:string, password:string) {
        const responseUser = await auth.signIn(username, password); 
        const responseGroupsUser = await api.get<Group[]>(`/group/getAllByUsername/${responseUser.user.username}`);
        console.log('groups new: ', responseGroupsUser.data);
        const {token, user } = responseUser;

        setUser(user);
        setGroups(responseGroupsUser.data);

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(user));
        await AsyncStorage.setItem('@RNAuth:token', token);
    }  
    
    async function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
            setGroups(null);
        });
    } 
    return (
        <AuthContext.Provider value={{signed: !!user, user, groups, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    
    return context;
}