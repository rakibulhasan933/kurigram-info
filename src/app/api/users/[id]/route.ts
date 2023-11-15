import { ParamsIProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

// Single
export const GET = async (request: Request, { params }: ParamsIProps) => {
	try {
		const { id } = params;
		const data = await prisma.user.findUnique({
			where: {
				id
			}
		});
		return NextResponse.json(data);

	} catch (error) {
		return NextResponse.json({ error });
	}
};

// Update Role
export const PATCH = async (request: Request, { params }: ParamsIProps) => {
	try {
		const { id } = params;
		await prisma.user.update({
			where: {
				id
			},
			data: {
				status: "ADMIN"
			}
		});
		return NextResponse.json({ message: "Update Role" })
	} catch (error) {
		return NextResponse.json({ message: error });
	}
};