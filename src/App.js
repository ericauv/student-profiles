import React from 'react';
import styled from 'styled-components';
import Students from './components/Students';
import './index.css';
const AppStyles = styled.div`
  margin: auto;
  box-shadow: 1px 1px 2px 2px lightgrey;
  border-radius: 5px;
  width: 75vw;
  height: 75vh;
  overflow: hidden;
`;

class App extends React.Component {
  render() {
    return (
      <AppStyles className="App" style={{ padding: '20px' }}>
        <Students></Students>
      </AppStyles>
    );
  }
}

export default App;
