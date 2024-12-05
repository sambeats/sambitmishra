import React from 'react'
import styled from 'styled-components';

const ProjectContainer = () => {
  const projects = [
    {
      title : "Hastlekh",
      img : "https://imgur.com/GpXpDts.png",
      description : "Empowering the community with accessible handwriting! This tool enables users, including those with disabilities, to input text through various modes and transforms it into a universally distinctive handwriting style. Embracing inclusivity and ethically designed for diverse communication needs.",
      demoLink : "https://sambitmishra.netlify.app/#Projects"
    },
    {
      title : "Tathastu",
      img : "https://imgur.com/35wXFZg.png",
      description : "Created during Covid-19 to address the challenge of tiffin delivery and shortage of ambulances for quick hospital transits during emergency. Tathastu is the one-stop junction for all such contingencies!",
      demoLink : "https://youtu.be/QjkWWA3qk9M?si=jSvLKHnvUVqZ-1i7"
    },
    {
      title : "SBI-Hackathon",
      img : "https://static.techgig.com/files/contest_upload_files/og-image.png",
      description : "National runner-up SBI-Innovate for Bank 2022. Achieved image compression from 1.5MB to 0.01 MB without loss of quality using image processing techniques. Used Python, OpenCV, and Flask.",
      demoLink : "https://www.linkedin.com/posts/mishra-sambit_kalam-sbi-hackathon-activity-6994361947538276352-z-XG?utm_source=share&utm_medium=member_desktop"
    }
  ];

  return (
    <Container>
      <Cards>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </Cards>
    </Container>
  )
};

const Card = ({ img, title, description, demoLink }) => {
  return (
    <CardContainer>
      <img src={img} alt={title} />
      <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
      </div>
    </CardContainer>
  );
};

export default ProjectContainer;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
    font-size: 2rem;
    text-align: center;
    color: #4e5156;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 1rem;
  gap: 1rem;
`;

const CardContainer = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: fit;
    transition: transform 0.3s ease-in-out;
  }

  .card-info {
    padding: 1rem;
    color: #fff;
    flex-grow: 1; /* Ensures that the content takes all available space */
    box-sizing: border-box;
    overflow: hidden;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #01be96;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #d3d3d3;
      overflow: hidden;
      white-space: normal;
      line-height: 1.4rem;
      word-wrap: break-word;
      width: 100%;
    }

    a {
      font-size: 1rem;
      color: #01be96;
      text-decoration: none;
      border: 1px solid #01be96;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background-color 0.3s;
      width: 120px;
      align-self: center;
      margin-top: auto;

      &:hover {
        background-color: #01be96;
        color: #fff;
      }
    }
  }
`;
