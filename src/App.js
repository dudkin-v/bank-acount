import styled from "styled-components";

import {LoginForm} from "./components/LoginForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8e3e3;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
    const handleSubmit = (values) => {
        console.log(values)
    };

    return (
        <Container>
            <LoginForm onSubmitForm={handleSubmit}/>
        </Container>
    )
}

export default App;
