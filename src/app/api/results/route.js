import prisma from "../../libs/prismaDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const date = new Date().toLocaleDateString();

  const { folderName, semesterName, subjects, userEmail } = body;
  if (!folderName || !semesterName || !subjects) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const user = await prisma.user.update({
      where: {
        email: userEmail,
      },

      data: {
        resultFolder: {
          create: [
            {
              name: folderName,
              createdAt: date,
              semesters: {
                create: [
                  {
                    name: semesterName,
                    subjects: {
                      create: subjects.map((subject) => ({
                        // Specify the properties of each subject here
                        name: subject.name,
                        grade: subject.grade,
                        unit: subject.unit,
                        code: subject.code,
                      })),
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(
      { message: "Missing Fields", err },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const user = await prisma.user.findMany({
      //displays all users
      include: {
        resultFolder: {
          select: {
            name: true,
            createdAt: true,
            id: true,
          },
        },
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(
      { message: "User Not Found", err },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const body = await request.json();
  const { folderId, userEmail } = body;

  try {
    const deleteFolder = await prisma.user.update({
      where: {
        email: userEmail,
      },
      data: {
        resultFolder: {
          delete: { id: folderId },
        },
      },
    });

    return NextResponse.json(deleteFolder);
  } catch (err) {
    return NextResponse.json(
      { message: "Error deleting folder", err },
      { status: 500 }
    );
  }
}
