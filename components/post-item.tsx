import Link from "next/link"
import { Post } from "@prisma/client"
import { format } from "date-fns"
import PostOperations from "./post-operations"
interface PostItemProps {
    post : Pick<Post, "id" | "title" | "published" | "createdAt">
}
export default function PostItem( { post } : PostItemProps){
    return (
        <div className="flex items-center justify-between p-4">
            <div>
                <Link 
                href={`/editor/${post.id}`}
                className="font-semibold hover:underline"
                >
                    {post.title}
                </Link>

                <div>
                    <p className=" text-muted-foreground text-sm">
                        {format(post.createdAt,"yyyy/MM/dd")}
                    </p>
                </div>

            </div>
            <PostOperations post={post}/>
        </div>
    )
}