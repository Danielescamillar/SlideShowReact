import { IMAGES } from "../seed"
import './slider.css'

export const Slider = ({ indexImage, setIndexImage }) => {
    return (
        <><div className="div-slider">
            {IMAGES.map((image, index) => (
                <img
                    className={indexImage === index ? 'img-slider-selected' : 'img-slider'}
                    src={image.src}
                    alt={image.alt}
                    key={index}
                    onClick={() => setIndexImage(index)} />

            ))}
        </div>
        </>
    )
}