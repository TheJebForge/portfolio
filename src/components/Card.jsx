import Link from "next/link";
import './card.css';

export function Card({
    children,
    cardClass,
    cardStyle,
    background,
    link
}) {
    const card = <div className={['card', cardClass].join(' ')} style={cardStyle}>
        {background}
        <div className={'card-content'}>
            {children}
        </div>
    </div>;

    return link ?
        <Link href={link} className={'card-container aspect-auto'}>
            {card}
        </Link>
        : <div className={'card-container aspect-auto'}>
            {card}
        </div>;
}