"use client";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


function SignUpPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    username: "",
    password: "",
  })

  const [buttonDissabled, setbuttonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      
    } catch (error:any) {
      console.log("Signup Failed", error.message);

      toast.error(error.message);
      
    }finally{
      setLoading(false);
    }

  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0){
      setbuttonDisabled(false);
    }
    else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing": "user can signup"}</h1>
      <hr/>
      <label htmlFor="email">email</label>
      <input 
      className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="email"
      type="text" 
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder="email"
      />

      <label htmlFor="username">username</label>
      <input 
      className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="username"
      type="text" 
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      placeholder="username"
      />

      <label htmlFor="password">password</label>
      <input 
      className="p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      id="password"
      type="password" 
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      placeholder="password"
      />

      <button 
      onClick={onSignup}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        {buttonDissabled ? "No Signup" : "Signup"}
      </button>
      <Link href="/login">Visit Login Page</Link>

    </div>
    
  )
}

export default SignUpPage


