import React from 'react';
import styled from 'styled-components';
import Students from './components/Students';
const AppStyles = styled.div`
  box-shadow: 2px 1px 2px 1px;
  padding: 20px;
`;

function App() {
  return (
    <AppStyles>
      <Students></Students>
    </AppStyles>
  );
}

export default App;
