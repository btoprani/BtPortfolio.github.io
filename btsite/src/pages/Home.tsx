import React from "react";
import HomeBg from "../components/HomeBg";
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import styled from "styled-components";
import { BodyText, themeColors } from "../components/SharedStyles";
import { Link } from "react-router-dom";

const amigurumateHeroSrc = require("../assets/Amigurumate/AmiMobileMockup1.webp");

const Content = styled.div`
    margin: 60px calc((100vw - 20px) / 6 + 20px);
    & > a {
        text-decoration: none;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
    border-radius: 4px;
    box-shadow: 0 0 20px 5px ${themeColors.neutralLight};
`;

const AmigurumateCard = styled(Card)`
    background-color: #DADDF2;
`;

const AmigurumateTitle = styled.h1`
    font-family: 'Grandstander', sans-serif;
    font-size: 48px;
    line-height: 62.4px;
    margin: 0;
    text-align: right;
`;

const CardImg = styled.img`
    height: 300px;
    width: auto;
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
`;


const Home = () => {
    return <>
        <HomeBg />
        <Navbar />
        <Content>
            <Link to='/amigurumate'>
                <AmigurumateCard>
                    <TextContainer>
                        <AmigurumateTitle>Amigurumate</AmigurumateTitle>
                        <CardBody>A Fiber Art companion site and app designed end to end part time in 100 hours.</CardBody>
                    </TextContainer>
                    <CardImg src={amigurumateHeroSrc} alt='Amigurumate Hero' />
                </AmigurumateCard>
            </Link>
        </Content>
    </>;
}

export default Home;
