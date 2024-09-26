import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import * as z from "zod";

const postCreateSchema = z.object({
    title: z.string(),
    content: z.string().optional()
});

// Change function name to POST
export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json("Unauthorized", { status: 403 });
        }

        const { user } = session;

        const json = await req.json();

        // Validate the request body against the schema
        const body = postCreateSchema.parse(json);

        const { title, content } = body;

        const post = await db.post.create({
            data: {
                title: title,
                content: content,
                authorId: user.id,
            },
            select: {
                id: true,
            }
        });

        return NextResponse.json(post);
    } catch (err) {
        if (err instanceof z.ZodError) {
            return NextResponse.json(err.issues, { status: 422 });
        }

        // Log the error for debugging purposes
        console.error(err);
        return NextResponse.json(null, { status: 500 });
    }
}
