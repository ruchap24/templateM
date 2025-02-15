"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

function SignInButton() {
    
const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer'+codeResponse?.accessToken} },
      );
  
      console.log(userInfo);
    },
    onError: errorResponse => console.log(errorResponse),
  });
    
  return (
    <div>
        <Button onClick={googleLogin}>Get started</Button>
    </div>
  )
}

export default SignInButton