import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { BodyText, CaseStudyType, Competitors, PersonaImage, themeColors } from '../components/SharedStyles';
import { bgText, brandingText1, brandingText2, brandingText3, conclustionText, featureSetText, lofiText, personaText1, personaText2, producDefText1, producDefText2, researchText1, researchText2, researchText3, sitemapText, usabilityText, userFlowText, userTestingText } from '../components/AmigurumateContent';
import { InterviewPieCharts, UserTestingCharts } from '../components/AmigurumateCharts';
import { FeatureSet } from '../components/FeatureSetTables';
import { HifiWireframes, LofiWireframes } from '../components/AmigurumateWireframes';

const userFlowSrc = require("../assets/Amigurumate/UserFlow.webp");
const personaImageSrc = require("../assets/Amigurumate/Persona.jpg");
const ravitSrc = require("../assets/Amigurumate/RavitLogo.jpg");
const affinityMapSrc = require("../assets/Amigurumate/AffinityMap.webp")
const projectGoalsSrc = require("../assets/Amigurumate/ProjectGoals.webp")
const sitemapSrc = require("../assets/Amigurumate/Sitemap.webp");
const unusedLofiM1 = require("../assets/Amigurumate/LofiUnusedMobile1.jpg");
const unusedLofiM2 = require("../assets/Amigurumate/LofiUnusedMobile2.jpg");
const unusedLofiD = require("../assets/Amigurumate/LofiUnusedDesktop.jpg");
const logoSrc = require("../assets/Amigurumate/Logos.jpg");
const heroSrc = require("../assets/Amigurumate/AmiMobileMockup1.webp");
const style1Src = require("../assets/Amigurumate/AmiStyleGuideP1.png");
const style2Src = require("../assets/Amigurumate/AmiStyleGuideP2.png");
const desktopDemoSrc = require("../assets/Amigurumate/DesktopDemo.jpg");
const mobileDemoSrc = require("../assets/Amigurumate/MobileDemo.jpg");

const AmigurumateColors = {
    neutralLight: '#DADDF2',
    neutralDark: '#242433',
    primaryLight: '#C8AAF2',
    primaryDark: '#4A3E59',
    secondary: '#B285F2'
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
    margin: 0 calc((100vw - 20px) / 6 + 20px);
    margin-bottom: 20px;
`;

const AmigurumateHero = styled.div`
    padding: 80px calc((100vw - 20px) / 6 + 20px);
    background-image: linear-gradient(to bottom left, ${AmigurumateColors.primaryDark}, ${AmigurumateColors.primaryLight});
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 40px;
    .designerName {
        color: ${themeColors.background};
    }
    & > * {
        flex: 1 1 0;
    }
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const AmigurumateTitle = styled.h1`
    font-family: 'Grandstander', sans-serif;
    font-size: 64px;
    line-height: 83.2px;
    color: ${AmigurumateColors.neutralDark};
    margin: 0;
    text-align: center;
`;

const AmigurumateSubtitle = styled.h3`
    font-family: 'Rosario', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
    color: ${AmigurumateColors.neutralDark};
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-family: 'Rosario', sans-serif;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    color: ${AmigurumateColors.neutralDark};
    margin-top: 100px;
    margin-bottom: 40px;
`;

const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const PullQuote = styled.span`
    font-style: italic;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    font-family: 'Josefin Sans', sans-serif;
    margin-left: -20px;
    color: #9557ED;
`;

const LogoImage = styled.img`
    width: 50%;
    height: auto;
    align-self: center;
`;

const CompetitorImage = styled.img`
    max-height: 100px;
    width: auto;
    max-width: 200px;
    min-height: 50px;
`;

const StyleTileImg = styled.img`
    width: 80%;
    height: auto;
    align-self: center;
`;

const UnusedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: ${AmigurumateColors.neutralLight};
    padding: 20px 0;
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 600px;
        width: 100%;
    }
    img {
        object-fit: contain;
        width: auto;
        height: 600px;
    }
`;

const PersonaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${AmigurumateColors.neutralLight};
    padding: 20px;
`;

const DemoImg = styled.img`
    width: 100%;
    height: auto;
`;

export default function Amigurumate() {
    return (
        <PageContainer>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <AmigurumateHero>
                <HeroText>
                    <AmigurumateTitle>Amigurumate</AmigurumateTitle>
                    <AmigurumateSubtitle>A Fiber Art companion site and app designed end to end part time in 100 hours.<br/><br/><span className='designerName'>Role: UX/UI Designer</span></AmigurumateSubtitle>
                </HeroText>
                <LogoImage src={heroSrc} alt='Hero' />
            </AmigurumateHero>
            <PageContent>
                <SectionTitle>Background</SectionTitle>
                <SectionContent>
                    <BodyText>{bgText}</BodyText>
                </SectionContent>
                <SectionTitle>Research</SectionTitle>
                <SectionContent>
                    <BodyText>{researchText1}</BodyText>
                    <Competitors>
                        <a href='https://www.ravelry.com'><CompetitorImage src='https://style-cdn.ravelrycache.com/images/assets/logos/primary.svg' alt='Ravlery Splash Logo' /></a>
                        <a href='https://www.rickfleuren.nl/pocketcrochet.html'><CompetitorImage src='https://www.rickfleuren.nl/uploads/1/2/8/5/12852829/editor/menu-logo2.png?1596479647' alt='Pocket Crochet Logo' /></a>
                        <a href='https://rowcounterapp.com/'><CompetitorImage src='https://rowcounterapp.com/assets/images/logo-compteur2-1-122x122.png' alt='Pocket Crochet Logo' /></a>
                        <a href='http://www.enhancient.com/ravit/'><CompetitorImage src={ravitSrc} alt='Ravit Logo' /></a>
                    </Competitors>
                    <BodyText>{researchText2}</BodyText>
                    <PullQuote>"Like a bookmark in a book"</PullQuote>
                    <BodyText>{researchText3}</BodyText>
                    <img src={affinityMapSrc} alt='Amigurumate Affinity Map' />
                    <BodyText>{personaText1}</BodyText>
                    <InterviewPieCharts />
                    <BodyText>{personaText2}</BodyText>
                    <PersonaContainer>
                        <PersonaImage src={personaImageSrc} />
                    </PersonaContainer>
                </SectionContent>
                <SectionTitle>Product Definition</SectionTitle>
                <SectionContent>
                    <BodyText>{producDefText1}</BodyText>
                    <img src={projectGoalsSrc} alt='Amigurumate Project Goals' />
                    <BodyText>{producDefText2}</BodyText>
                    <PullQuote>fiber artists in the knitting and crochet spaces, who don’t have a strong way to keep track of exactly where they are in a pattern, to bookmark their spots in their projects?</PullQuote>
                    <PullQuote>fiber artists in the knitting and crochet spaces to better modify their patterns and track changes?</PullQuote>
                    <PullQuote>professionals in the fiber art space to standardize the file format and type for knitting and crochet patterns?</PullQuote>
                    <BodyText>{featureSetText}</BodyText>
                    <FeatureSet headerColor={AmigurumateColors.neutralLight} headerBgColor={AmigurumateColors.primaryDark} caseStudyType={CaseStudyType.Amigurumate} />
                    <BodyText>{sitemapText}</BodyText>
                    <img src={sitemapSrc} alt='Amigurumate Sitemap' />
                    <BodyText>{userFlowText}</BodyText>
                    <img src={userFlowSrc} alt='Amigurumate User Flow' />
                </SectionContent>
                <SectionTitle>Low-Fidelity Wireframes</SectionTitle>
                <SectionContent>
                    <BodyText>{lofiText}</BodyText>
                    <UnusedContainer>
                        <div>
                            <img src={unusedLofiM1} alt='Unused Lofi Mobile Wireframe 1' />
                            <img src={unusedLofiM2} alt='Unused Lofi Mobile Wireframe 2' />
                        </div>
                        <img src={unusedLofiD} alt='Unused Lofi Desktop Wireframe' />
                    </UnusedContainer>
                </SectionContent>
                <SectionTitle>User Testing</SectionTitle>
                <SectionContent>
                    <BodyText>During user testing:</BodyText>
                    <UserTestingCharts />
                    <BodyText>{userTestingText}</BodyText>
                    <LofiWireframes />
                </SectionContent>
                <SectionTitle>Branding</SectionTitle>
                <SectionContent>
                    <BodyText>{brandingText1}</BodyText>
                    <StyleTileImg src={style1Src} alt='Style Tile Part 1' />
                    <BodyText>{brandingText2}</BodyText>
                    <StyleTileImg src={style2Src} alt='Style Tile Part 2' />
                    <BodyText>{brandingText3}</BodyText>
                    <LogoImage src={logoSrc} alt='Amigurumate Logos' />
                </SectionContent>
                <SectionTitle>Usability Testing</SectionTitle>
                <SectionContent>
                    <BodyText>{usabilityText}</BodyText>
                    <HifiWireframes />
                </SectionContent>
                <SectionTitle>Demos</SectionTitle>
                <SectionContent>
                    <a href='https://www.figma.com/proto/mKc6rYXWUjUne8B86RiX4L/AmigurumateWireframes?page-id=739%3A6823&type=design&node-id=750-6860&viewport=1143%2C103%2C0.11&t=QJBSqGtU7x9CINWh-1&scaling=scale-down&starting-point-node-id=750%3A6860&mode=design'>
                        <DemoImg src={desktopDemoSrc} alt='Amigurumate Desktop Demo' />
                    </a>
                    <a href='https://www.figma.com/proto/mKc6rYXWUjUne8B86RiX4L/AmigurumateWireframes?page-id=323%3A2125&type=design&node-id=323-2126&viewport=1332%2C270%2C0.13&t=0CDdEyedp4VroVSz-1&scaling=scale-down&starting-point-node-id=323%3A2126&mode=design'>
                        <DemoImg src={mobileDemoSrc} alt='Amigurumate Mobile Demo' />
                    </a>
                </SectionContent>
                <SectionTitle>Conclusion</SectionTitle>
                <SectionContent>
                    <BodyText>{conclustionText}</BodyText>
                    <br />
                    <br />
                </SectionContent>
            </PageContent>
        </PageContainer>
    );
}


