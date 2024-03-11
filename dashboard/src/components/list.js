import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    grid-area: footer;
    background: rgb(32, 42, 59);
    display: flex; 
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    width: 100%;
    flex-wrap: wrap;
`;

const List = ({ data }) => {
    <ListContainer>
        <ul>
            {data?.map((item, index) => (
                <li key={index}>{`Timestamp: ${item.timestamp} Body Temperature: ${item.bodyTemperature}}`}</li>
            ))}
        </ul>
    </ListContainer>

};

export default List;