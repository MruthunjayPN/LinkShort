import React from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link2, LinkIcon, LogOut, LogOutIcon } from 'lucide-react'

const Header = () => {
    const navigate = useNavigate();
    const user = true ;
  return (
    <div className="bg-slate-200 py-5">
        <nav className='flex justify-between p-4 bg-white rounded-2xl items-center mx-20'>
            <Link to='/'>
            <img className="size-12 rounded-full" src='/logo.jpg' />
            </Link>
            <div>
                {!user ? (<Button onClick={() => navigate('/auth')} className="bg-zinc-800 text-white">Login</Button>) :
                (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden focus:outline-none focus-visible:ring-0">
                            <Avatar>
                                <AvatarImage className="border-none" src="https://github.com/shadcn.png" />
                                <AvatarFallback>M</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white border-none shadow-lg">
                            <DropdownMenuLabel>Mruthunjay</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LinkIcon className='mr-2 h-4 w-4' /><span>My Links</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-red-500'>
                                <LogOutIcon className='mr-2 h-4 w-4'/>  
                                <span>Logout</span> 
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </nav>
</div>

  )
}

export default Header
