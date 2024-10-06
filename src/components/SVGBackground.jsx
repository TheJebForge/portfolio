import Image from "next/image";
import './svgbackground.css';

export function SVGBackground({
    src,
    type
}) {
    return <Image
        className={['svg-background', type && `svg-background-${type}`].join(' ')}
        src={src} alt={''}
    />
}