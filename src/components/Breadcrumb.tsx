import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link underline="hover" color="inherit" href="/">
        Recipes
      </Link>
      <Link underline="hover" color="inherit" href="/bread">
        Breads
      </Link>
      <Typography color="text.primary">Quick Bread</Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
