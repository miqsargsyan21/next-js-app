import Link from "next/link";
import Head from "next/head";
import {useAppContext} from "../../src/context/state";

export default function MainLayout ({children, pageTitle}) {
    const {isDarkMode, changeMode} = useAppContext();

    const handleChangingMode = () => {
        changeMode(prev => !prev)
    }

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Head>
                <title>{pageTitle ? pageTitle : 'My app'}</title>
            </Head>
            <div className={'h-screen dark:bg-gray-500'}>
                <nav className={'flex flex-row justify-around items-center bg-blue-400 text-white font-3xl h-min dark:bg-black'}>
                    <Link href={"/"}><a className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Home</a></Link>
                    <Link href={"/posts"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Posts</a></Link>
                    <Link href={"/contact"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Contact</a></Link>
                    <button className={`w-min py-3 px-2 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600`} onClick={handleChangingMode}>
                        <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
                    </button>
                </nav>
                {children}
            </div>
        </div>
    )
}