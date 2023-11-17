import { FacebookIcon, InstagramIcon, LinkedinIcon, MailCheckIcon, MapPinIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<div className='bg-slate-100 md:px-10 px-2 py-4'>
			<div>
				<div className='flex flex-col justify-between items-center py-4 px-2 md:gap-6 gap-3 rounded'>
					<div className=" w-full">
						<iframe className='w-full rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919515.5403311296!2d89.00917749514751!3d25.80827225152525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2c8648556f8cb%3A0xfaa7d471019abb1f!2sKurigram%20District!5e0!3m2!1sen!2sbd!4v1699635212697!5m2!1sen!2sbd" width="500" height="300" style={{ border: 0 }} loading="lazy"></iframe>
					</div>
					<div className=" w-full flex flex-row items-center justify-center  gap-x-4 md:px-8 py-5 px-4">
						<Link href="https://www.facebook.com/Sherlock.Touhid/" ><FacebookIcon color='blue' size={30} /> </Link>
						<Link href="https://www.linkedin.com/in/smtouhidul/" ><LinkedinIcon color='blue' size={30} /> </Link>
						<Link href="https://twitter.com/_Touhid_" ><TwitterIcon color='blue' size={30} /> </Link>
						<Link href="https://www.instagram.com/touhid.me/" ><InstagramIcon color='red' size={30} /> </Link>
					</div>
				</div>
				<p className='text-center opacity-90 text-sm p-5 '>©Kurigram.Info.™ is a registered trademark. All Rights Reserved.Development by <a className=' text-blue-400 font-bold' href="http://www.rakibulhossain.com" target="_blank" rel="noopener noreferrer">Rakibul hasan</a></p>
			</div>
		</div>
	)
}

export default Footer