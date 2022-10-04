import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar(props: any) {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <button>HOME</button>
            </Link>
            <Link href="/about">
                <button>ABOUT</button>
            </Link>
        </nav>
    );
}
