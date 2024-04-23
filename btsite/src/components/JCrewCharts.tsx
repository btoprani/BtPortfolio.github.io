import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { PieBox, PieChart, PieContainer } from "./SharedStyles";

Chart.register(ArcElement, Tooltip, Legend);

//Pie title haha
const Pietle = styled.span`
    font-family: 'Soleil', sans-serif;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
`;
const fullFiveDataset = [{
    label: 'Users',
    data: [5],
    backgroundColor: ['#000000'],
    hoverOffet: 4
}];

const fourDataset = [{
    label: 'Users',
    data: [4, 1],
    backgroundColor: ['#000000', '#DC3737'],
    hoverOffset: 4
}];

const utData1 = {
    labels: ["Loved the Product Page"],
    datasets: fullFiveDataset
}

const utData2 = {
    labels: ["Were confused", "Weren't confused"],
    datasets: fourDataset
}

const utData3 = {
    labels: ["Were unclear on how to edit droplists"],
    datasets: fullFiveDataset
}

const utData4 = {
    labels: ["Did expect"],
    datasets: fullFiveDataset
}

const utData5 = {
    labels: ["Didn't associate", "Did associate"],
    datasets: fourDataset
}

const iData1 = {
    labels: ["Found navigation super easy"],
    datasets: fullFiveDataset
}

const iData2 = {
    labels: ["Had feedback", "Didn't have feedback"],
    datasets: fourDataset
}

export const UserTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>Users' thoughts on the Product Page</Pietle>
                <PieContainer><Pie data={utData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User clarity in navigating the Listing Page</Pietle>
                <PieContainer><Pie data={utData2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User clarity in how to edit droplists</Pietle>
                <PieContainer><Pie data={utData3} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User expectations for navigation via clicking product name on Droplists page</Pietle>
                <PieContainer><Pie data={utData4} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User association of Bell icon with Droplisting</Pietle>
                <PieContainer><Pie data={utData5} /></PieContainer>
            </PieChart>
        </PieBox>
    );
};

export const UsabilityTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>User ease of Navigation in the High-Fidelity Wireframes</Pietle>
                <PieContainer><Pie data={iData1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>Users that had feedback on things that are currently part of the J.Crew site</Pietle>
                <PieContainer><Pie data={iData2} /></PieContainer>
            </PieChart>
        </PieBox>
    );
}