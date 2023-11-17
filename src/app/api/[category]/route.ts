import prisma from "@/lib/db/prisma"
import { ParamsProps } from "@/type";
import { NextResponse } from "next/server";


export const GET = async (request: Request, { params }: ParamsProps) => {
	try {
		const { category } = params;
		const result = await prisma.service.findMany({
			where: {
				category
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error)
	}
};