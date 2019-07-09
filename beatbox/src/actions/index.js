import axios from 'axios';

import {TrackHandler, Client} from 'spotify-sdk';

let client = Client.instance;
client.settings = {
    clientId: "8e1cd8c67cb544d182e2b13b3f1be10c",
    secretId: "e58e0e3563ec461986a3707f5b53ffe2",
    scopes: ["user-follow-modify user-follow-read user-library-read user-top-read"],
    redirect_uri: "http://localhost:3000/"

}

export const checkSignIn = () => {
    return (dispatch, getState) => {
        if(sessionStorage.token){

        }else if(window.location.hash.split('&')[0].split('=')[1]){

        }else{
            
        }
    }
}