import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function RestaurantMenu() {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
			<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">Pizza</h2>
					<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
			<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">Pizza</h2>
					<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
			<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">Pizza</h2>
					<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
			<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">Pizza</h2>
					<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
		</div>
	)
}

export default RestaurantMenu