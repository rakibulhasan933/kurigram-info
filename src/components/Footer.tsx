import { FacebookIcon, LinkedinIcon, MailCheckIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<div className='mx-2 md:mx-4'>
			<div className=" bg-slate-100">
				<div className='grid md:grid-cols-4  py-4 px-2 gap-5 rounded'>
					<div className="">
						<iframe className='w-full rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919515.5403311296!2d89.00917749514751!3d25.80827225152525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2c8648556f8cb%3A0xfaa7d471019abb1f!2sKurigram%20District!5e0!3m2!1sen!2sbd!4v1699635212697!5m2!1sen!2sbd" width="500" height="300" style={{ border: 0 }} loading="lazy"></iframe>
					</div>
					<div className="flex flex-col md:px-4 px-2">
						<h1 className='text-xl mt-8 font-bold font-sans opacity-75 underline  '>Our Services</h1>
						<ol className='space-y-2 text-sm mt-5'>
							<li>
								<Link href="/hotels" className='font-medium'>Hotels</Link>
							</li>
							<li>
								<Link href="/restaurants" className='font-medium'>Restaurants</Link>
							</li>
							<li>
								<Link href="/places" className='font-medium'>Places</Link>
							</li>
							<li>
								<Link href="/education" className='font-medium'>Institutions</Link>
							</li>
						</ol>
					</div>
					<div className="flex flex-col md:px-4 px-2">
						<h1 className='text-xl mt-8 font-bold font-sans opacity-75 underline  '>Social Media</h1>
						<ol className='space-y-2 text-sm mt-5'>
							<li className='flex gap-2'>
								<FacebookIcon className=' text-xl  text-blue-600 font-bold' />
								<Link className='font-semibold hover:underline' href="https://www.facebook.com/profile.php?id=100093723266018" >
									Facebook
								</Link>
							</li>
							<li className='flex gap-2'>
								<YoutubeIcon className=' text-xl  text-red-600 font-bold' />
								<Link className='font-semibold hover:underline' href="" >
									Youtube
								</Link>
							</li>
							<li className='flex gap-2'>
								<LinkedinIcon className=' text-xl  text-blue-600 font-bold' />
								<Link className='font-semibold hover:underline' href=" " >
									Linkedin
								</Link>
							</li>

							<li className='flex gap-2'>
								<PhoneCallIcon className=' text-xl  text-green-500 font-bold' />
								<Link className='font-semibold hover:underline' href="" >
									+8801318180268
								</Link>
							</li>
						</ol>
					</div>
					<div className="md:px-4 px-2">
						<h1 className='text-xl mt-8 font-bold font-sans opacity-75 underline  '>Contact Us</h1>
						<ol className='space-y-2 text-sm mt-5'>
							<li className='flex gap-2'>
								<PhoneIncomingIcon />
								<Link href="" className='font-medium'> +8801318180268</Link>
							</li>
							<li className='flex gap-2'>
								<PhoneForwardedIcon />
								<Link href="" className='font-medium'> +8801890570355</Link>
							</li>
							<li className='flex gap-2'>
								<MailCheckIcon />
								<Link href="" className='font-medium'>kurigram@info.com</Link>
							</li>

						</ol>
					</div>

				</div>
				<h1 className='text-center opacity-70 text-sm p-5 '>©Kurigram.Info.™ is a registered trademark. All Rights Reserved.Development by <a href="http://rakibul-hasan-dev.web.app" target="_blank" rel="noopener noreferrer">Rakibul hasan</a></h1>
			</div>
		</div>
	)
}

export default Footer