import React from 'react';
import styles from './TopNavbar.module.css';
import SearchInput from './SearchInput';
import NightMode from './NightMode';
import openBookIcon from '../assets/open-book.png';

function topNavbar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.leftContainer}>
                <img src={openBookIcon} alt="Open Book" className={styles.icon} />
                <h1 className={styles.siteTitle}>Fiction Forge</h1>
            </div>

            <div className={styles.navRight}>
                <SearchInput />
                <NightMode />
            </div>
        </nav>
    );
}

export default topNavbar;
