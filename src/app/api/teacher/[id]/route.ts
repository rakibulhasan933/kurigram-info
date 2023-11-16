import { ParamsIProps } from "@/type";
import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export const GET = async (request: Request, { params }: ParamsIProps) => {
	try {
		const { id } = params;
		const result = await prisma.teacher.findMany({
			where: {
				productId: id
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}