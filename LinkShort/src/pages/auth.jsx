import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '../components/login'
import Signup from '../components/signup'
import { LinkIcon } from 'lucide-react'
import { UrlState } from '../context'

const Auth = () => {
  const [searchParams] = useSearchParams()
  const longLink = searchParams.get("createNew");
  const navigate = useNavigate();
  const {isAuthenticated, loading} = UrlState();

  useEffect(()=> {
    if(isAuthenticated && !loading){
      navigate(`/dashboard?${longLink?`createNew=${longLink}`:""}`);
    }
  }, [isAuthenticated , loading , navigate]);

  return (
    <div className='mt-10 lg:mt-12 flex flex-col gap-10 items-center'>
      <h1 className="text-5xl font-bold text-center text-blue-400 flex items-center justify-center gap-2">
        <LinkIcon className=''/>LinkShort</h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 h-10">
          <TabsTrigger className="bg-slate-200 mr-1" value="login">Login</TabsTrigger>
          <TabsTrigger className="bg-slate-200" value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent className="text-black" value="login"> <Login /> </TabsContent>
        <TabsContent value="Signup"> <Signup /> </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth
