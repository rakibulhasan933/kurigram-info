"use client"
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DownMenu } from './DownMenu'
import { isMobile } from 'react-device-detect';



function Navbar() {

	return (
		<div className='px-1 py-3 md:px-4 bg-slate-200 '>
			<div className="flex flex-row justify-between items-center">
				<Link className='font-bold md:text-lg text-sm hover:text-blue-400 ' href="/">Kurigram</Link>
				{
					isMobile ? (<Link href="/search" className="hover:text-blue-400 text-sm flex flex-row items-center font-semibold"><SearchIcon className='w-5 ml-2' /></Link>) : (<Link href="/search" className=" hover:text-blue-400 text-sm flex flex-row items-center font-semibold">What are you Looking for <SearchIcon className='w-5 ml-2' /></Link>)
				}
				<DownMenu />
			</div>
		</div>
	)
}

export default Navbar