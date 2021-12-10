import MainLayout from "../../Layouts/MainLayout";
import Link from "next/link";

export default function Posts () {
    return (
        <MainLayout pageTitle={'Posts'}>
            <div className={'w-1/6 flex flex-col justify-center items-center bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400'}>
                <h1 className={'my-2'}>Posts page</h1>
                <ul>
                    <Link href={'posts/1?name=x'}><li className={'cursor-pointer p-2 hover:text-blue-400'}><a>Post 1</a></li></Link>
                    <Link href={'posts/2?name=y'}><li className={'cursor-pointer p-2 hover:text-blue-400'}><a>Post 2</a></li></Link>
                    <Link href={'posts/3?name=z'}><li className={'cursor-pointer p-2 hover:text-blue-400'}><a>Post 3</a></li></Link>
                </ul>
            </div>
        </MainLayout>
    );
}