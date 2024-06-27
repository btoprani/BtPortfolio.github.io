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

const GoalsTable = styled.table`
    width: 100%;
    table-layout: fixed;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    thead {
        background-color: #4359CC;
        color: #F2F4FF;
        font-weight: 600;
    }
    tbody {
        tr: nth-child(even) {
            background-color: #EFBC9D;
        }
    }
    td {
        padding: 2px 4px;
    }
`;

export const ZynoProjectGoals = () => {
    return <>
        <BulletList>
            <SectionTitle>Common Goals</SectionTitle>
            <ul>
                <li>A product that can automate social media posts</li>
                <li>A product that can generate engagement</li>
                <li>Reduce the amount of marketing and advertising work a user has to do</li>
            </ul>
        </BulletList>
        <BulletList>
            <SectionTitle>Separate Goals</SectionTitle>
            <GoalsTable>
                <thead>
                    <tr>
                        <td>Category</td>
                        <td>Business Goals</td>
                        <td>User Goals</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>Earn Profit</td>
                        <td>Not too expensive</td>
                    </tr>
                    <tr>
                        <td>Product Must</td>
                        <td>Grow the Business</td>
                        <td>Something simple and easy to use</td>
                    </tr>
                </tbody>
            </GoalsTable>
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