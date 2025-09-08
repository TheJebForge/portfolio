import './page.css'
import indices from "../../../public/index.json"

export default async function IndicesPage() {
    return <>
        <div className={'index-container-title'}>
            Project Indices
        </div>
        <div className={'index-container-subtitle'}>
            Since not all projects will be reasonable to show to different companies
        </div>
        <div className={'index-container'}>
            {indices.map((index, i) =>
                <a key={i} href={`/${index.name}`} className={'index-button'}>
                    <div className={'index-button-title'}>
                        {index.title}
                    </div>
                    <div className={'index-button-desc'}>
                        {index.description}
                    </div>
                </a>
            )}
        </div>
    </>;
}