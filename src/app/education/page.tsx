import { HeartIcon, LocateFixedIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Education() {
	return (
		<div className='mx-2 md:mx-4 my-4'>
			<div className="flex flex-row items-center justify-between mt-2">
				<h2 className="px-4 py-2 rounded md:text-xl text-sm font-medium text-white bg-pink-400 w-fit">Educational Institutions in Kurigram</h2>
			</div>
			<div className="mt-4 grid md:grid-cols-4  grid-cols-1 gap-3">
				<Link href="/education">
					<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
						<Image src="/room.jpg" className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
						<div className="px-2 py-4 flex flex-col gap-x-3">
							<h2 className="font-bold text-lg  hover:text-pink-400">Pera Palace Hotel</h2>
							<p className="text-sm font-semibold mb-2">Become a witness of the past with..</p>
							<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />Kurigram</h2>
							<h2 className="flex flex-row mr-2 hover:text-pink-400"><PhoneCallIcon className='w-4 mr-2 text-pink-400' />+8801793874052</h2>
							<hr className='w-full my-2' />
							<div className="flex justify-between">
								<div className="flex flex-row gap-y-2">
									<h2 className="text-lg font-medium">Hotels</h2>
								</div>
								<HeartIcon className='w-10 hover:text-pink-400' />
							</div>
						</div>
					</div>
				</Link>
				<Link href="/">
					<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
						<Image src="/room.jpg" className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
						<div className="px-2 py-4 flex flex-col gap-x-3">
							<h2 className="font-bold text-lg  hover:text-pink-400">Pera Palace Hotel</h2>
							<p className="text-sm font-semibold mb-2">Become a witness of the past with..</p>
							<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />Kurigram</h2>
							<h2 className="flex flex-row mr-2 hover:text-pink-400"><PhoneCallIcon className='w-4 mr-2 text-pink-400' />+8801793874052</h2>
							<hr className='w-full my-2' />
							<div className="flex justify-between">
								<div className="flex flex-row gap-y-2">
									<h2 className="text-lg font-medium">Hotels</h2>
								</div>
								<HeartIcon className='w-10 hover:text-pink-400' />
							</div>
						</div>
					</div>
				</Link>
				<Link href="/">
					<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
						<Image src="/room.jpg" className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
						<div className="px-2 py-4 flex flex-col gap-x-3">
							<h2 className="font-bold text-lg  hover:text-pink-400">Pera Palace Hotel</h2>
							<p className="text-sm font-semibold mb-2">Become a witness of the past with..</p>
							<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />Kurigram</h2>
							<h2 className="flex flex-row mr-2 hover:text-pink-400"><PhoneCallIcon className='w-4 mr-2 text-pink-400' />+8801793874052</h2>
							<hr className='w-full my-2' />
							<div className="flex justify-between">
								<div className="flex flex-row gap-y-2">
									<h2 className="text-lg font-medium">Hotels</h2>
								</div>
								<HeartIcon className='w-10 hover:text-pink-400' />
							</div>
						</div>
					</div>
				</Link>
				<Link href="/">
					<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
						<Image src="/room.jpg" className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
						<div className="px-2 py-4 flex flex-col gap-x-3">
							<h2 className="font-bold text-lg  hover:text-pink-400">Pera Palace Hotel</h2>
							<p className="text-sm font-semibold mb-2">Become a witness of the past with..</p>
							<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />Kurigram</h2>
							<h2 className="flex flex-row mr-2 hover:text-pink-400"><PhoneCallIcon className='w-4 mr-2 text-pink-400' />+8801793874052</h2>
							<hr className='w-full my-2' />
							<div className="flex justify-between">
								<div className="flex flex-row gap-y-2">
									<h2 className="text-lg font-medium">Hotels</h2>
								</div>
								<HeartIcon className='w-10 hover:text-pink-400' />
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Education