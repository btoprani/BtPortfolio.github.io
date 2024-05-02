import React from 'react';
import styled from 'styled-components';
import { bgText } from '../components/JCrewContent';
import Navbar from '../components/Navbar';

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

export default function JCrew() {
    return (
        <PageContainer>
            <Navbar />
            <PageContent>
                <TextBlock>{bgText}</TextBlock>
            </PageContent>
        </PageContainer>
    );
}