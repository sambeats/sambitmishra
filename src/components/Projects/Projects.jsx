import React from 'react'
import styled from 'styled-components';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  return (
    <Container id='project'>
        <h1>Recent <span className="green">Projects</span></h1>
        <p>Looking for projects that align with your vision? 
            Need similar transformative solutions for your organization? 
            Connect with me to unlock the true potential of your business! Let's create wonders that elevate your organization to new heights.</p>
        <ProjectContainer/>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``