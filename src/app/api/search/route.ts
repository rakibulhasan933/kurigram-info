import { SearchIProps } from "@/type";
import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export const POST = async (request: Request) => {
	try {
		const body: SearchIProps = await request.json();
		const { search, category } = body;
		console.log(body);

		const result = await prisma.service.findMany({
			where: {
				category
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	};
};