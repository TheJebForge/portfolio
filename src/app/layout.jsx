'use client'

import localFont from "next/font/local";
import "./globals.css";
import "./layout.css";
import {useEffect} from "react";
import Link from "next/link";

export default function RootLayout({children}) {
    function setScroll() {
        document.documentElement.dataset.scroll = Math.floor(window.scrollY / 300);
    }

    useEffect(() => {
        document.addEventListener('scroll', setScroll);

        return () => {
            document.removeEventListener('scroll', setScroll);
        }
    }, []);

    return (
        <html lang="en" data-scroll="0">
        <head>
            <title>TheJebForge - Portfolio</title>
        </head>
        <body>
            <div className={"navbar-container"}>
                <div className={"navbar"} >
                    <Link className={'navbar-main'} href={'/'}>
                        TheJebForge
                    </Link>
                    <a href={'https://github.com/TheJebForge'} className={'navbar-item'} target={'_blank'}>
                        GitHub
                    </a>
                </div>
            </div>
        {children}
        </body>
        </html>
    );
}
