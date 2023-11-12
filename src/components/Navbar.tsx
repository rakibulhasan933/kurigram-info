"use client"
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DownMenu } from './DownMenu'
import { UserButton } from "@clerk/nextjs";



function Navbar() {
	return (
		<div className='px-1 py-3 md:px-4 bg-slate-200 '>
			<div className="flex flex-row justify-between items-center">
				<Link className='font-bold text-lg' href="/">Kurigram</Link>
				<Link href="/search" className=" text-sm flex flex-row items-center font-semibold"><SearchIcon className='w-8 ml-2' /></Link>
				<div className="flex flex-row items-center mr-1">
					<DownMenu />
					<UserButton afterSignOutUrl="/" />
				</div>
			</div>
		</div>
	)
}

export default Navbar