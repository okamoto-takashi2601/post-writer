import { siteConfig } from '@/config/site'
import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer>
        <div className='container py-10 md:py-0 md:h-24 text-center mx-auto'>
            <p className='text-center text-sm md:text-left '>
                Built by {""}
                <Link 
                    className='underline underline-offset-4 font-medium' 
                    href={siteConfig.links.x}
                    rel='noreferrer'
                >
                    OkaCode
                </Link>
                .Hosted on {""}
                <Link 
                    className='underline underline-offset-4 font-medium'  
                    href='https://vercel.com'
                    rel='noreferrer'

                >
                    Vercel
                </Link>
            </p>
        </div>
    </footer>
  )
}

export default SiteFooter