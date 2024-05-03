import React from 'react';
import styled from 'styled-components';
import { bgText, conclusionText, featureSetText, goalText, hifiText1, hifiText2, lofiText, personaText, problemStatmentText, researchText1, researchText2 } from '../components/JCrewContent';
import Navbar from '../components/Navbar';
import { themeColors } from '../components/SharedStyles';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const NavbarWrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    background: ${themeColors.background};
    margin-bottom: 60px;
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    gap: 40px;
`;

const TextBlock = styled.span`
    font-family: "soleil", Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 24px;
`;

const WireframePlaceholder = styled.div`
    width: 100%;
    height: 100vw;
    background-color: ${themeColors.neutralDark};
    color: ${themeColors.neutralLight};
`;

const JCrewLogo = styled.img`
    height: 96px;
    width: auto;
    max-width: 459px;
    object-fit: contain;
    margin: 64px 0;
`;


export default function JCrew() {
    return (
        <PageContainer>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <PageContent>
                <JCrewLogo src="https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-logo-fall-21.svg" alt="J.Crew Logo" />
                <TextBlock>{bgText}</TextBlock>
                <TextBlock>{researchText1}</TextBlock>
                <TextBlock>{researchText2}</TextBlock>
                <TextBlock>{personaText}</TextBlock>
                <TextBlock>{goalText}</TextBlock>
                <TextBlock>{problemStatmentText}</TextBlock>
                <TextBlock>{featureSetText}</TextBlock>
                <TextBlock>{lofiText}</TextBlock>
                <WireframePlaceholder>WIREFRAMES GO HERE</WireframePlaceholder>
                <TextBlock>{hifiText1}</TextBlock>
                <WireframePlaceholder>WIREFRAMES GO HERE</WireframePlaceholder>
                <TextBlock>{hifiText2}</TextBlock>
                <WireframePlaceholder>WIREFRAMES GO HERE</WireframePlaceholder>
                <TextBlock>{conclusionText}</TextBlock>
            </PageContent>
        </PageContainer>
    );
}