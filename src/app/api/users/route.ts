import prisma from "@/lib/db/prisma"
import { PasswordIProps } from "@/type";
import { NextResponse } from "next/server";


// all User list
export const GET = async () => {
	try {
		const data = await prisma.user.findMany({
			where: {
				status: "USER"
			}
		});
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ message: error });
	}
};
// Update Password
export const PATCH = async (request: Request) => {
	try {
		const body: PasswordIProps = await request.json();
		const { id, password } = body;
		await prisma.user.update({
			where: {
				id
			},
			data: {
				password,
			}
		});
		return NextResponse.json({ message: "Update Password" })
	} catch (error) {
		return NextResponse.json({ message: error });
	}
};