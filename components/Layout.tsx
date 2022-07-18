import styles from '../styles/Layout.module.css'
import Header from './Header';

function Layout({ children }: any) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
    )
}

export default Layout
