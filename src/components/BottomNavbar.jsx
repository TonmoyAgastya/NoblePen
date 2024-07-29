import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';
import styles from "./BottomNavbar.module.css";

const homeIcon = (
    <svg width="800px" height="800px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M94.972,55.756H30.479C13.646,55.756,0,69.407,0,86.243v342.279c0,16.837,13.646,30.47,30.479,30.47h64.493c16.833,0,30.479-13.634,30.479-30.47V86.243C125.452,69.407,111.805,55.756,94.972,55.756z M98.569,234.237H26.882v-17.922h71.687V234.237z M98.569,180.471H26.882v-35.843h71.687V180.471z" className="svg-fill" />
            <path d="M238.346,55.756h-64.493c-16.833,0-30.479,13.651-30.479,30.487v342.279c0,16.837,13.646,30.47,30.479,30.47h64.493c16.833,0,30.479-13.634,30.479-30.47V86.243C268.825,69.407,255.178,55.756,238.346,55.756z M241.942,234.237h-71.687v-17.922h71.687V234.237z M241.942,180.471h-71.687v-35.843h71.687V180.471z" className="svg-fill" />
            <path d="M510.409,398.305L401.562,73.799c-5.352-15.961-22.63-24.554-38.587-19.208l-61.146,20.512c-15.961,5.356-24.559,22.63-19.204,38.592L391.472,438.2c5.356,15.962,22.63,24.555,38.587,19.208l61.146-20.512C507.166,431.541,515.763,414.267,510.409,398.305z M326.677,160.493l67.967-22.796l11.398,33.988l-67.968,22.796L326.677,160.493z M355.173,245.455l-5.701-16.994l67.968-22.796l5.696,16.994L355.173,245.455z" className="svg-fill" />
        </g>
    </svg>
);

const bookIcon = (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 5.99813V19.9081C11.25 20.6181 10.53 21.1081 9.88 20.8381C8.02 20.0581 5.71 19.3781 4.07 19.1581L3.76 19.1181C2.79 18.9981 2 18.1081 2 17.1381V5.24813C2 4.04813 2.97 3.07812 4.17 3.07812H4.24C6.12 3.23812 8.89 4.11813 10.72 5.10813C11.05 5.28813 11.25 5.61812 11.25 5.99813Z" className="svg-fill" />
        <path d="M19.83 3.07812H19.77C19.53 3.09812 19.27 3.12813 19 3.17813C17.77 3.37813 16.31 3.79813 15 4.31813C14.38 4.56813 13.8 4.83813 13.29 5.10813C12.96 5.28813 12.75 5.62813 12.75 5.99813V19.9081C12.75 20.6181 13.47 21.1081 14.12 20.8381C15.98 20.0581 18.29 19.3781 19.93 19.1581L20.24 19.1181C21.21 18.9981 22 18.1081 22 17.1381V5.24813C22 4.04813 21.03 3.07812 19.83 3.07812ZM19.27 13.7281C19.27 14.1181 18.99 14.2881 18.65 14.0981L17.59 13.5081C17.48 13.4481 17.3 13.4481 17.18 13.5081L16.12 14.0981C15.78 14.2881 15.5 14.1181 15.5 13.7281V10.6581C15.5 10.1981 15.88 9.81812 16.34 9.81812H18.44C18.9 9.81812 19.28 10.1981 19.28 10.6581V13.7281H19.27Z" className="svg-fill" />
    </svg>
);

const quillIcon = (
    <svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>quill-ink</title>
        <path d="M31.009 0.878c-5.937 0.218-10.752 1.502-14.433 3.482l-1.838 3.073-0.31-1.752c-0.657 0.462-1.266 0.949-1.827 1.46l-0.917 2.813-0.315-1.572c-2.724 3.049-3.942 6.736-3.635 10.504h-4.602v3.063h2.519l-2.703 2.373-1.389 5.303 0.907 0.99h11.058l0.907-0.99-1.389-5.303-2.558-2.373h2.206v-3.063h-4.055c1.596-0.827 3.146-1.971 4.68-3.293l-1.862 0.097 0.017-0.019 3.343-1.423c2.923-2.722 5.828-5.925 8.936-8.625l-1.529-0.324 3.535-1.317c1.673-1.276 3.413-2.358 5.254-3.105z" className="svg-fill" />
    </svg>
);

const profileIcon = (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="svg-fill" opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor" />
        <path className="svg-fill" d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z" fill="currentColor" />
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
