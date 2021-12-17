import Link from "next/link";
import Head from "next/head";
import {useAppContext} from "../../src/context/state";
import Switch from '@mui/material/Switch';
import sunImg from './../../src/images/sunny.png';
import moonImg from './../../src/images/moon.png';
import Image from 'next/image'
import {useEffect, useRef} from "react";

export default function MainLayout ({children, pageTitle}) {
    const {isDarkMode, changeMode} = useAppContext();

    const switchMode = useRef(null);

    // useEffect(() => {
    //     changeMode(isDarkMode);
    // }, [])

    const handleChangingMode = () => {
        changeMode(prev => !prev)
    }

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <Head>
                <title>{pageTitle ? pageTitle : 'My app'}</title>
            </Head>
            <div className={'min-h-screen dark:bg-gray-500'}>
                <nav className={'flex flex-row justify-between items-center bg-blue-400 text-white font-3xl h-min dark:bg-black'}>
                    <div className={'flex flex-row justify-around items-center ml-10'} >
                        <Link href={"/"}><a className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Home</a></Link>
                        <Link href={"/posts"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Posts</a></Link>
                        <Link href={"/contact"}><a  className={'py-6 px-20 rounded-md hover:bg-blue-600 dark:hover:bg-gray-600'}>Contact</a></Link>
                    </div>
                    <div className={'flex mr-10'}>
                        <Image src={sunImg} alt="Sun" />
                        <Switch onClick={handleChangingMode} checked={isDarkMode} ref={switchMode} />
                        <Image src={moonImg} alt="Moon" />
                    </div>
                </nav>
                {children}
            </div>
        </div>
    )
}