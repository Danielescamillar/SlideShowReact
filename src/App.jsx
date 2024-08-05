import { Viewer } from './componentes/Viewer'
import './App.css'
import { useEffect, useState } from 'react'
import { Slider } from './componentes/Slider'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMAGES } from "./seed"

function App() {
  const [indexImage, setIndexImage] = useState(0)
  const [slideShow, setSlideShow] = useState(false)

  useEffect(() => {
    let interval;
    if (slideShow) {
      interval = setInterval(() => setIndexImage((prevIndex) => (prevIndex + 1) % IMAGES.length), 3000)
    }
    return () => clearInterval(interval);
  }, [slideShow])

  const hadleBackImage = () => setIndexImage((indexImage - 1 + IMAGES.length) % IMAGES.length)
  const hadleNextImage = () => setIndexImage((indexImage + 1) % IMAGES.length)

  console.log({ slideShow })
  return (
    <>
      <div className='container'>
        <div className='viewer'>
          <Viewer indexImage={indexImage}></Viewer>
        </div>
        <div className='slide'>
          <button onClick={hadleBackImage}>
            <FaArrowLeft />
          </button>
          <Slider indexImage={indexImage} setIndexImage={setIndexImage}></Slider>
          <button onClick={hadleNextImage}>
            <FaArrowRight />
          </button>
        </div>
        <label>
          <input
            type="checkbox"
            className='input'
            checked={slideShow}
            onChange={() => setSlideShow(!slideShow)}
          />
          Start Slide Show
        </label>
      </div>
    </>
  )
}

export default App
