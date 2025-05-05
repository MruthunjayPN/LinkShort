import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'  
import {Input} from "../components/ui/input";
const Login = () => {
  return (
    <Card className="border-slate-400 border-none bg-slate-50">
        <CardHeader>
            <CardTitle className='text-2xl font-semibold text-blue-400 '>Signup</CardTitle>
            <CardDescription className='text-slate-400'>Create a new account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1">
            <div className='space-y-2 mb-3'>
                <Input isRequired name="name" placeholder='Enter username' type='name' className={'border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12 shadow-md'}/>
            </div>
            <div className='space-y-2 mb-3'>
                <Input isRequired name="email" placeholder='Enter email' type='email' className={'border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12 shadow-md'}/>
            </div>
            <div className='space-y-2 ' >
                <Input isRequired name="password" placeholder='Enter password' type='password' className={'border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12  shadow-md'}/>
            </div>
        </CardContent>
        <CardFooter className="flex justify-center">
           <Button className={'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 shadow-lg w-28 h-10'}>
                {false ? <BeatLoader  size={8} color='blue'/> : "Signup"}
           </Button>
        </CardFooter>
    </Card>
  )
}

export default Login