import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Clock from 'react-clock';

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <ClockContainer>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</ClockContainer>;
};

const ClockContainer = styled.div`
  font-size: 7rem;
  grid-area: clock;
  text-align: center;
`;

export default ClockComponent;
