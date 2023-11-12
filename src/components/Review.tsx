import Image from 'next/image'
import React from 'react'
import { AddReviews } from './AddReviews'

function Review() {
	return (
		<div className="flex flex-col gap-x-4">
			<div className="flex flex-col my-3">
				<div className="flex flex-row items-center pr-1">
					<Image src="/pasta.jpg" className=' rounded-full object-cover mr-2' width={50} height={50} alt='user' />
					<div className="flex flex-col gap-x-2">
						<h1 className=" text-base font-bold">Rakibul Hasan</h1>
						<p className=" text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iusto repellendus nobis libero doloremque quam perspiciatis ad eligendi nam recusandae!</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col my-3">
				<div className="flex flex-row items-center pr-1">
					<Image src="/pasta.jpg" className=' rounded-full object-cover mr-2' width={50} height={50} alt='user' />
					<div className="flex flex-col gap-x-2">
						<h1 className=" text-base font-bold">Rakibul Hasan</h1>
						<p className=" text-sm font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio iusto repellendus nobis libero doloremque quam perspiciatis ad eligendi nam recusandae!</p>
					</div>
				</div>
			</div>
			<AddReviews />
		</div>
	)
}

export default Review