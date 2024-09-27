import { postPatchSchema } from "@/lib/validations/post";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";


const routeContextSchema = z.object({
    params : z.object({
        postId: z.string()
    })
})


export async function PATCH(req: NextRequest, context:z.infer<typeof routeContextSchema>) {
    try{
        const { params }= routeContextSchema.parse(context);
        // if( await verifyCurrentUserHasAccessToPost(params.postId)){
        //     return NextResponse.json(null, { status : 403})
        // }
        const json = await req.json();
       const body = postPatchSchema.parse(json);
       await db.post.update({
           where: {
               id : params.postId,
   
           },
           data: {
               title: body.title,
               content : body.content,
           },
       })
        return NextResponse.json(null, { status : 204 });
    }catch(err){
        if(err instanceof z.ZodError){
            return NextResponse.json(err.issues, {status : 422})
        }else{
            return NextResponse.json(null, { status : 500})
        }
    }

    
}

export async function DELETE(req: NextRequest, context:z.infer<typeof routeContextSchema>) {
    try{
        const { params }= routeContextSchema.parse(context);
        if( await verifyCurrentUserHasAccessToPost(params.postId)){
            return NextResponse.json(null, { status : 403})
        }

       await db.post.delete({
           where: {
               id : params.postId,
   
           },

       })
        return new Response(null, { status : 204 });
    }catch(err){
        if(err instanceof z.ZodError){
            return NextResponse.json(err.issues, {status : 422})
        }else{
            return NextResponse.json(null, { status : 500})
        }
    }

    
}

async function  verifyCurrentUserHasAccessToPost(postId : string){
    const session = await getServerSession();
    const count = await db.post.count({
        where : {
            id : postId,
            authorId : session?.user.id
        },
    });
    return count > 0;
}
