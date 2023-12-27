import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    projectName : "Hastlekh",
    img : "https://imgur.com/GpXpDts.png",
    disc : "Empowering the community with accessible handwriting! This tool enables users, including those with disabilities, to input text through various modes and transforms it into a universally distinctive handwriting style. Embracing inclusivity and ethically designed for diverse communication needs.",
    demoLink : "https://sambitmishra.netlify.app/#Projects"
  },
  {
    projectName : "Tathastu",
    img : "https://imgur.com/35wXFZg.png",
    disc : "Created during Covid-19 to address the challenge of tiffin delivery and shortage of ambulances for quick hospital transits during emergency. Tathastu is the one-stop junction for all such contingencies!",
    demoLink : "https://youtu.be/QjkWWA3qk9M?si=jSvLKHnvUVqZ-1i7"
  },
  {
    projectName : "SBI-Hackathon",
    img : "https://static.techgig.com/files/contest_upload_files/og-image.png",
    disc : "National runner-up SBI-Innovate for Bank 2022. Achieved image compression from 1.5MB to 0.01 MB without loss of quality using image processing techniques. Used Python, OpenCV, and Flask.",
    demoLink : "https://www.linkedin.com/posts/mishra-sambit_kalam-sbi-hackathon-activity-6994361947538276352-z-XG?utm_source=share&utm_medium=member_desktop"
  }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`