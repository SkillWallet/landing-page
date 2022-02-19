import styled from "styled-components";

const FooterArea = styled.footer`
  background: #000;
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 45px;
    padding-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      grid-gap: 20px;
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  img {
    height: 4.62rem;
  }
`;
export const CopyText = styled.p`
  margin: 0;
  color: #fff;
`;
export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 4.563rem;

  img {
    height: 2.118rem;
  }
`;

export default FooterArea;
