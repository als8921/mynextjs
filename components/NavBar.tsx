import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar(props: any) {
    const router = useRouter();
    return (
        <div>
            <Link href="/">
                <a
                    className={`${styles.default} ${
                        router.pathname === '/' ? styles.active : ''
                    }`}>
                    HOME
                </a>
            </Link>
            <Link href="/about">
                <a
                    className={`${styles.default} ${
                        router.pathname === '/about' ? styles.active : ''
                    }`}>
                    ABOUT
                </a>
            </Link>
        </div>
    );
}
