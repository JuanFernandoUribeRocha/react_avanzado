import styled from "styled-components";
const CardButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 20px;
  font: inherit;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;
function Card({ title, description, onClick }) {
  return (
    <CardButton onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardButton>
  );
}
export default Card;
