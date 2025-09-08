'use client'
import "./globals.css";
import "./layout.css";
import index from '../../public/index.json';

import {Suspense, useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

function HomeButton() {
    const pathName = usePathname();
    const query = useSearchParams();
    const homePage = pathName.includes('projects')
        ? '/' + (query.get('i') ?? '')
        : index.some((i) => pathName === `/${i.name}`) ? pathName : '/';

    return <Link className={'navbar-main'} href={homePage}>
        TheJebForge
    </Link>
}

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
                <Suspense fallback={
                    <div className={'navbar-main'}>TheJebForge</div>
                }>
                    <HomeButton/>
                </Suspense>
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
