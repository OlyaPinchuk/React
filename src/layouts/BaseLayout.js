import React from 'react';
import styles from './BaseLayout.module.css'

export const BaseLayout = ({children}) => {

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
