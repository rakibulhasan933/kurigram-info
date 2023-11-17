import React from 'react'

async function Stats() {

	const stats = [
		{ id: 1, name: 'Institutions', value: 10 },
		{ id: 2, name: 'Hotels', value: 10 },
		{ id: 3, name: 'Restaurants', value: 10 },
		{ id: 4, name: 'Places', value: 10 },
	]
	return (
		<div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-2 lg:px-8">
				<dl className="grid  gap-4 text-center grid-cols-4">
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