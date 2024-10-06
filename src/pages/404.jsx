import RootLayout from "@/app/layout";
import Link from "next/link";
import './404.css';

export default function Custom404() {
    return <RootLayout>
        <div className={'center-container'}>
            <div className={'error'}>
                404
            </div>
            <div className={'center-text'}>
                How did we get here?
            </div>
            <Link href={"/"} className={'button'}>
                Go to Main Page
            </Link>
        </div>
    </RootLayout>
}