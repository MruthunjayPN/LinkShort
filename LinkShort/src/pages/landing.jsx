import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LinkIcon } from 'lucide-react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router'


const Landing = () => {
  const [longUrl, setlongUrl] = useState("");
  const navigate = useNavigate();
  const handleShort = (e) => {
    e.preventDefault();
    if(longUrl)navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <Card className= "w-full max-w-xl mx-auto shadow-lg mt-5 bg-white border-none">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-blue-400 flex items-center justify-center gap-2">
          <LinkIcon className=''/>LinkShort
        </CardTitle>
        <CardDescription className="text-center text-slate-500" >Enter a long url to make it short and sweet!</CardDescription>
      </CardHeader>
      <form onSubmit={handleShort}>
        <CardContent className='space-y-4'>
          <div className='space-y-2 ml-1'>
            <Label className={'text-slate-600'} htmlFor="originalUrl">Long URL :</Label>
            <Input
              id="originalUrl"
              value= {longUrl}
              type="url"
              onChange={(e)=> setlongUrl(e.target.value)}
              placeholder="https://example.com/very/long/url/to/shorten"
              required
              aria-describedby="url-error"
              className={'border-none bg-slate-100'}
              // className={state.error?.originalUrl ? 'border-destructive' : ''}
              // Clear error border on focus/input? Consider adding state management for this
            />
          </div>
          <div className="space-y-2">
            <Label className={'text-slate-600'} htmlFor="alias">Custom Alias (Optional)</Label>
            <div className="flex items-center space-x-2 ml-1">
               <Input
                id="alias"
                name="alias"
                type="text"
                placeholder="my-custom-link"
                aria-describedby="alias-error"
                className={'border-none bg-slate-100'}
                // className={state.error?.alias ? 'border-destructive' : ''}
               />
            </div>
            {/* {state.error?.alias && <p id="alias-error" className="text-xs text-destructive">{state.error.alias[0]}</p>} */}
            <p className="text-xs text-slate-500 ml-3">Letters, numbers, underscores, hyphens only.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4 pt-4">
          <Button type="submit"  className="w-auto  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300">
          Shorten URL
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default Landing