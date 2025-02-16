"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function SignInButton() {
    
const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer'+tokenResponse?.access_token},}
      );
  
      console.log(userInfo.data);

      if(typeof window!==undefined){
        localStorage.setItem('userDetail', JSON.stringify(userInfo?.data));
    }
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