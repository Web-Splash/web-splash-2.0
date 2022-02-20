import Head from 'next/head'
import Header from './Header'
import Modal from './Modal';
import Footer from './Footer';
import {ThemeProvider} from "@/components/themeContext";
import Background from "@/components/background";


export default function Layout({title, keywords, description, children}) {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <ThemeProvider>
                <Background>
                    <Header/>
                    <main className='container mx-auto mt-28 dark:bg-gray-800'>{children}</main>
                    {/*<Modal/>*/}
                    <Footer/>
                </Background>
            </ThemeProvider>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Welcome to Web Splash',
    keywords: 'Web Design, Web Development, HTML, CSS, JavaScript',
    description: 'Learn Web Design and Development in one platform',
}
