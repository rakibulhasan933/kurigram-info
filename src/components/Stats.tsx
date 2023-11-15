import React from 'react'
import prisma from '@/lib/db/prisma';

async function Stats() {
	"use server"
	const education = await prisma.service.findMany({ where: { category: "education" } });
	const hotels = await prisma.service.findMany({ where: { category: "hotels" } });
	const restaurants = await prisma.service.findMany({ where: { category: "restaurants" } });
	const places = await prisma.service.findMany({ where: { category: "places" } });

	const stats = [
		{ id: 1, name: 'Institutions', value: education.length },
		{ id: 2, name: 'Hotels', value: hotels.length },
		{ id: 3, name: 'Restaurants', value: restaurants.length },
		{ id: 4, name: 'Places', value: places.length },
	]
	return (
		<div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<dl className="grid  gap-x-4 gap-y-8 text-center grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-base text-gray-300 leading-7">{stat.name}</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
								{stat.value} +
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default Stats