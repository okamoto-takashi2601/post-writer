"use client"

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import TextareaAutoSize from "react-textarea-autosize";
import EditorJS from '@editorjs/editorjs';
import { useEffect, useState, useCallback,useRef } from "react";
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { postPatchSchema, postPatchSchemaType } from "@/lib/validations/post";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";
 
interface EditorProps {
    post: Pick<Post, "id" | "title" | "content" | "published">
}
export default function Editor({ post } : EditorProps){
    const router = useRouter();
    const ref = useRef<EditorJS>();
    const [isMounted, setIsMounted] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const initializeEditor = useCallback(async() => {
        const body = postPatchSchema.parse(post);

        const editor = new EditorJS({
            holder: "editor",
            onReady() {
                ref.current = editor;
            },
            placeholder : "ここに記事を書く",
            inlineToolbar : true,
            data : body.content,
            tools : {
                header : Header, 
                linkTool : LinkTool,
                list : List,
                Image : ImageTool,
                Code : CodeTool,
            }
        })
    }, [post]);

    useEffect(() => {
        if(typeof window !== "undefined"){
            setIsMounted(true);
        }
    },[]);
    useEffect(() => {
        if(isMounted){
            initializeEditor();
        }

        return () =>{
            ref.current?.destroy();
            ref.current = undefined;
        }
    },[isMounted]);

    const { register, handleSubmit, formState : { errors }} = useForm<postPatchSchemaType>({
        resolver: zodResolver(postPatchSchema)
    })

    const onsubmit = async( data: postPatchSchemaType) =>{
        setIsSaving(true);
        const blocks = await ref.current?.save();
        const response = await fetch(`/api/posts/${post.id}`,{
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                title: data.title,
                content : blocks,
            }),
        });

        setIsSaving(false);

        if(!response.ok){
            return toast({
                title : "問題が発生しました",
                description : "あなたの記事は保存できませんでした。もう一度トライしてください",
                variant : "destructive"
            })
        }
        
        router.refresh();
        return toast({
            title : "データを保存しました"
        })

    }
    return (

        <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid w-full gap-10 ">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-10">
                        <Link 
                        href={"/dashboard"} 
                        className={cn(buttonVariants({variant: "ghost"}))}
                        >戻る</Link>
                    </div>
                    <p className="text-sm text-muted-foreground">公開</p>
                    <button 
                        className={cn(buttonVariants())}
                        type="submit"
                    >
                        {isSaving && <Icon.spinner  className="h-4 w-4 animate-spin"/>}
                        <span>保存</span>
                    </button>
                </div>
                <div className="w-[800px] mx-auto">
                    <TextareaAutoSize 
                        id="title" 
                        autoFocus 
                        placeholder="Post Title" 
                        className="w-full resize-none overflow-hidden bg-transparent text-5xl focus:outline-none"
                        {...register("title")}
                    >
                        {post.title}
                    </TextareaAutoSize>
                </div>
                <div id="editor">

                </div>
                <p className="text-muted-foreground">
                    Use
                    <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">Tab</kbd>
                    to open the command menu 
                </p>
            </div>
        </form>
    )
}