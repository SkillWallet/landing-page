import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme";
import { DrawerProvider } from "common/contexts/DrawerContext";
import ResetCSS from "common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "containers/Navbar";
import Footer from "containers/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
  GradientWrapper,
} from "containers/app.style";

const MainWrapper = ({ children, hideAuth }) => {
  const el = useRef();
  useEffect(() => {
    // if (el.current) {
    //   InitSwAuth({
    //     container: el.current,
    //   });
    // }
  }, [el]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>SkillWallet</title>
          <meta name="theme-color" content="#000" />
          <meta name="author" content="SkillWallet Inc." />
          <link rel="shortcut icon" href="assets/images/SW-Favicon.svg"></link>
          <meta
            name="description"
            content="Do more with your DAO. SkillWallets are Individual NFT IDs that unlock the true potential of Web3 Communities."
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <div ref={el} className="render-dialog-container"></div>
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar hideAuth={hideAuth} />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>{children}</ContentWrapper>
          <GradientWrapper>
            <Footer />
          </GradientWrapper>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default MainWrapper;
