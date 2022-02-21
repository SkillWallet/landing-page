import React, { useContext } from "react";
import PropTypes from "prop-types";
import NavbarWrapper from "common/components/Navbar";
import Logo from "common/components/UIElements/Logo";
import Box from "common/components/Box";
import Drawer from "common/components/Drawer";
import Container from "common/components/UI/Container";

import { DrawerContext } from "common/contexts/DrawerContext";
import ScrollSpyMenu from "common/components/ScrollSpyMenu";
import Link from "next/link";
import { LinkButton } from "common/components/Button";
import HamburgMenu from "common/components/HamburgMenu";
import { NavabarData } from "common/data";

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);
  const { logo, navItems, button } = NavabarData;

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          {/* <Logo
            href="/"
            logoSrc={logo}
            title="Skillwallet"
            logoStyle={logoStyle}
            className="main-logo"
          /> */}
          <Logo
            href="/"
            logoSrc={logo}
            title="Skillwallet"
            logoStyle={logoStyle}
            className="stricky-logo"
          />
          <Box {...menuWrapper} className="mainMenuWrapper">
            <ScrollSpyMenu
              className="main_menu"
              menuItems={navItems}
              offset={-70}
            />
            <Link href={button.link}>
              <LinkButton
                style={{
                  minWidth: "auto",
                  height: "3.25rem",
                  minHeight: "3.25rem",
                  fontSize: "1.125rem",
                }}
                href={button.link}
                target="_blank"
                className="dark nav-btn"
                title={button.text}
              />
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#108AFF" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={navItems}
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: "sassminimal_navbar",
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["126px", "126px"],
  },
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "600",
    color: "white",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "primaryWithBg",
    minHeight: "auto",
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
