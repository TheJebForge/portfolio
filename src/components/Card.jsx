import Link from "next/link";
import './card.css';

export function Card({
    children,
    cardClass,
    cardStyle,
    background,
    link,
    side
}) {
    const card = <div className={['card', cardClass].join(' ')} style={cardStyle}>
        {background}
        <div className={'card-content'}>
            {children}
        </div>
    </div>;

    const clazz = 'card-container aspect-auto ' + (side ? 'wide' : '')

    return link ?
        <Link href={link} className={clazz}>
            {card}
            {side}
        </Link>
        : <div className={clazz}>
            {card}
            {side}
        </div>;
}