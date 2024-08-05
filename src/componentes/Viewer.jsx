import { IMAGES } from "../seed"
import './viewer.css'

export const Viewer = ({ indexImage }) => {
    return (
        <>
            <img className={'img-viewer'} src={IMAGES[indexImage].src} alt={IMAGES[indexImage].alt} />

        </>
    )
}