import prisma from "@/lib/db/prisma"
import { NextResponse } from "next/server";


export const GET = async () => {
	try {
		const result = await prisma.service.findMany({
			where: {
				category: "restaurants"
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error)
	}
};