import prisma from "@/app/libs/prismaDB";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  const body = await request.json();
  const { userEmail } = body;

  try {
    const deleteUser = await prisma.user.deleteMany({
      where: {
        email: userEmail,
      },
    });
    return NextResponse.json(deleteUser);
  } catch (err) {
    return NextResponse.json(
      { message: "Error deleting user account", err },
      { status: 500 }
    );
  }
}
