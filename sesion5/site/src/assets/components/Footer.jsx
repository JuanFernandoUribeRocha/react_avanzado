const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const SocialLink = styled.a`
  display: inline-flex;
  border-radius: 6px;
  &:hover,
  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;
function Footer() {
  return (
    <FooterContainer>
      <SocialLink href="http://instagram.com" target="_blank">
        <SocialIcon src={icon1} alt="Instagram" />
      </SocialLink>
      <SocialLink href="http://facebook.com" target="_blank">
        <SocialIcon src={icon2} alt="Instagram" />
      </SocialLink>
    </FooterContainer>
  );
}
