import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { BodyText, themeColors } from '../components/SharedStyles';
import { bgText, brandingText1, brandingText2, brandingText3, conclustionText, featureSetText, lofiText, personaText1, personaText2, producDefText1, producDefText2, researchText1, researchText2, researchText3, sitemapText, usabilityText, userFlowText, userTestingText } from '../components/AmigurumateContent';
import { UserTestingCharts } from '../components/AmigurumateCharts';

const personaImageSrc = require("../assets/AmigurumatePersona.jpg");
const ravitSrc = require("../assets/RavitLogo.jpg");

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
    background-color: ${AmigurumateColors.neutralLight};
    min-height: 100vh;
    iframe {
        margin: 40px 0;
        align-self: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
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
`;

const AmigurumateTitle = styled.h1`
    font-family: 'Grandstander', sans-serif;
    font-size: 96px;
    line-height: 115.2px;
    color: ${AmigurumateColors.neutralDark};
`;

const AmigurumateSubtitle = styled.h3`
    font-family: 'Rosario', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: ${AmigurumateColors.neutralDark};
    .designerName {
        color: ${themeColors.primary};
    }
`;

const SectionTitle = styled.h2`
    font-family: 'Rosario', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
    color: ${AmigurumateColors.neutralDark};
    margin-top: 100px;
    margin-bottom: 40px;
`;

const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Competitors = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    a {
        display: flex;
        align-items: center;
        height: 100px;
    }
`;

const PullQuote = styled.span`
    font-style: italic;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    font-family: 'Josefin Sans', sans-serif;
    margin-left: -20px;
    color: ${AmigurumateColors.secondary};
`;

const PersonaImage = styled.img`
    width: 50vw;
    align-self: center;
    height: auto;
`;
const CompetitorImage = styled.img`
    max-height: 100px;
    width: auto;
    max-width: 200px;
    min-height: 50px;
`;

const WireframePlaceholder = styled.div`
    width: 100%;
    height: 100vw;
    background-color: ${themeColors.neutralDark};
    color: ${themeColors.neutralLight};
`;

export default function Amigurumate() {
    return (
        <PageContainer>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <PageContent>
                <AmigurumateTitle>Amigurumate</AmigurumateTitle>
                <AmigurumateSubtitle>A Fiber Art companion site and app designed end to end part time in 100 hours by UX Designer <span className='designerName'>Bhaven Toprani</span>.</AmigurumateSubtitle>
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
                    <iframe title="Crochet Affinity Map" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXUz1itMbLBPRkBu1LoVxYC%2FCrochetAffinityMap%3Ftype%3Dwhiteboard%26node-id%3D1%253A8%26t%3DxoNagXYkocJI6OEB-1" allowFullScreen />
                    <BodyText>{personaText1}</BodyText>
                    <WireframePlaceholder style={{height: '30vw'}}>PIE CHARTS GO HERE</WireframePlaceholder>
                    <BodyText>{personaText2}</BodyText>
                    <PersonaImage src={personaImageSrc} />
                </SectionContent>
                <SectionTitle>Product Definition</SectionTitle>
                <SectionContent>
                    <BodyText>{producDefText1}</BodyText>
                    <iframe title="Project Goals Figjam" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FwUZLjERVe0o3IIJEtvgAru%2FProject-Goals%3Ftype%3Dwhiteboard%26node-id%3D1%253A1941%26t%3DTl9iKGOlOkHvJafe-1" allowFullScreen />
                    <BodyText>{producDefText2}</BodyText>
                    <PullQuote>fiber artists in the knitting and crochet spaces, who don’t have a strong way to keep track of exactly where they are in a pattern, to bookmark their spots in their projects?</PullQuote>
                    <PullQuote>fiber artists in the knitting and crochet spaces to better modify their patterns and track changes?</PullQuote>
                    <PullQuote>professionals in the fiber art space to standardize the file format and type for knitting and crochet patterns?</PullQuote>
                    <BodyText>{featureSetText}</BodyText>
                    <WireframePlaceholder style={{height: '30vw'}}>PRETTY TABLE GOES HERE</WireframePlaceholder>
                    <BodyText>{sitemapText}</BodyText>
                    <iframe title="Amigurumate Sitemap" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGx0Egp3NGgWvR9nxRWYlRR%2FAmigurumate-Flows%3Ftype%3Dwhiteboard%26node-id%3D1%253A167%26t%3DcaA3O7yUaPwQGiVp-1" allowFullScreen />
                    <BodyText>{userFlowText}</BodyText>
                    <iframe title="Amigurumate User Flow" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGx0Egp3NGgWvR9nxRWYlRR%2FAmigurumate-Flows%3Ftype%3Dwhiteboard%26node-id%3D4%253A636%26t%3DcaA3O7yUaPwQGiVp-1" allowFullScreen />
                </SectionContent>
                <SectionTitle>Low-Fidelity Wireframes</SectionTitle>
                <SectionContent>
                    <BodyText>{lofiText}</BodyText>
                    <WireframePlaceholder>UNUSED WIREFRAMES GO HERE</WireframePlaceholder>
                </SectionContent>
                <SectionTitle>User Testing</SectionTitle>
                <SectionContent>
                    <BodyText>During user testing:</BodyText>
                    <UserTestingCharts />
                    <BodyText>{userTestingText}</BodyText>
                    <WireframePlaceholder>LoFi Wireframes go here</WireframePlaceholder>
                </SectionContent>
                <SectionTitle>Branding</SectionTitle>
                <SectionContent>
                    <BodyText>{brandingText1}</BodyText>
                    <iframe title="Amigurumate Moodboard" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FH9om05z18r6tAfbNdrlwRu%2FAmigurumate-Moodboard%3Ftype%3Dwhiteboard%26node-id%3D1%253A244%26t%3DrLp9CPp3k2G7jxEl-1" allowFullScreen />
                    <BodyText>{brandingText2}</BodyText>
                    <WireframePlaceholder style={{height: '50vw'}}>STYLE TILE HERE</WireframePlaceholder>
                    <BodyText>{brandingText3}</BodyText>
                    <iframe title="Amigurumate Logos" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmKc6rYXWUjUne8B86RiX4L%2FAmigurumateWireframes%3Ftype%3Ddesign%26node-id%3D494%253A2564%26mode%3Ddesign%26t%3DzGnPifKtvGdsOceV-1" allowFullScreen></iframe>
                </SectionContent>
                <SectionTitle>Usability Testing</SectionTitle>
                <SectionContent>
                    <BodyText>{usabilityText}</BodyText>
                    <WireframePlaceholder>ANNOTATED PROTOTYPES HERE</WireframePlaceholder>
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


