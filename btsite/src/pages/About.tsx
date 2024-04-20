import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'; // Adjust the import path based on your project structure
import { H1, themeColors } from '../components/SharedStyles';

const Title = styled(H1)`
    margin-left: calc((100vw - 20px) / 6 + 20px);
    margin-top: 20px;
    color: ${themeColors.primary}
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${themeColors.background};
`;

const About = () => {
    return (
        <AboutContainer>
            <Navbar />
            <Title>About</Title>
            {/* Add more content here */}
        </AboutContainer>
    );
};

export default About;
