import React from "react";

import Grid from "@styled/Grid";
import Link from "@components/shared/Link";
import styled from 'styled-components'
import { injectIntl, IntlInterface } from "@common/i18n";
import Navigation from "./Navigation";
import { HeaderWrapper, HeaderLogo, GithubButtonsWrapper } from "./styled";

interface HeaderProps {
  horizontalBg?: boolean;
  hiddenNav: boolean;
  search?: boolean;
}

const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white

  img {
    width: 80px;
    margin-right: 10px;
    margin-bottom: 0px
  }
`

const Header: React.FunctionComponent<HeaderProps & IntlInterface> = ({
  horizontalBg = false,
  hiddenNav,
  formatMessage,
}) => (
  <HeaderWrapper horizontalBg={horizontalBg}>
    <Grid.Container>
      <GithubButtonsWrapper>
        <Link.Internal
          to="/"
          ariaLabel={formatMessage({ id: "header.ariaLabel" })}
        >
          <HeaderLogo horizontalBg={horizontalBg}>
            <LogoImg> 
              <img src={require('./assets/android-chrome-512x512.png')}></img>
              <span>OrionStar</span>
            </LogoImg>

          </HeaderLogo>
        </Link.Internal>
      </GithubButtonsWrapper>
      {false ? null : <Navigation />}
    </Grid.Container>
  </HeaderWrapper>
);

export default injectIntl("layout")(Header);
