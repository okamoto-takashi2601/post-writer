import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const page = () => {
  return (
    <>  
        <div className='flex flex-col items-center'>
            <section className='pt-6 md:pt-10 lg:py-32 pb-8 md:pd-12'>
                <div className='container text-center flex flex-col items-center gap-4 max-w-[64rem]'>
                    <Link href={siteConfig.links.x} className='bg-muted px-4 py-1.5 rounded-2xl text-sm'>xをフォローする</Link>
                    <h1 className='font-extrabold text-3xl sm:text-5xl md:text-6xl lg:trxt-7xl'>Post writer</h1>
                    <p className='text-muted-foreground sm:text-xl leading-normal max-w-[42rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa debitis earum ad, perspiciatis voluptatibus aliquam nesciunt fugit? </p>
                    <div className='space-x-4'>
                        <Link 
                            href={"/login"} 
                            className={cn(buttonVariants({size: "lg"}))}
                        >
                            はじめる
                        </Link>
                        <Link 
                        href={siteConfig.links.github}
                            className={cn(buttonVariants({size: "lg",variant : "outline"}))}
                            target ="_blank"
                            rel='noreferrer'
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </section>
            <section id="features" className='container py-6 md:py-12 lg:py-24 bg-slate-50 space-y-6 flex flex-col items-center'>
                <div className='text-center space-y-6 max-w-[64rem]'>
                    <h2 className='font-extrabold text-3xl md:text-6xl'>
                        サービスの特徴
                    </h2>
                    <p className='text-muted-foreground sm:text-lg sm:leading-7'>
                        このプロジェクトはモダンな技術スタックを使って作れたWebアプリケーションです。Nextjs AppRouterを利用してマークダウン形式でブログ投稿できます。
                    </p>
                </div>
                <div className='mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="45" 
                                height="45" 
                                viewBox="0 0 24 24"
                                >
                                    <path fill="currentColor" 
                                        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033c-3.407.306-6.6 2.145-8.622 4.972a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695c.779.25 1.6.422 2.534.525c.363.04 1.935.04 2.299 0c1.611-.178 2.977-.577 4.323-1.264c.207-.106.247-.134.219-.158c-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592l-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51c-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106l.006-4.703l.007-4.705l.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051c.478 0 .558.018.682.154a466.83 466.83 0 0 1 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879l.096-.063a12.317 12.317 0 0 0 2.466-2.163a11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748c0-.893-.012-1.088-.108-1.747c-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218l-.744-1.14l-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
                                    />
                            </svg>                    
                        </div>
                        <h3 className='font-bold'>Next.js</h3>
                        <p className='text-sm text-muted-foreground'>AppRouter/Layout/APIRouterの技術を使用。</p>
                    </div>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="45" 
                            height="45" 
                            viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565z"
                            />
                            </svg>                  
                        </div>
                        <h3 className='font-bold'>React</h3>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z"/></svg>                 
                        </div>
                        <h3 className='font-bold'>PlanetScale</h3>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>                  
                        </div>
                        <h3 className='font-bold'>TailwindCSS</h3>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 285"><path d="M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077l28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588L220.413 0ZM7.018 89.006h92.416L127.997 0H35.589L7.019 89.006c-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51l-74.77-53.078Zm46.208 142.588l74.77 52.97l74.77-52.97l-74.77-53.847l-74.77 53.847Z"/></svg>                  
                        </div>
                        <h3 className='font-bold'>OAuth</h3>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-background border p-2 rounded-lg'>
                        <div className='flex flex-col justify-between p-6 h-[100px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 384 512"><path fill="currentColor" d="M155.3 154.6c0-22.3 18.6-30.9 48.4-30.9c43.4 0 98.5 13.3 141.9 36.7V26.1C298.3 7.2 251.1 0 203.8 0C88.1 0 11 60.4 11 161.4c0 157.9 216.8 132.3 216.8 200.4c0 26.4-22.9 34.9-54.7 34.9c-47.2 0-108.2-19.5-156.1-45.5v128.5a396.09 396.09 0 0 0 156 32.4c118.6 0 200.3-51 200.3-153.6c0-170.2-218-139.7-218-203.9z"/></svg>                   
                        </div>
                        <h3 className='font-bold'>Stripe</h3>
                        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </div>
                <div className='max-auto md:max-w-[48rem] text-center'>
                    <p className='text-muted-foreground sm:text-lg sm:leading-7'>
                        Post Writerはログインするとブログ投稿できるようになります。
                    </p>
                </div>
            </section>
            <section id="contact" className='container py-8 md:py-12 lg:py-24'>
                <div className='max-w-[24rem] mx-auto text-center flex flex-col gap-4'>
                    <h2 className='font-bold text-3xl md:text-6xl'>Contact Me</h2>
                    <p className='text-muted-foreground sm:text-lg sm:leading-7'>
                        もしもWebサービスが気に入った場合は下記からDMでご連絡ください
                        <br/>
                        お仕事のご連絡をお待ちしております。
                    </p>
                    <Link href={siteConfig.links.x} className='underline underline-offset-4' target='_blank' rel='noreferrer'>お仕事はXまで</Link>
                </div>
            </section>
        </div>

    </>
  )
}

export default page