import MainLayout from "../../Layouts/MainLayout";
import Link from "next/link";

const Posts = () => {
    return (
        <MainLayout pageTitle={'Posts'}>
            <div className={'w-1/6 flex flex-col justify-center items-center bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400 dark:bg-gray-600'}>
                <h1 className={'my-2'}>Posts page</h1>
                <ul>
                    <Link href={'posts/1?name=restaurants'}><li className={'cursor-pointer p-2 hover:text-blue-400 dark:hover:text-gray-400'}><a>Post 1</a></li></Link>
                    <Link href={'posts/2?name=categories'}><li className={'cursor-pointer p-2 hover:text-blue-400 dark:hover:text-gray-400'}><a>Post 2</a></li></Link>
                </ul>
            </div>
            <pre>
            </pre>
        </MainLayout>
    );
}

export default Posts;