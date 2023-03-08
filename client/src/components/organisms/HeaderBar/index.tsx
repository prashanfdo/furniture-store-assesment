import styled from "@emotion/styled";
import SearchBar from "components/organisms/SearchBar";

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: lightblue;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
`;
const ImgLogo = styled.img`
  height: 100%;
`;
const DivSearchContainer = styled.div`
  display: grid;
  place-items: center;
`;

export default function HeaderBar() {
  return (
    <>
      <Header>
        <ImgLogo src="/home24_logo.svg" alt="" />
        <DivSearchContainer>
          <SearchBar />
        </DivSearchContainer>
      </Header>
    </>
  );
}
