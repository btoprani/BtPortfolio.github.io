import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BodyText, themeColors } from "../components/SharedStyles";
import { affinityMapText, bgText, buttonText, conclusionText, featureSetText, hifiText1, hifiText2, lofiText1, logiText2, logoText, personaText, problemStatmentText, problemText, projectGoalText, researchText1, solutionText, userFlowText } from "../components/ZynoContent";

const zynoColors = {
    neutralLight: '#F2F4FF',
    neutralBlack: '#262626',
    primary: '#4359CC',
    secondary: '#FF7E40',
    secondaryDark: '#D92228',
    secondaryLight: '#EFBC9D'
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${zynoColors.neutralLight};
    min-height: 100vh;
`;

const NavbarWrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    background: ${themeColors.neutralDark};
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px calc((100vw - 20px) / 6 + 20px);
    gap: 40px;
    .competitors svg {
        max-height: 100px;
        width: auto;
        max-width: 200px;
        min-height: 50px;
    }
`;

const ZynoTitle = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 64px;
    line-height: 83.2px;
    color: ${zynoColors.primary};
`;

const TextBody = styled(BodyText)`
    font-family: "Nunito Sans", sans-serif;
`;

const WireframePlaceholder = styled.div`
    width: 100%;
    height: 100vw;
    background-color: ${themeColors.neutralDark};
    color: ${themeColors.neutralLight};
`;

export default function Zyno() {
    return (
        <PageContainer>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <PageContent>
                <ZynoTitle>Zyno</ZynoTitle>
                <TextBody>{bgText}</TextBody>
                <TextBody>{problemText}</TextBody>
                <TextBody>{solutionText}</TextBody>
                <TextBody>{affinityMapText}</TextBody>
                <TextBody>{researchText1}</TextBody>
                <TextBody>{personaText}</TextBody>
                <TextBody>{projectGoalText}</TextBody>
                <TextBody>{problemStatmentText}</TextBody>
                <TextBody>{featureSetText}</TextBody>
                <TextBody>{userFlowText}</TextBody>
                <TextBody>{lofiText1}</TextBody>
                <TextBody>{logoText}</TextBody>
                <WireframePlaceholder>WIREFRAMES GO HERE?</WireframePlaceholder>
                <TextBody>{logiText2}</TextBody>
                <TextBody>{buttonText}</TextBody>
                <TextBody>{hifiText1}</TextBody>
                <TextBody>{hifiText2}</TextBody>
                <TextBody>{conclusionText}</TextBody>
            </PageContent>
        </PageContainer>
    );
}