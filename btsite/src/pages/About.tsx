import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, themeColors } from '../components/SharedStyles';

const Headshot = require('../assets/btLinkedIn2.1.png');

const ContentPane = styled.div`
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(400, 700);
    grid-gap: 20px;
    align-items: center;
    max-height: 700px;
    justify-content: start;
`;

const Text = styled.span`
    color: ${themeColors.neutralLight};
    width: 100%;
    font-family: "Luciole";
`;

const HeadshotImage = styled.img`
    max-height: 700px;
    object-fit: contain;
    width: 100%;
    object-position: left;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeColors.background};
    min-height: 100vh;
`;

const About = () => {
    return (
        <AboutContainer>
            <Navbar />
            <Title>About</Title>
            <ContentPane>
                <Text>
                    I started my UX journey as a Software Engineer. I had worked in QA Automation, Full Stack development, and Front End development. When I started my journey into UX, I worked with a rockstar designer the likes of whom I have yet to encounter again. Working with her allowed me to dive deep into responsive design and accessibility, which were the areas I specialized in within development. After that, I moved on to another company where I did not have that support. That vacuum motivated me to learn design so that I could create the quality design work myself. And if it helped take my career in a new direction, even better!
                    <br />
                    <br />
                    I am in the market for a UX Developer position with a hybrid remote working structure and a relaxed working environment full of type B people.
                </Text>
                <HeadshotImage src={Headshot} alt="Headshot" />
            </ContentPane>
        </AboutContainer>
    );
};

export default About;
