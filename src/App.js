import styled from "styled-components";
import Header from "./components/Header";


function App() {
  return (
    <Container className="App">
      <Header/>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default App;
