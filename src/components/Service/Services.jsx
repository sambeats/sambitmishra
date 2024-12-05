import React from "react";
import { CgCloud } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaBlog, FaGuitar, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <Container id="service">
        <h4>
          My <span className="green">Services</span>
        </h4>
        <h1>How I can help you shine brighter!</h1>
      <Cards>
          <Card
            Icon={FaLaptopCode}
            title={"Software Engineer"}
            disc={`I come with experience from leading organizations like Microsoft and Samsung R&D. 
                  Having experience in creating cutting-edge software solutions using Cloud, AI and all other latest tools, I can help you build your next big thing!`}
          />
          <Card
            Icon={CgCloud}
            title={"Cloud, AI and D365 Consultant"}
            disc={`Extensive knowledge and experience in Azure and Dynamics365 at Microsoft. 
                  Additionally, having consulted with some leading clients in the Industry for implementing their Cloud and CRM Solutions, 
                  I can help you leverage the power of Cloud and AI to take your business to the next level!`}
          />
          <Card
            Icon={FaGuitar}
            title={"Musician"}
            disc={`Having previously performed at major corporate events and parties, I can help you make your event a memorable one with my music! 
                  I play the guitar and sing to match the rhythm of hearts of the audience! Check out my YouTube and Instagram for more!`}
          />
          <Card
            Icon={FaBlog}
            title={"Writer and Blogger"}
            disc={`I write blogs and articles on various topics which include but is not limited to Technology, Books, Music, Travel. Follow my Medium for more!`}
          />
      </Cards>
    </Container>
  );
};

export default Services;

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
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
