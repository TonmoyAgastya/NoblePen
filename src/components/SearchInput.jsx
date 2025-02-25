import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name="text"
                className={styles.input}
                required
                placeholder="Type to search..."
            />
            <div className={styles.icon}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.ionicon}
                    viewBox="0 0 512 512"
                >
                    <title>Search</title>
                    <path
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                    ></path>
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                        d="M338.29 338.29L448 448"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default SearchInput;
