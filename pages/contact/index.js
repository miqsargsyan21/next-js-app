import MainLayout from "../../Layouts/MainLayout";

export default function Contact () {
    return (
        <MainLayout pageTitle={'Contact'}>
            <div className={'w-2/6 p-10 bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400 first-letter:text-5xl dark:bg-gray-600'}>
                <p>Contact: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti exercitationem expedita facilis quidem vel. Consectetur eum explicabo facilis impedit labore, maiores natus nobis odio perspiciatis quidem quod ratione, recusandae sapiente!</p>
            </div>
        </MainLayout>
    );
}