import React from "react";

import { OutterMostDiv } from "../styledcomponents/StyledEle";
import styled from "styled-components";

const Detail = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    border:3px solid grey;
    margin:3rem;
    align-items:center;
    justify-content:space-around;
    background-color:#865439;
    border-radius:20px;
    box-shadow: 10px 5px 5px 5px;
    text-shadow: 1px 1px;

    h2{
        font-size:3rem;
        color:#FFC947;
    }

    span{
        display:flex;
        font-size:1.5rem;
        color:#F9F3DF
    }
`

const Procedures = () => {
    return (
        <OutterMostDiv className="procedureDiv">
            <Detail className="detail1">
                <h2>Renter</h2>
                <span>Select The Equipment</span>
                <span>Send Request To The Owner</span>
                <span>Wait For The Response</span>
                <span>Accept The Equipment</span>
                <span>Return The Equipment On Time</span>
            </Detail>
            <Detail className="detail2">
                <h2>Owner</h2>
                <span>Post The Equipment</span>
                <span>Check For Any New Requests</span>
                <span>Sent Renter Response</span>
                <span>Sent Renter Equipment</span>
                <span>Wait For Renter Return The Equipment</span>
                <span>Check The Equipment</span>
                <span>Report Any Impairment On Equipment</span>
            </Detail>
        </OutterMostDiv>
    )
}

export default Procedures;