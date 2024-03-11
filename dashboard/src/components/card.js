import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTruckMedical,
  faUserDoctor,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  bolt: faBolt,
  ambulance: faTruckMedical,
  doctor: faUserDoctor,
  file: faFileLines,
};

const Card = ({ heading, icon }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Content>
        <FontAwesomeIcon icon={icons[icon]} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: rgb(32, 42, 59);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 150px;
  flex-basis: auto;
  justify-content: space-between;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 1rem;
  margin: 0.5rem;
  text-align: center;
`;
const Heading = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: 30px;
  align-self: center;
`;
const Content = styled.div`
  font-size: 3rem;
  align-self: center;
`;

export default Card;
