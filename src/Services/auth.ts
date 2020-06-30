import api from './api';
import { useAuth } from '../Contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';


interface Response {
    token: string;
    user: {
        username: string;
        name: string;
        email: string;
        profilePic: string;
        wishList: object[];
    }
}

export async function signIn(username:string, password:string):Promise<Response> {
    const request = {
        username,
        password
    }
    const ent = (await api.post<Response>(`/Authentication/LoginM/`, request)).data;
    const response = {
        token: ent.token,
        user: {
            name: ent.user.name,
            email: ent.user.email,
            profilePic: ent.user.profilePic,
            wishList: ent.user.wishList
        }
    }

    return ent;
};