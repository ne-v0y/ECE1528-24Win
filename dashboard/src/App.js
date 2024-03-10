import './App.css';
import styled from 'styled-components';
import GlobalStyle from './themes/global';
import ClockComponent from './components/clock';
import Card from './components/card';

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
      "widgets widgets widgets";
  }
`;

const WidgetContainer = styled.div`
  grid-area: widgets;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Widget() {
  return (
    <WidgetContainer>
      <Card heading="Schedule a doctor visit" icon="bolt" />
      <Card heading="Call ambulance" icon="bolt" />
      <Card heading="Check history" icon="bolt" />
    </WidgetContainer>
  )
}


function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <ClockComponent />
      <Widget />
    </AppContainer>
  );
}

export default App;
