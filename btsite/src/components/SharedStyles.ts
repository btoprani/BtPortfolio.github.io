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
    font-family: 'Luciole', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    white-space: pre-wrap;
`;

export const MenuTitleStyle = css`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 41.6px;
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

