import prisma from "@/lib/db/prisma";
import { UserProps } from "@/type";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
	try {
		const body: UserProps = await request.json();
		const { phone, password } = body;
		const users = await prisma.user.findUnique({
			where: {
				phone
			}
		})
		if (!users) {
			return NextResponse.json({ message: "User Not Found" });
		};
		if (users) {
			if (users.password === password) {
				return NextResponse.json(users);
			} else {
				return NextResponse.json({ message: "password not match" });
			}
		}
	} catch (error) {
		// console.log(error)
		return NextResponse.json({ message: error });
	}
};