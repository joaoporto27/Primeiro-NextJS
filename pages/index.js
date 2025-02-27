import styles from '../styles/Home.module.css';
import BigMac from '../public/BigMac.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Block from '@/components/block';
import Aside from '@/components/Aside';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.left}>
                    <Block title={"Card 1"} content={"Meu primeiro card"} />
                    <Block title={"Card 2"} content={"Meu segundo card"}/>
                    <Block title={"Card 3"} content={"Meu terceiro card"}/>
                </div>
                <Aside />
            </main>
            <Footer />
        </div>
    );
}