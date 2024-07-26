'use client';

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import MonkeyLogo from '@app/images/monkey_logo.png';
import Link from "next/link";
import { NavStyledComponent, styles } from "./NavBar.styles";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <NavStyledComponent className={styles.root}>
      <div className={styles.logo}>
        <Image src={MonkeyLogo} alt={"logo"} width={100} height={100} />
      </div>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <div className={styles.navLinks}>
            <Link href="/shop" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/shop' ? styles.activeNavButton : ''}`}>Shop</Button>
            </Link>
            <Link href="/" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/' ? styles.activeNavButton : ''}`}>Recipes</Button>
            </Link>
            <Link href="/learn" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/learn' ? styles.activeNavButton : ''}`}>Learn</Button>
            </Link>
            <Link href="/about" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/about' ? styles.activeNavButton : ''}`}>About</Button>
            </Link>
            <Link href="/blog" passHref>
              <Button className={`${styles.navButton} ${router.pathname === '/blog' ? styles.activeNavButton : ''}`}>Blog</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={styles.secondLine}>
        <Link href="/categories" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/categories' ? styles.activeNavButton : ''}`}>Categories</Button>
        </Link>
        <Link href="/collections" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/collections' ? styles.activeNavButton : ''}`}>Collection</Button>
        </Link>
        <Link href="/resource" passHref>
          <Button className={`${styles.navButtonSecondLine} ${router.pathname === '/resource' ? styles.activeNavButton : ''}`}>Resource</Button>
        </Link>
      </div>
    </NavStyledComponent>
  );
};

export default Navbar;
