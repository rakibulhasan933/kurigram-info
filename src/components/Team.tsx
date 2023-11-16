import Image from 'next/image'
import React from 'react'
const people = [
	{
		name: 'S M Touhidul Islam',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://touhid.me/wp-content/uploads/2023/05/318458989_5131853703580921_3368904174395881893_n.jpg',
	},
	{
		name: 'S M Touhidul Islam',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://touhid.me/wp-content/uploads/2023/05/318458989_5131853703580921_3368904174395881893_n.jpg',
	},
	{
		name: 'Rakibul Hasan',
		role: 'Developer',
		imageUrl:
			'https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg',
	}
]

function Team() {
	return (
		<div className="bg-white py-24 md:px-32">
			<h2 className="md:text-3xl mb-10 text-center font-bold tracking-tight text-gray-900  text-2xl">Meet our Contributor</h2>
			<div className="grid  md:grid-cols-3 grid-flow-cols-1 gap-8 px-28 md:mx-auto">
				{people.map((person) => (
					<div key={person.name}>
						<div className="flex justify-center items-center gap-x-6">
							<Image className="h-16 w-16 rounded-full" src={person.imageUrl} width={50} height={50} alt="" />
							<div>
								<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
								<p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Team