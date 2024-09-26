import Editor from "@/components/editor";
import {Post, User } from "@prisma/client";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { notFound, redirect } from "next/navigation";

interface EditorProps {
    params : {
        postId : string
    }
}
async function getPostForUser(postId : Post["id"], userId : User["id"]) {
    const post = await db.post.findFirst({
        where : {
            id : postId,
            authorId : userId,
        },

    });
    return post;
}
export default async function Editer({ params } : EditorProps){
    const postId = params.postId;
    const user = await getCurrentUser();
    if(!user){
        redirect("/login")
    }
    const userId = user?.id;

    const post = await getPostForUser(postId, userId)
    if(!post)return notFound;
    return (
        <Editor post = {{
            id : post?.id, 
            title: post?.title,
            content: post?.content,
            published: post?.published
        }} />
    )
}