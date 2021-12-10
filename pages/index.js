import styles from '../styles/Home.module.scss'
import MainLayout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout pageTitle={'Home'}>
        <div className={'w-2/6 p-10 bg-blue-300 text-white mt-10 mx-auto rounded-md selection:bg-white selection:text-blue-400'}>
            <h2 className={'mb-5 text-2xl'}>Welcome</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti exercitationem expedita facilis quidem vel. Consectetur eum explicabo facilis impedit labore, maiores natus nobis odio perspiciatis quidem quod ratione, recusandae sapiente!</p>
        </div>
    </MainLayout>
  )
}
