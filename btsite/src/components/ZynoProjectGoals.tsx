import React from "react";
import { SectionTitle } from "./SharedStyles";
import { styled } from "styled-components";

const BulletList = styled.div`
    h2 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 500;
        margin-top: 0;
    }
    li {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
    }
`;

export const ZynoProjectGoals = () => {
    return <>
        <BulletList>
            <SectionTitle>Business Goals</SectionTitle>
            <ul>
                <li>Grow the business</li>
                <li>Earn Profit</li>
            </ul>
        </BulletList>
        <BulletList>
            <SectionTitle>User Goals</SectionTitle>
            <ul>
                <li>Something simple and easy to use</li>
                <li>Not too expensive</li>
            </ul>
        </BulletList>
        <BulletList>
            <SectionTitle>Common Goals</SectionTitle>
            <ul>
                <li>A product that can automate social media posts</li>
                <li>A product that can generate engagement</li>
                <li>Reduce the amount of marketing and advertising work a user has to do</li>
            </ul>
        </BulletList>
        <BulletList>
            <SectionTitle>Technical Considerations</SectionTitle>
            <ul>
                <li>It’s hard to tune ChatGPT to come up with something strong and robust enough to generate engagement on social media</li>
                <li>Creating videos, especially with deepfaked voices, is very processor-intensive, so the product will have to be running on a highly-threaded server</li>
            </ul>
        </BulletList>
    </>
}