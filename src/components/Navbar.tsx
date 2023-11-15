"use client"
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DownMenu } from './DownMenu'
import { isMobile } from 'react-device-detect';
import { useUser } from './ContextProvider'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'
import { Button } from "@/components/ui/button"


function Navbar() {
	const { user, setUser } = useUser();
	function logOut() {
		localStorage.removeItem('id');
		setUser(null);
	}
	return (
		<div className='px-1 py-3 md:px-4 bg-slate-200 '>
			<div className="flex flex-row justify-between items-center">
				<Link className='font-bold text-lg hover:text-blue-400 ' href="/">Kurigram</Link>
				{
					isMobile ? (<Link href="/search" className="hover:text-blue-400 text-sm flex flex-row items-center font-semibold"><SearchIcon className='w-5 ml-2' /></Link>) : (<Link href="/search" className=" hover:text-blue-400 text-sm flex flex-row items-center font-semibold">What are you Looking for <SearchIcon className='w-5 ml-2' /></Link>)
				}
				<div className="flex flex-row items-center mx-1">
					<DownMenu />
					<div className="mx-2">
						{user?.phone ? (<AlertDialog>
							<AlertDialogTrigger asChild>
								<Image src={user?.photoUrl as string} className=' rounded-full' width={40} height={40} priority={true} alt='profile' />
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Logout Are you absolutely sure?</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction onClick={() => logOut()} >Continue</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>) :
							<Button asChild>
								<Link href="/login">Login</Link>
							</Button>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar