import Link from "next/link";
import Head from "next/head";

export default function MainLayout ({children, pageTitle}) {
    return (
        <div>
            <Head>
                <title>{pageTitle ? pageTitle : 'My app'}</title>
            </Head>
            <nav className={'flex flex-row justify-around items-center bg-blue-400 text-white font-3xl'}>
                <Link href={"/"}><a className={'py-6 px-20 rounded-md hover:bg-blue-600'}>Home</a></Link>
                <Link href={"/posts"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600'}>Posts</a></Link>
                <Link href={"/contact"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600'}>Contact</a></Link>
            </nav>
            {children}
        </div>
    )
}