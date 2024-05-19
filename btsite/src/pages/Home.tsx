import React from "react";
import HomeBg from "../components/HomeBg";
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import styled from "styled-components";
import { BodyText, H1, H2, themeColors } from "../components/SharedStyles";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const amigurumateHeroSrc = require("../assets/Amigurumate/AmiMobileMockup1.webp");
const jcrewHeroSrc = require("../assets/JCrew/JCrewMockup.webp");
const zynoLogoSrc = require("../assets/Zyno/LogoWordmark.svg").default;
const ZynoHeroSrc = require("../assets/Zyno/ZynoMockup.webp");
const amiLogoSrc = require("../assets/Amigurumate/SidewaysWordmark.webp");

const Content = styled.div`
    padding: 60px calc((100vw - 20px) / 6 + 20px);
    padding-bottom: 0;
    overflow-y: scroll;
    flex: 1 1 0;
    & > a {
        text-decoration: none;
    }
    & > h1, h2 {
        color: ${themeColors.primary}
    }
    & > h2 {
        font-size: 36px;
        line-height: 46px;
        margin-bottom: 120px;
    }
    @media (max-width: 1300px) {
        overflow-y: visible;
    }
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Card = styled.div`
    margin: 20px 20px 40px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    justify-content: flex-end;
    padding: 40px 80px;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 ${themeColors.neutralLight};
    min-width: 850px;
    background-color: ${themeColors.neutralLight};
    @media (max-width: 1800px) {
        flex-direction: column-reverse;
        justify-content: center;
        min-width: 0;
    }
`;

const ImgLogo = styled.img`
    height: 60px;
    width: auto;
    max-width: 459px;
    object-fit: contain;
    align-self: flex-end;
    @media (max-width: 1800px) {
        align-self: center;
    }
`;

const JCrewLogo = styled(ImgLogo)`
    height: 48px;
`;

const AmigurumateLogo = styled(ImgLogo)`
    height: 72px;
`;

const CardImg = styled.img`
    height: 300px;
    width: auto;
    min-width: 500px;
    object-fit: contain;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
    color: ${themeColors.neutralDark};
`;

const CardBody = styled(BodyText)`
    text-align: right;
    @media (max-width: 1800px) {
        text-align: center;
    }
`;

const ResponsiveContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1300px) {
        overflow-y: scroll;
    }
`;

const Home = () => {
    return <HelmetProvider>
        <Helmet>
            <title>Bhaven Toprani's Portfolio</title>
        </Helmet>
        <HomeBg />
        <PageContainer>
            <Navbar  altLogo={true} />
            <ResponsiveContainer>
                <Content>
                    <H1>Bhaven Toprani</H1>
                    <H2>UX Developer skilled in bridging the gap between Design and Software with a focus on Consumer Experience</H2>
                    <Link to='/amigurumate'>
                        <Card>
                            <TextContainer>
                                <AmigurumateLogo src={amiLogoSrc} alt='Amigurumate Logo' />
                                <CardBody>A Fiber Art companion site and app designed end to end part time in 100 hours.</CardBody>
                            </TextContainer>
                            <CardImg src={amigurumateHeroSrc} alt='Amigurumate Hero' />
                        </Card>
                    </Link>
                    <Link to='/jcrew'>
                        <Card>
                            <TextContainer>
                                <JCrewLogo src="https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-logo-fall-21.svg" alt="J.Crew Logo" />
                                <CardBody>A Droplist Feature Add designed for JCrew in 75 hours.</CardBody>
                            </TextContainer>
                            <CardImg src={jcrewHeroSrc} alt='J.Crew Hero' />
                        </Card>
                    </Link>
                    <Link to='/zyno'>
                        <Card>
                            <TextContainer>
                                <ImgLogo src={zynoLogoSrc} alt='Zyno Logo' />
                                <CardBody>A Mobile Website and App designed for Zyno in 65 hours.</CardBody>
                            </TextContainer>
                            <CardImg src={ZynoHeroSrc} alt='Zyno Hero' />
                        </Card>
                    </Link>
                </Content>
                <Footer />
            </ResponsiveContainer>
        </PageContainer>
    </HelmetProvider>;
}

export default Home;
