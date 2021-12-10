import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../../Layouts/MainLayout";

export default function Post () {
    const router = useRouter();
    const { id, name } = router.query;

    return (
        <MainLayout pageTitle={`Post ${name ? name : ''}`}>
            <div className={'w-1/6 min-h-6 p-5 flex flex-col justify-center items-center bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400'}>
                <h3>Post: {id}</h3>
                <Link href={'/posts'}><a className={'mt-4 hover:text-blue-400'}>Go Back</a></Link>
            </div>
        </MainLayout>
    );
}