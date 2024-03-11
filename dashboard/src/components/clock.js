import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  return (
    <ClockContainer>
      {`${h > 0 ? (h < 10 ? "0" + h : h) : "00"}:${m > 0 ? (m < 10 ? "0" + m : m) : "00"}:${s > 0 ? (s < 10 ? "0" + s : s) : "00"}`}
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  font-size: 7rem;
  grid-area: clock;
  text-align: center;
`;

export default ClockComponent;
