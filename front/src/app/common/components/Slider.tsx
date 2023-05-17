'use client'
import React from 'react'
import Slider from 'react-slick'
import BasicCard from './Card'

interface SliderProps {
  titleSlider: string
}

function SamplePrevArrow ({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    >
      BACK
    </div>
  )
}

function SampleNextArrow ({ className, style, onClick }: any) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    >
      NEXT
    </div>
  )
}

export const SliderEvent = ({ titleSlider }: SliderProps) => {
  const slider = React.useRef<any>(null)

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '20px 0px' }}>{titleSlider}</h1>

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard key={index} item={item} />
        })}
      </Slider>
    </div>
  )
}

const products = [
  {
    id: 1,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'Summer party'
    //all props
  },
  {
    id: 2,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'winter party'
  },
  {
    id: 3,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'spring party'
  },
  {
    id: 4,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'spring party'
  },

  {
    id: 5,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'spring party'
  },
  {
    id: 6,
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    name: 'spring party'
  }
]
