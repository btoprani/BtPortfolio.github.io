import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { BodyText, CaseStudyType, Competitors, DemoImg, HeroSection, HeroText, LogoImage, PersonaImage, SectionTitle, Subtitle, themeColors } from "../components/SharedStyles";
import { affinityMapText, bgText, buttonText, conclusionText, featureSetText, hifiText1, hifiText2, lofiText1, lofiText2, logoText, personaText, problemStatmentText, problemText, projectGoalText, researchText1, solutionText, typefaceText, userFlowText } from "../components/ZynoContent";
import { FeatureSet } from "../components/FeatureSetTables";
import { HifiWireframes, LofiWireframes, ZynoHifiWireframes } from "../components/ZynoWireframes";
import { Footer } from "../components/Footer";
import { UsabilityTestingCharts, UserTestingCharts } from "../components/ZynoCharts";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { ZynoProjectGoals } from "../components/ZynoProjectGoals";

const affinityMapSrc = require("../assets/Zyno/AffinityMap.webp");
const personaImageSrc = require("../assets/Zyno/Persona.jpg");
const userFlowSrc = require("../assets/Zyno/UserFlow.webp");
const initialAttemptSrc = require("../assets/Zyno/InitialHomepageAttempt.jpg");
const logosSrc = require("../assets/Zyno/Logos.jpg");
const buttons1Src = require("../assets/Zyno/Buttons1.jpg");
const buttons2Src = require("../assets/Zyno/Buttons2.jpg");
const prototypeSrc = require("../assets/Zyno/Prototype.jpg");
const zynoLogoSrc = require("../assets/Zyno/LogoWordmark.svg").default;
const zynoHeroSrc = require("../assets/Zyno/ZynoMockup.webp");

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
    background-color: ${themeColors.neutralLight};
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
    .competitors svg, .competitors img {
        max-height: 100px;
        width: auto;
        max-width: 200px;
        min-height: 50px;
    }
    margin-bottom: 80px;
`;

const ZynoTitle = styled.h1`
    display: none;
`;

const ZynoH2 = styled(SectionTitle)`
    margin-top: 60px;
    margin-bottom: 0;
`;

const SectionSubtitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 31.2px;
    color: ${zynoColors.neutralBlack};
    margin-bottom: 0px;
`;

const PullQuote = styled.span`
    font-style: italic;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    font-family: 'Montserrat', sans-serif;
    margin-left: -20px;
    color: ${zynoColors.primary};
`;

const SingleMobileImageRow = styled.img`
    width: auto;
    height: 50vh;
    outline: 1px solid ${zynoColors.neutralBlack};
    align-self: center;
    margin: 40px 0;
    max-width: 50%;
`;

const ZynoLogo = styled.img`
    height: 96px;
    width: auto;
    max-width: 459px;
    object-fit: contain;
    margin: 64px 0;
`;

const ZynoHero = styled(HeroSection)`
    background-color: ${zynoColors.secondaryLight};
`;

export default function Zyno() {
    const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
    const [lightboxSlide, setLightboxSlide] = useState<Slide[]>([]);

    function openLightbox(imgSrc: string, altText: string) {
        setLightboxSlide([{
            src: imgSrc,
            alt: altText
        }]);
        setIsLightboxOpen(true);
    }
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>Zyno Case Study by Bhaven Toprani</title>
            </Helmet>
            <Lightbox 
                open={isLightboxOpen} 
                slides={lightboxSlide} 
                close={()=>setIsLightboxOpen(false)} 
                render={{
                    buttonPrev: ()=>null, buttonNext: ()=>null
                }}
                plugins={[Zoom]}
                animation={{zoom: 500}}
            />
            <PageContainer>
                <NavbarWrapper>
                    <Navbar altLogo={false} />
                </NavbarWrapper>
                <ZynoHero>
                    <HeroText>
                        <ZynoLogo src={zynoLogoSrc} alt='Zyno Logo' />
                        <Subtitle>A Mobile Website and App designed for Zyno in 65 hours.<br /><br /><span className='designerName'>Roles: UX/UI Designer and UX Researcher</span></Subtitle>
                    </HeroText>
                    <LogoImage src={zynoHeroSrc} alt='Zyno Hero' onClick={() => openLightbox(zynoHeroSrc, 'Zyno Hero')} />
                </ZynoHero>
                <PageContent>
                    <ZynoTitle>Zyno</ZynoTitle>
                    <ZynoH2>Background</ZynoH2>
                    <BodyText>{bgText}</BodyText>
                    <SectionSubtitle>The Problem</SectionSubtitle>
                    <BodyText>{problemText}</BodyText>
                    <SectionSubtitle>The Proposed Solution</SectionSubtitle>
                    <BodyText>{solutionText}</BodyText>
                    <ZynoH2>Research</ZynoH2>
                    <BodyText>{affinityMapText}</BodyText>
                    <img src={affinityMapSrc} alt='Zyno Affinity Map' onClick={() => openLightbox(affinityMapSrc, 'Zyno Affinity Map')} />
                    <BodyText>{researchText1}</BodyText>
                    <Competitors className='competitors'>
                        <a href='https://www.compass.com/'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 16" ><path d="M53,.457,45,11.314,37,.457V15h2V6.543l6,8.143,6-8.143V15h2ZM60,15H58V1h6.5a4.5,4.5,0,0,1,0,9H60Zm0-7h4.5a2.5,2.5,0,0,0,0-5H60Zm22.863,7h2.275L77.5.9,69.863,15h2.275l1.625-3h7.475Zm-8.018-5L77.5,5.1,80.155,10ZM97,11.085c0,2.371-2.175,4.16-5.06,4.16a6.494,6.494,0,0,1-4.878-2.355l1.41-1.375A4.494,4.494,0,0,0,91.94,13.29c1.8,0,3.06-.906,3.06-2.2,0-1.11-.756-1.856-2.31-2.283L91,8.42c-3.6-.884-3.6-3.043-3.6-3.753,0-2.232,1.8-3.732,4.485-3.732a6.1,6.1,0,0,1,4.581,2.05l-1.41,1.378a4.629,4.629,0,0,0-3.171-1.472c-1.579,0-2.485.647-2.485,1.777,0,.337.128,1.462,1.773,1.816l1.533.345C95.516,7.487,97,8.96,97,11.085Zm14,0c0,2.371-2.175,4.16-5.06,4.16a6.494,6.494,0,0,1-4.878-2.355l1.41-1.375a4.494,4.494,0,0,0,3.468,1.775c1.8,0,3.06-.906,3.06-2.2,0-1.11-.756-1.856-2.31-2.283L105,8.42c-3.6-.884-3.6-3.043-3.6-3.753,0-2.232,1.8-3.732,4.485-3.732a6.1,6.1,0,0,1,4.581,2.05l-1.41,1.378a4.629,4.629,0,0,0-3.171-1.472c-1.579,0-2.485.647-2.485,1.777,0,.337.128,1.462,1.773,1.816l1.533.345C109.516,7.487,111,8.96,111,11.085Zm-98.611.8h0a5.5,5.5,0,1,1,0-7.778h0l.354.354L14.157,3.05,13.8,2.7h0a7.5,7.5,0,1,0,0,10.607l0,0h0l.354-.353-1.414-1.415ZM25.5.5A7.5,7.5,0,1,0,33,8,7.5,7.5,0,0,0,25.5.5Zm0,13A5.5,5.5,0,1,1,31,8,5.5,5.5,0,0,1,25.5,13.5Zm3.207-7.293L27.293,4.793l-5,5,1.414,1.414Z"></path></svg></a>
                        <a href='https://www.realtor.com/'><img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='Realtor' /></a>
                        <a href='https://www.redfin.com/'><svg viewBox="0 0 110 30"><path d="M56.8 5.7c-2-1.3-4.8-1.8-8.4-1.8h-6.9v22.9h7.1c2.5 0 4.7-.3 6.5-1s3.2-1.9 4.2-3.6 1.5-3.9 1.5-6.7c0-2.4-.3-4.4-.9-6-.9-1.7-1.8-3-3.1-3.8zm-1.9 13.6c-.3 1.1-.9 2-1.7 2.6-.9.7-2.3 1-4.1 1h-2.5V7.5h2.1c2 0 3.6.3 4.6 1.1.7.6 1.3 1.3 1.6 2.4s.5 2.4.5 4c0 1.8-.1 3.2-.5 4.3zm9 7.4h5.2V17h6.1v-3.8h-6.1V7.6h9.3V3.8H63.9v22.9zm17.9 0H87V3.8h-5.2v22.9zM110 3.8h-5.3V17L95 3.8h-4.2v22.9h5.3V13.2l9.6 13.5h4.3V3.8zM21.7 27.6c-.4-.2-.9-.5-2.1-2.5l-2.4-3.9-2.8-4.6-.2-.4c.1 0 .3-.1.4-.1 3.2-1.1 5.1-4 5.1-8.2 0-2.1-.8-4-2.4-5.4-.2-.2-.5-.4-.7-.6C14.4.5 11.5 0 7.7 0H.4C0 0-.1.3.1.5s.4.5.4 1.3v23c-.1.9-.3 1.2-.4 1.4-.2.2-.1.5.4.5h5.3V17h2.4l1.7 2.9 2.1 3.6 1 1.8c1.2 2 2.3 3.3 4.2 3.6.2 0 1.2.2 1.6.2h.4c.8 0 1.6-.3 2.1-.5 0 0 .1-.1.2-.1.7-.4.5-.8.2-.9zM9.2 13.2H5.8V3.8h3.4c1.7 0 3 .2 3.9 1.1.4.3.6.7.8 1.2.2.6.4 1.3.4 2.2 0 1.2-.1 4.9-5.1 4.9zM28.5 17h6.1v-3.8h-6.1V7.6h9.3V3.8H23.3v22.9h14.5v-3.8h-9.3V17z"></path></svg></a>
                        <a href='https://www.zillow.com/'><img src='https://s.zillowstatic.com/pfs/static/z-logo-default-visual-refresh.svg' alt='Zillow' /></a>
                    </Competitors>
                    <BodyText>{personaText}</BodyText>
                    <PersonaImage src={personaImageSrc} alt='Zyno Persona' onClick={() => openLightbox(personaImageSrc, 'Zyno Persona')} />
                    <ZynoH2>Prioritization</ZynoH2>
                    <BodyText>{projectGoalText}</BodyText>
                    <ZynoProjectGoals />
                    <BodyText>{problemStatmentText}</BodyText>
                    <PullQuote>How might we design a product that can streamline marketing and advertising to social media?</PullQuote>
                    <PullQuote>How might we come up with a cheaper option for marketing and advertising that also has a high enough quality to drive engagement?</PullQuote>
                    <BodyText>{featureSetText}</BodyText>
                    <FeatureSet headerBgColor={zynoColors.primary} headerColor={zynoColors.neutralLight} caseStudyType={CaseStudyType.Zyno} />
                    <BodyText>{userFlowText}</BodyText>
                    <img src={userFlowSrc} alt='Zyno User Flow' onClick={() => openLightbox(userFlowSrc, 'Zyno User Flow')} />
                    <ZynoH2>Branding and Low-Fidelity Wireframe Iterations</ZynoH2>
                    <BodyText>{lofiText1}</BodyText>
                    <SingleMobileImageRow src={initialAttemptSrc} alt='Initial Homepage Attempt' onClick={() => openLightbox(initialAttemptSrc, 'Initial Homepage Attempt')} />
                    <BodyText>{logoText}</BodyText>
                    <img src={logosSrc} alt='Zyno Logo Options' onClick={() => openLightbox(logosSrc, 'Zyno Logo Options')} />
                    <BodyText>{lofiText2}</BodyText>
                    <LofiWireframes openLightbox={openLightbox} />
                    <UserTestingCharts />
                    <br />
                    <BodyText>{buttonText}</BodyText>
                    <img src={buttons1Src} alt='Zyno Button Options Part 1' onClick={() => openLightbox(buttons1Src, 'Zyno Button Options Part 1')} />
                    <img src={buttons2Src} alt='Zyno Button Options Part 2' onClick={() => openLightbox(buttons2Src, 'Zyno Button Options Part 2')} />
                    <BodyText>{typefaceText}</BodyText>
                    <ZynoH2>High-Fidelity Wireframes</ZynoH2>
                    <BodyText>{hifiText1}</BodyText>
                    <ZynoHifiWireframes openLightbox={openLightbox} />
                    <ZynoH2>Case Study Changes and Usability Tests</ZynoH2>
                    <BodyText>{hifiText2}</BodyText>
                    <UsabilityTestingCharts />
                    <HifiWireframes openLightbox={openLightbox} />
                    <SectionSubtitle>Prototype</SectionSubtitle>
                    <a href='https://www.figma.com/proto/feO4BtrlolXFgLquyY0bfq/Zyno-DesignLab-Version?page-id=0%3A1&node-id=243-1158&viewport=-1415%2C616%2C0.48&t=lVvASDWene3pWNWS-1&scaling=scale-down&starting-point-node-id=243%3A1158'>
                        <DemoImg src={prototypeSrc} alt='Zyno Prototype' />
                    </a>
                    <ZynoH2>Conclusion</ZynoH2>
                    <BodyText>{conclusionText}</BodyText>
                </PageContent>
                <Footer />
            </PageContainer>
        </HelmetProvider>
    );
}