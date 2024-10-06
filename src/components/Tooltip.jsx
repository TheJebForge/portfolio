"use client"

import {useRef} from "react";
import './tooltip.css';

export function Tooltip({
    children,
    value,
    link
}) {
    const ref = useRef();
    const TOOLTIP_OFFSET = 8;

    function mouseMove(event) {
        if (!ref.current) return;
        const tooltip = ref.current;

        const boundingBox = tooltip.getBoundingClientRect();

        tooltip.style.display = 'block';

        const height = Math.max(56, boundingBox.height);

        const windowHorOffset = Math.max(0, (event.clientX + TOOLTIP_OFFSET + boundingBox.width) - (window.innerWidth - 16));
        const windowVerOffset = Math.max(0, (event.clientY + TOOLTIP_OFFSET + height) - window.innerHeight);

        const x = event.clientX + TOOLTIP_OFFSET - windowHorOffset;
        const y = event.clientY + TOOLTIP_OFFSET - windowVerOffset;

        tooltip.style.top = `${y}px`;
        tooltip.style.left = `${x}px`;
    }

    function mouseLeave(event) {
        if (!ref.current) return;
        const tooltip = ref.current;

        tooltip.style.display = 'none';
    }

    return <>
        {
            link ?
                <a href={link} target={'_blank'} onMouseMove={mouseMove} onMouseLeave={mouseLeave} className={'marked'}>
                    {children}
                </a>
                : <span onMouseMove={mouseMove} onMouseLeave={mouseLeave} className={'marked'}>
                    {children}
                </span>
        }
        <span ref={ref} className={'tooltip'} style={{display: 'none'}}>
            {value}
        </span>
    </>;
}