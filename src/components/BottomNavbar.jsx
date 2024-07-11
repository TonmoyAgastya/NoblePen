import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';
import styles from "./BottomNavbar.module.css";

// SVG icons
const homeIcon = (
    <svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>library</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Combined-Shape" fill="#ffffff" transform="translate(42.666667, 85.333333)">
                <path d="M3.55271368e-14,298.666667 L426.666667,298.666667 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,298.666667 Z M42.6666667,1.42108547e-14 L106.666667,1.42108547e-14 L106.666667,277.333333 L42.6666667,277.333333 L42.6666667,1.42108547e-14 Z M128,21.3333333 L192,21.3333333 L192,277.333333 L128,277.333333 L128,21.3333333 Z M288.933802,36.9522088 L351.961498,25.8387255 L399.909944,277.333333 L330.641827,277.70319 L288.933802,36.9522088 Z M213.333333,21.3333333 L277.333333,21.3333333 L277.333333,277.333333 L213.333333,277.333333 L213.333333,21.3333333 Z">
                </path>
            </g>
        </g>
    </svg>

);

const bookIcon = (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 5.99813V19.9081C11.25 20.6181 10.53 21.1081 9.88 20.8381C8.02 20.0581 5.71 19.3781 4.07 19.1581L3.76 19.1181C2.79 18.9981 2 18.1081 2 17.1381V5.24813C2 4.04813 2.97 3.07812 4.17 3.07812H4.24C6.12 3.23812 8.89 4.11813 10.72 5.10813C11.05 5.28813 11.25 5.61812 11.25 5.99813Z" fill="#ffffff" />
        <path d="M19.83 3.07812H19.77C19.53 3.09812 19.27 3.12813 19 3.17813C17.77 3.37813 16.31 3.79813 15 4.31813C14.38 4.56813 13.8 4.83813 13.29 5.10813C12.96 5.28813 12.75 5.62813 12.75 5.99813V19.9081C12.75 20.6181 13.47 21.1081 14.12 20.8381C15.98 20.0581 18.29 19.3781 19.93 19.1581L20.24 19.1181C21.21 18.9981 22 18.1081 22 17.1381V5.24813C22 4.04813 21.03 3.07812 19.83 3.07812ZM19.27 13.7281C19.27 14.1181 18.99 14.2881 18.65 14.0981L17.59 13.5081C17.48 13.4481 17.3 13.4481 17.18 13.5081L16.12 14.0981C15.78 14.2881 15.5 14.1181 15.5 13.7281V10.6581C15.5 10.1981 15.88 9.81812 16.34 9.81812H18.44C18.9 9.81812 19.28 10.1981 19.28 10.6581V13.7281H19.27Z" fill="#ffffff" />
    </svg>

);

const quillIcon = (
    <svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>quill-ink</title>
        <path d="M31.009 0.878c-5.937 0.218-10.752 1.502-14.433 3.482l-1.838 3.073-0.31-1.752c-0.657 0.462-1.266 0.949-1.827 1.46l-0.917 2.813-0.315-1.572c-2.724 3.049-3.942 6.736-3.635 10.504h-4.602v3.063h2.519l-2.703 2.373-1.389 5.303 0.907 0.99h11.058l0.907-0.99-1.389-5.303-2.558-2.373h2.206v-3.063h-4.055c1.596-0.827 3.146-1.971 4.68-3.293l-1.862 0.097 0.017-0.019 3.343-1.423c2.923-2.722 5.828-5.925 8.936-8.625l-1.529-0.324 3.535-1.317c1.673-1.276 3.413-2.358 5.254-3.105z" />
    </svg>


);

const profileIcon = (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="style=fill">
            <g id="profile">
                <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="#FFFFFF" />
                <path id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="#FFFFFF" />
            </g>
        </g>
    </svg>

);

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">
                        {homeIcon}
                    </Link>
                </li>
                <CustomLink to="/read">
                    {bookIcon}
                </CustomLink>
                <CustomLink to="/write">
                    {quillIcon}
                </CustomLink>
                <CustomLink to="/profile">
                    {profileIcon}
                </CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? styles.active : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
