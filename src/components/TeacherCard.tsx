import Image from 'next/image'
import React from 'react'
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from '@/components/ui/dialog';
import { PlusSquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function TeacherCard() {
	return (
		<div className="">
			<h2 className=' text-xl font-semibold py-4 text-center'>Teacher List</h2>
			<div className="">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline"><PlusSquareIcon className='w-4 mr-2' /> Add Teacher</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Add Teacher</DialogTitle>
						</DialogHeader>
						<div className="grid gap-2 py-2">

						</div>
					</DialogContent>
				</Dialog>
			</div>
			<div className='flex md:flex-row flex-col items-stretch gap-1'>
				<div className="md:basis-1/3 flex flex-col gap-x-1 items-center rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[1px] shadow-xl p-3">
					<Image src="/teacher.jpg" className=' object-cover rounded' alt='pizza' width={100} height={100} />
					<div className="p-2">
						<h2 className="text-base mb-1 font-bold">MD Rakibul Hasan</h2>
						<p className="text-sm  mb-1 font-medium">English Department</p>
						<p className="text-sm mb-1 font-bold text-blue-400">+8801700000000</p>
					</div>
				</div>
				<div className="basis-1/3 flex flex-col gap-x-1 items-center rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[1px] shadow-xl p-3">
					<Image src="/teacher.jpg" className=' object-cover rounded' alt='pizza' width={100} height={100} />
					<div className="p-2">
						<h2 className="text-base mb-1 font-bold">MD Rakibul Hasan</h2>
						<p className="text-sm  mb-1 font-medium">English Department</p>
						<p className="text-sm mb-1 font-bold text-blue-400">+8801700000000</p>
					</div>
				</div>
				<div className="basis-1/3 flex flex-col gap-x-1 items-center rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[1px] shadow-xl p-3">
					<Image src="/teacher.jpg" className=' object-cover rounded' alt='pizza' width={100} height={100} />
					<div className="p-2">
						<h2 className="text-base mb-1 font-bold">MD Rakibul Hasan</h2>
						<p className="text-sm  mb-1 font-medium">English Department</p>
						<p className="text-sm mb-1 font-bold text-blue-400">+8801700000000</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeacherCard