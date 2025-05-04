import React from 'react'
import { useFormStatus } from 'react-dom';
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


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500/90 text-accent-foreground">
      {pending ? 'Shortening...' : 'Shorten URL'}
    </Button>
  );
}

const Landing = () => {
  return (
    <Card className= "w-full max-w-xl mx-auto shadow-lg mt-5 bg-white border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-400 flex items-center justify-center gap-2">
          <LinkIcon className=''/>LinkShort
        </CardTitle>
        <CardDescription className="text-center text-slate-500" >Enter a long url to make it short and sweet</CardDescription>
      </CardHeader>
      <form>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor="originalUrl">Long URL :</Label>
            <Input
              id="originalUrl"
              name="originalUrl"
              type="url"
              placeholder="https://example.com/very/long/url/to/shorten"
              required
              aria-describedby="url-error"
              className={'border-none bg-slate-100'}
              // className={state.error?.originalUrl ? 'border-destructive' : ''}
              // Clear error border on focus/input? Consider adding state management for this
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="alias">Custom Alias (Optional)</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap"></span>
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
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  )
}

export default Landing