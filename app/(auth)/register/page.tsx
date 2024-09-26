
import { buttonVariants } from "@/components/ui/button"
import UserAuthForm from "@/components/user-auth-form"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Register() {
    
    return(
        <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0">
            <Link 
            href={"/login"}
            className={cn(buttonVariants({variant : "ghost"}),"absolute left-4 md:left-8 md:top-8")}
            
            >
            ログイン
            </Link>

            <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center gap-4">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        アカウントの作成
                        </h1>
                    <p className="text-sm text-muted-foreground ">
                       メールアドレスを入力してアカウント作成してください。
                    </p>
                </div>
                <UserAuthForm />
                <p className="text-muted-foreground px-8 text-center text-sm">
                    続けてクリックすれば私たちの
                    <Link href={"/term"} className="underline underline-offset-2">
                        利用規約
                    </Link>
                    <Link href={"/policy"} className="underline underline-offset-2">
                        プライバシーポリシー
                    </Link>
                    に同意したことになります
                </p>
            </div>
        </div>
    )
}