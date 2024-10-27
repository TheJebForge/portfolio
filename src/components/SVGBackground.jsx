import Image from "next/image";
import './svgbackground.css';

export function SVGBackground({
    children,
    type
}) {
    return <div
        className={['svg-background', type && `svg-background-${type}`].join(' ')}
    >
        {children}
    </div>
}