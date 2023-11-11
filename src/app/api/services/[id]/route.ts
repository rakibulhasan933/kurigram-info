import { ParamsIProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const GET = async (request: Request, { params }: ParamsIProps) => {
	try {
		const { id } = params;
		const result = await prisma.service.findUnique({
			where: {
				id
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};

// Deleted Services
export const DELETE = async (request: Request, { params }: ParamsIProps) => {
	try {
		const { id } = params;
		const result = await prisma.service.delete({
			where: {
				id
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}