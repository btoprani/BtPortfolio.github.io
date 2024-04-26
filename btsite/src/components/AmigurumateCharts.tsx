import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

Chart.register(ArcElement, Tooltip, Legend);

const PieBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
`;

const PieChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-height: 300px;
`;

//Pie title haha
const Pietle = styled.span`
    font-family: 'Rosario', sans-serif;
    font-weight: 600;
    font-size: 16px;
    max-width: 300px;
    text-align: center;
`;

const PieContainer = styled.div`
    max-height: 240px;
`;

const fullFiveDataset = [{
    label: 'Users',
    data: [5],
    backgroundColor: ['#4A3E59'],
    hoverOffet: 4
}]
const fourDataset = [{
    label: 'Users',
    data: [4, 1],
    backgroundColor: ['#4A3E59', '#B285F2'],
    hoverOffset: 4
}]

const data1 = {
    labels: ["Prefered below set of wireframes"],
    datasets: fullFiveDataset
};

const data2 = {
    labels: ["Wanted completed patterns at the end.", "Wanted patterns in order of creation"],
    datasets: fourDataset
};

const data3 = {
    labels: ["Liked the outlines more", "Didn't care"],
    datasets: [{
        label: 'Users',
        data: [3, 2],
        backgroundColor: ['#4A3E59', '#B285F2'],
        hoverOffset: 4
    }]
}

const data4 = {
    labels: ["Wanted arrows and increments", "Didn't care"],
    datasets: fourDataset
}

const data5 = {
    labels: ["Wanted stitch shorthand modals", "Didn't care"],
    datasets: fourDataset
}

const data6 = {
    labels: ["Wanted ordered lists of patterns"],
    datasets: fullFiveDataset
}

export const UserTestingCharts = () => {
    return (
        <PieBox>
            <PieChart>
                <Pietle>User preference for above or below Low-Fidelity wireframes</Pietle>
                <PieContainer><Pie data={data1} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for patterns being in ordered list</Pietle>
                <PieContainer><Pie data={data6} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for completed pattern location</Pietle>
                <PieContainer><Pie data={data2} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for cards to have outlines or not</Pietle>
                <PieContainer><Pie data={data3} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for stitch counter to have arrows or imcrements</Pietle>
                <PieContainer><Pie data={data4} /></PieContainer>
            </PieChart>
            <PieChart>
                <Pietle>User preference for tapping a stitch shorthand opening a modal</Pietle>
                <PieContainer><Pie data={data5} /></PieContainer>
            </PieChart>
        </PieBox>
    );
};

