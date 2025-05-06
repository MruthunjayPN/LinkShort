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
import { signup } from '../db/authApi';
import { useNavigate, useSearchParams } from 'react-router';
import { UrlState } from '../context';


const Signup = () => {
    const [errors , setErrors] = useState([]);
    const [formData, setformData] = useState({
    email : "",
    password : "",
    name : "",
    profilepic : null
  });
  
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const longLink = searchParams.get('createNew');
    const handleInputChange = (e) => {
        const { name, value , files } = e.target;
        setformData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    }

    const {data, loading, error, fn:fnSignup} = useFetch(signup , formData) ;
    const {fetchUser } = UrlState();

    useEffect(() => {
        if(error === null && data) {
            navigate(`/dashboard?${longLink?`createNew=${longLink}`:""}`);
            fetchUser();
        }

    }, [data , error])
    
    const handleSignup = async () => {
        setErrors([])
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().min(6, 'Password must be minimum 6 characters').required('Password is required'),
                profilepic : Yup.mixed().required('Profile pic is requried')
            });
            await schema.validate(formData, {abortEarly: false});
            //api call
            await fnSignup() ;
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
                <CardTitle className='text-2xl font-semibold text-blue-400'>Signup</CardTitle>
                <CardDescription className='text-slate-400'>Create New Account</CardDescription>
                {error && <Error  message={error.message}/> }
            </CardHeader>
            <CardContent className="space-y-1">
            <div className='space-y-2 mb-3'>
                    <Input name="name" placeholder='Enter name' type='name' className={`border-none bg-slate-100 focus:ring-1 focus:outline-none focus:ring-blue-400 h-10 md:h-12 shadow-md ${
                        errors.name ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-blue-400'
                        }`}
                    onChange={handleInputChange}/>
                    { errors.name && <Error  message={errors.name}/> }
                </div>
                <div className='space-y-2 mb-3'>
                    <Input name="email" placeholder='Enter email' type='email' className={`border-none bg-slate-100 focus:ring-1 focus:outline-none h-10 md:h-12 shadow-md ${ errors.email ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-blue-400'
                    }`}
                    onChange={handleInputChange}/>
                    { errors.email && <Error  message={errors.email}/> }
                </div>
                <div className='space-y-2 ' >
                    <Input name="password" placeholder='Enter password' type='password' className= {`border-none bg-slate-100 focus:ring-1 focus:outline-none h-10 md:h-12  shadow-md ${errors.password ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-blue-400'
                    }`} 
                    onChange={handleInputChange}/>
                    {errors.password &&  <Error  message={errors.password}/> }
                </div>
                <div className='space-y-2 ' >
                    <Input
                        name="profilepic"
                        accept="image/*"
                        type="file"
                        className={`border-none bg-slate-100  text-slate-500 focus:ring-1 focus:outline-none h-10 md:h-12 shadow-md ${
                        errors.profilepic ? 'ring-1 ring-red-500 bg-red-50' : 'focus:ring-blue-400'
                        }`}
                        onChange={handleInputChange}
                    />
                    {/* Conditional error text */}
                    {errors.profilepic ? (
                        <Error message={errors.profilepic} />
                    ) : ( <p className="text-xs text-gray-500">Upload a clear profile picture (jpg, png).</p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
            <Button onClick={handleSignup} className={'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 shadow-lg w-40 h-10'}>
                    {loading ? <BeatLoader  size={8} color='blue'/> : "Create Account"}
            </Button>
            </CardFooter>
        </Card>
    )
}

export default Signup