import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import PropertyBox from "../PropertyBox";
import { Add, Schedule, GroupWorkOutlined, Print } from "@mui/icons-material";
import { button, imageWrapper } from "./RecipeCard.styles";

interface RecipeCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  makes: string;
}

const RecipeCard: FC<RecipeCardProps> = ({
  title,
  description,
  image,
  prepTime,
  bakeTime,
  totalTime,
  makes,
}) => {
  return (
    <div className="flex">
      <CardContent sx={{ padding: "30px" }}>
        <Typography
          component="div"
          sx={{ fontWeight: "bold", fontSize: "36px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mt={10}
          sx={{ textAlign: "justify" }}
        >
          {description}
        </Typography>
        <Box mt={2} sx={{ display: "flex" }}>
          <PropertyBox
            title={"PREP"}
            value={prepTime}
            icon={<Schedule fontSize="large" />}
          />
          <PropertyBox title={"BAKE TIME"} value={bakeTime} />
          <PropertyBox title={"TOTAL"} value={totalTime} />
        </Box>
        <Box sx={{ display: "flex", bgcolor: "grey", height: 2 }} />

        <Box mt={2} sx={{ display: "flex" }}>
          <PropertyBox
            title={"YIELD"}
            value={makes}
            icon={<GroupWorkOutlined fontSize="large" />}
          />
          <Button
            variant="outlined"
            startIcon={<Add fontSize="small" />}
            sx={button}
            color="inherit"
          >
            Save Recipe
          </Button>
          <Button
            variant="outlined"
            startIcon={<Print fontSize="small" />}
            sx={button}
            color="inherit"
          >
            Print
          </Button>
        </Box>
      </CardContent>
      <Box sx={imageWrapper}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          objectFit="cover"
          width={400}
          height={400}
          quality={100}
        />
      </Box>
    </div>
  );
};

export default RecipeCard;
