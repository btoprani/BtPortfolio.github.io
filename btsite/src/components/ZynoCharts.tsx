import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { PieBox, PieChart, PieContainer } from "./SharedStyles";

Chart.register(ArcElement, Tooltip, Legend);

//Pie title haha
const Pietle = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
`;

const fullFiveDataset = [{
    label: 'Users',
    data: [5],
    backgroundColor: ['#4359CC'],
    hoverOffet: 4
}];

const fourDataset = [{
    label: 'Users',
    data: [4, 1],
    backgroundColor: ['#4359CC', '#FF7E40'],
    hoverOffset: 4
}];

const utData1 = {
    labels: ["Easily navigated full flow"],
    datasets: fullFiveDataset
}

const utData2 = {
    labels: ["Solved their problem", "Didn't solve their problem"],
    datasets: fourDataset
}

const utData3 = {
    labels: ["Had a problem with the buttons", "Didn't have problems with the buttons"],
    datasets: fourDataset
}

const iData1 = {
    labels: ["Didn't like the pale blue", "Didn't care"],
    datasets: fourDataset
}

const iData2 = {
    labels: ["Thought button was too long", "Didn't care"],
    datasets: fourDataset
}

const iData3 = {
    labels: ["Hesitated", "Didn't hesitate"],
    datasets: fourDataset
}


export const UserTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>User ease in completing the full flow</Pietle>
                <PieContainer><Pie data={utData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>Users' feeling as to if this solves their problem</Pietle>
                <PieContainer><Pie data={utData2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User problems experienced with the buttons</Pietle>
                <PieContainer><Pie data={utData3} /></PieContainer>
            </PieChart>
        </PieBox>
    );
};

export const UsabilityTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>User thoughts on the color scheme</Pietle>
                <PieContainer><Pie data={iData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User thoughts on bottom button in the Post Page</Pietle>
                <PieContainer><Pie data={iData2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User hesitation when attempting to sign in</Pietle>
                <PieContainer><Pie data={iData3} /></PieContainer>
            </PieChart>
        </PieBox>
    );
}