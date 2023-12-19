import prisma from "@/app/libs/prismaDB";
import { NextResponse } from "next/server";

export async function GET(req, { params: { Id } }) {
  try {
    const usersWithSubjects = await prisma.user.findFirst({
      where: {
        resultFolder: {
          some: {
            id: Id, // Replace with the actual ResultFolder ID
          },
        },
      },
      include: {
        resultFolder: {
          where: {
            id: Id, // Replace with the actual ResultFolder ID
          },
          include: {
            semesters: {
              include: {
                subjects: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(usersWithSubjects);
  } catch (err) {
    return NextResponse.json(
      { message: "Result Not Found", err },
      { status: 500 }
    );
  }
}
