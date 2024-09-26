"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/icon"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function UserAuthForm() {
    const [isGithubLoading,setIsGithubLoading] = useState<boolean>(false)
    const [isGoogleLoading,setIsGoogleLoading] = useState<boolean>(false)
    return (
        <div className="grid gap-6">
            <form>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input id="mail" placeholder="name@example.com" type="email"/>
                    </div>
                    <button className={cn(buttonVariants())}>
                        <Icon.mail/>
                        メールアドレスでログイン
                    </button>
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                </div>
                
                <div className="relative flex justify-center tex-xs">
                    <span className="text-muted-foreground px-2 bg-background">または</span>
                </div>
            </div>
            <button 
                className={cn(buttonVariants({variant: "outline"}))} 
                onClick={()=> {
                    setIsGithubLoading(true);
                    signIn("github");
                    }
                }>
                    {isGithubLoading ? <Icon.spinner className = "mr-2 animate-spin" />  : <Icon.github className="mr-2"/>}
               
                Github
            </button>
            <button 
                className={cn(buttonVariants({variant: "outline"}))} 
                onClick={()=> {
                    setIsGoogleLoading(true);
                    signIn("google");
                    }
                }>
                    {isGoogleLoading ? <Icon.spinner className = "mr-2 animate-spin" />  : <Icon.google className="mr-2"/>}
               
                Google
            </button>
        </div>
    )
}