import styled from "styled-components";
import bannerImg from "../assets/banner.jpg";
const BannerContainer = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
  min-height: 300px;
  display: grid;
  place-items: center;
  text-align: center;
`;

function Banner() {
  return (
    <BannerContainer>
      <h1>Welcome to Our Store</h1>
    </BannerContainer>
  );
}
export default Banner;
