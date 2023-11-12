import { SearchIProps } from "@/type";
import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export const POST = async (request: Request) => {
	try {
		const body: SearchIProps = await request.json();
		const { search } = body;
		if (search === "") {
			const result = await prisma.service.findMany();
			return NextResponse.json(result);
		} else {
			const result = await prisma.service.findMany({
				where: {
					OR: [
						{
							category: {
								contains: search,
								mode: "insensitive"
							}
						},
						{
							title: {
								contains: search,
								mode: "insensitive"
							}
						}
					]
				}
			});
			return NextResponse.json(result);
		}
	} catch (error) {
		return NextResponse.json(error);
	};
};