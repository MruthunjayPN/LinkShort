import React, { useEffect, useState } from 'react'
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
import Error from './error';
import * as Yup from 'yup'
import useFetch from '../hooks/use-fetch';
import { login } from '../db/authApi';
import { useNavigate, useSearchParams } from 'react-router';


const Login = () => {
    const [errors , setErrors] = useState([]);
    const [formData, setformData] = useState({
    email : "",
    password : ""
  });
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get('createNew');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  }

  const {data, loading, error, fn:fnLogin} = useFetch(login , formData) ;
  useEffect(() => {
    if(error === null && data) {
        navigate(`/dashboard?${longLink?`createNew=${longLink}`:""}`);
    }

  }, [data , error])
   
  const handleLogin = async () => {
    setErrors([])
    try {
        const schema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be minimum 6 characters').required('Password is required')
        });
        await schema.validate(formData, {abortEarly: false});
        //api call
        await fnLogin() ;
    } catch (e) {
        const newErrors = {};
        e.inner?.forEach((err) => {
            newErrors[err.path] = err.message;
        })
        setErrors(newErrors);
    }
  }

  return (
    <Card className="border-slate-400 border-none bg-slate-50 shadow-sm">
        <CardHeader>
            <CardTitle className='text-2xl font-semibold text-blue-400'>Welcome back</CardTitle>
            <CardDescription className='text-slate-400'>lets continue to short it!</CardDescription>
            {error && <Error  message={error.message}/> }
        </CardHeader>
        <CardContent className="space-y-1">
            <div className='space-y-2 mb-3'>
                <Input name="email" placeholder='Enter email' type='email' className={'border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12 shadow-md'}
                onChange={handleInputChange}/>
                { errors.email && <Error  message={errors.email}/> }
            </div>
            <div className='space-y-2 ' >
                <Input name="password" placeholder='Enter password' type='password' className={'border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12  shadow-md'} 
                onChange={handleInputChange}/>
                {errors.password &&  <Error  message={errors.password}/> }
            </div>
        </CardContent>
        <CardFooter className="flex justify-center">
           <Button onClick={handleLogin} className={'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 shadow-lg w-28 h-10'}>
                {loading ? <BeatLoader  size={8} color='blue'/> : "Login"}
           </Button>
        </CardFooter>
    </Card>
  )
}

export default Login
