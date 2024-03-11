import './App.css';
import styled from 'styled-components';
import GlobalStyle from './themes/global';
import ClockComponent from './components/clock';
import Card from './components/card';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import firebaseInit from './service/firebase';
import List from './components/list';

const AppContainer = styled.div`
  @media screen and (max-width: 701px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
  }

  @media screen and (min-width: 701px) {
    display: grid;
    color: white;
    grid-template-columns: 200px auto 200px;
    grid-template-areas:
      "actrl clock astatus"
      "widgets widgets widgets"
      "content content content";
  }
`;

const WidgetContainer = styled.div`
  grid-area: widgets;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Widget(props) {
  return (
    <WidgetContainer>
      <Card heading="Schedule a doctor visit" icon="doctor" />
      <Card heading="Call ambulance" icon="ambulance" />
      <Card heading="Check history" icon="file" />
    </WidgetContainer>
  )
}


function App() {
  // const [user] = useAuthState(auth);
  // if (!user) {
  //   <AppContainer>
  //     <GlobalStyle />
  //     <h1>Not signed in</h1>
  //   </AppContainer>
  // }
  const [data, setData] = useState([]);
  useEffect(() => {
    firebaseInit();
    // TODO: read data
    setData(
        [
          {
          "timestamp": "2021-10-02T12:00:00Z",
          "bodyTemperature": "37.5",
        },
        {
          "timestamp": "2021-10-01T12:00:00Z",
          "bodyTemperature": "36.5",
        }
      ]);
  },[setData]);

  return (
    <AppContainer>
      <GlobalStyle />
      <ClockComponent />
      <Widget />
      <List data={data} />
    </AppContainer>
  );
}

export default App;
