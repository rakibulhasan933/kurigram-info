import Image from 'next/image'
import React from 'react'
const people = [
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Leslie Alexander',
		role: 'Co-Founder / CEO',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},

	// More people...
]

function Team() {
	return (
		<div className="bg-white py-24 md:px-32">
			<h2 className="md:text-3xl mb-10 text-center font-bold tracking-tight text-gray-900  text-2xl">Meet our Contributor</h2>
			<div className="grid  md:grid-cols-3 grid-flow-cols-1 gap-8 px-28">
				{people.map((person) => (
					<div key={person.name}>
						<div className="flex items-center gap-x-6">
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