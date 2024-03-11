import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    grid-area: history;
    display: flex; 
    flex-direction: row;
    align-items: center;
    min-height: 300px;
    flex-wrap: wrap;
`;

const List = ({ data }) => {
    <ListContainer>
        <ul>
            {data?.map((item, index) => (
                <li key={index}>{`Timestamp: ${item.timestamp} Body Temperature: ${item.bodyTemperature}`}</li>
            ))}
        </ul>
    </ListContainer>

};

export default List;