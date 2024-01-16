import { Container } from "../App.styled";
import { HeaderBox, StyledLink } from "./Headet.styled";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <Container>
      <HeaderBox>
        <StyledLink to="/Home" aria-label="Home">
          <Logo />
        </StyledLink>

        <nav>
          <StyledLink to="/Home" aria-label="Home">
            Home
          </StyledLink>
          <StyledLink to="/Pizza" aria-label="Pizza">
            Pizza
          </StyledLink>
        </nav>
        <StyledLink to="/Basket" aria-label="Basket">
          Basket
        </StyledLink>
      </HeaderBox>
    </Container>
  );
};
