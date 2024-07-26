import { styled } from "@mui/material/styles";

const PREFIX = "Navbar";
export const styles = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  navLinks: `${PREFIX}-navLinks`,
  navButton: `${PREFIX}-navButton`,
  logo: `${PREFIX}-logo`,
  activeNavButton: `${PREFIX}-activeNavButton`,
  secondLine: `${PREFIX}-secondLine`,
  navButtonSecondLine: `${PREFIX}-navButtonSecondLine`,
  activeNavButtonSecondLine: `${PREFIX}-activeNavButtonSecondLine`,
};

export const NavStyledComponent = styled("div")(({ theme }) => ({
  [`&.${styles.root}`]: {
    flexGrow: 1,
  },
  [`& .${styles.appBar}`]: {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0",
  },
  [`& .${styles.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${styles.title}`]: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  [`& .${styles.navLinks}`]: {
    display: "flex",
    gap: theme.spacing(2),
    marginLeft: theme.spacing(20),
  },
  [`& .${styles.navButton}`]: {
    color: "#000",
    borderRadius: 0,
  },
  [`& .${styles.activeNavButton}`]: {
    borderBottom: '3px solid #c62828',
  },
  [`& .${styles.logo}`]: {
    position: 'absolute',
    top: 0,
    left: 50,
  },
  [`& .${styles.secondLine}`]: {
    width: '100%',
    padding: '5px 185px',
    backgroundColor: '#fef3c7',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  [`& .${styles.navButtonSecondLine}`]: {
    color: "#000",
    fontSize: '11px',
    borderRadius: 0
  },
  [`& .${styles.activeNavButtonSecondLine}`]: {
    borderBottom: '3px solid #c62828',
  },
}));