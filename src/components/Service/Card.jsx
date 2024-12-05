import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
  return (
    <Container>
        <span className='green'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    height: 320px;
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    span{
        font-size: 4rem;
    }

    &:hover {
        transform: scale(1.05);
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`