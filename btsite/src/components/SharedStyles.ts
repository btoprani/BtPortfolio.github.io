import styled, {css} from 'styled-components';

export const themeColors = {
    neutralLight: '#FCF7F8',
    neutralDark: '#181311',
    background: '#053332',
    primary: '#00AFB9',
    secondary: '#4C212A'
}

export const H1 = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 83.2px;
`;

export const H2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
`;

export const Subheader = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
`;

export const BodyText = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    white-space: pre-wrap;
`;

export const MenuTitleStyle = css`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 36.4px;
    color: ${themeColors.neutralLight};
`;

export const MenuSubtitleStyle = css`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 41.6px;
    color: ${themeColors.neutralLight};
`;

export const Title = styled(H1)`
    margin-left: calc((100vw - 20px) / 6 + 20px);
    margin-top: 40px;
    color: ${themeColors.primary};
    margin-bottom: 0px;
`;

export enum CaseStudyType {
    Amigurumate,
    JCrew,
    Zyno
}

export const Competitors = styled.div`
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

export const PersonaImage = styled.img`
    width: 50vw;
    align-self: center;
    height: auto;
`;

export const DemoImg = styled.img`
    width: 100%;
    height: auto;
`;

export const HeroSection = styled.div`
    padding: 80px calc((100vw - 20px) / 6 + 20px);
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

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Subtitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 41.6px;
    color: #000000;
    text-align: center;
`;

export const LogoImage = styled.img`
    width: 50%;
    height: auto;
    align-self: center;
`;