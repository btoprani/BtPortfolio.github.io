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

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    gap: 40px;
`;

const TextBlock = styled.span`
    font-faimly: soleil, Helvetica, Arial, sans-serif
    color: #000
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

export default function JCrew() {
    return (
        <PageContainer>
            <Navbar />
            <PageContent>
                <TextBlock>{bgText}</TextBlock>
                <TextBlock>{researchText1}</TextBlock>
                <TextBlock>{researchText2}</TextBlock>
                <TextBlock>{personaText}</TextBlock>
                <TextBlock>{goalText}</TextBlock>
                <TextBlock>{problemStatmentText}</TextBlock>
                <TextBlock>{featureSetText}</TextBlock>
                <TextBlock>{lofiText}</TextBlock>
                <TextBlock>{hifiText1}</TextBlock>
                <TextBlock>{hifiText2}</TextBlock>
                <TextBlock>{conclusionText}</TextBlock>
            </PageContent>
        </PageContainer>
    );
}