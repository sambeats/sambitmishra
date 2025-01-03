import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaMedium, FaYoutube } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
        <Texts>
          <h4>
            Hello <span className="green">I'm</span>
          </h4>
          <h1 className="green">Sambit Mishra</h1>
          <h3>Software Engineer @ Microsoft, Cloud and AI Consultant, Musician, Writer</h3>
          <p>
            "A versatile professional with expertise in Software Engineering, Cloud & AI Consultancy and Music. 
            Dive into my diverse world of talents through my portfolio! 
            Contact me to unlock endless possibilities!"
          </p>
          <a href="#footer"><button>Let's talk</button></a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
            <span>
                <a href="https://www.linkedin.com/in/mishra-sambit">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://www.github.com/sambeats">
                  <FaGithub/>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/_sambeats">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="https://www.youtube.com/c/SambitMishra">
                  <FaYoutube />
                </a>
              </span>
              <span>
                <a href="https://medium.com/@mishrasambit">
                  <FaMedium />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
        {/* <Profile>
          <img
            src="https://media.licdn.com/dms/image/D5603AQFDwROgfGiaYQ/profile-displayphoto-shrink_400_400/0/1667735748448?e=1709164800&v=beta&t=K1dQCQAqDODcPNysRSavj8GOoq7T5xlgXjbSvc_l5_0"
            alt="profile"
          />
        </Profile> */}
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
// const Profile = styled.div`
//   img {
//     width: 25rem;
//     filter: drop-shadow(0px 10px 10px #01be9570);
//     transition: transform 400ms ease-in-out;
//     @media (max-width: 790px) {
//       width: 20rem;
//     }

//     @media (max-width: 660px) {
//       width: 18rem;
//     }

//     @media (max-width: 640px) {
//       width: 100%;
//     }
//   }

//   :hover img {
//     transform: translateY(-10px);
//   }
// `;
