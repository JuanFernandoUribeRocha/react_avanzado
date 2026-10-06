import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color #333;`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;

  &hover {
    background-color: #0056b3;
  }
`;

function App() {
  return (
    <>
      <section id="center">
        <Title>Mi App</Title>
        <Button>Click me</Button>
      </section>
    </>
  );
}

export default App;
