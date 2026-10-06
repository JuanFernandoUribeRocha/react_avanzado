import styled from "styled-components";

function Navbar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
  `;
  const Brand = styled.a`
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  `;
  const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 0;
    padding: 0;
  `;
  const MenuLink = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover &:focus-visible {
      text-decoration: underline;
    }
  `;

  function Navbar() {
    return (
      <Nav>
        <Brand href="/">Logo</Brand>
        <Menu>
          <li>
            <MenuLink href="/">Home</MenuLink>
          </li>
          <li>
            <MenuLink href="#productos">Products</MenuLink>
          </li>
          <li>
            <MenuLink href="#informacion">Information</MenuLink>
          </li>
          <li>
            <MenuLink href="#contacto">Contact</MenuLink>
          </li>
        </Menu>
      </Nav>
    );
  }
}

export default Navbar;
