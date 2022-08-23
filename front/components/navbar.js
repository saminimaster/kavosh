import Link from 'next/link'
import styles from '../styles/Home.module.css'


function Navbar(){
    return(
        <div className={styles.navbar}>

            <ul>
                <li>
                    <Link href={'/'}>
                        <a>Home</a>
                    </Link>

                </li>
                <li>
                    <Link href={'/profile'}>
                            <a>Profile</a>
                        </Link>
                </li>
                <li>
                    <Link href={'/profile/login'}>
                            <a>Login</a>
                        </Link>
                </li>
                <li>
                    <Link href={'/profile/signup'}>
                            <a>Signup</a>
                        </Link>
                </li>
                <li>
                    <Link href={'/posts/create-new-post'}>
                            <a>new post</a>
                        </Link>
                </li>
            </ul>
        </div>

    )
}

export default Navbar