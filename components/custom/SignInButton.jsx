"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SignInButton() {

const CreateUser=useMutation(api.users.CreateUser)
const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer'+tokenResponse?.access_token},}
      );
  
      console.log(userInfo.data);
      const user=userInfo.data;

      if(typeof window!==undefined){
        localStorage.setItem('userDetail', JSON.stringify(user));
    }
    await CreateUser({
      name:user?.name,
      email:user?.email,
      picture:user?.picture
    }
    )
  },
    onError: errorResponse => console.log(errorResponse),
  });
    
  return (
    <div>
        <Button onClick={googleLogin}>Get started</Button>
    </div>
  );
}

export default SignInButton