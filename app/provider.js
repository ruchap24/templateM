"use client"
import React from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";

function provider({children}) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <>
    <ConvexProvider client={convex}>
    <GoogleOAuthProvider clientId="<your_client_id>">
        <div>{children}</div>
        </GoogleOAuthProvider>
    </ConvexProvider>;
    </>
  )
}

export default provider