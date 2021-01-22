import React from 'react';
import styles from './BaseLayout.module.css'

export const BaseLayout = ({children}) => {
    console.log(styles)

    return (
        <div className={styles.wrapper}>
            <header>header data</header>

            <main>
                {children}
            </main>

            <footer>footer data</footer>

        </div>
    )
}
