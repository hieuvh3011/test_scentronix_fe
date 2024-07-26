'use client';
import { Container, Box } from "@mui/material";
import RecipeCard from "@app/components/RecipeCard/RecipeCard";
import Breadcrumb from "@app/components/Breadcrumb";
import BreadImage from '@app/images/bread.png';
import { GetServerSideProps } from 'next';
import RecipeService from "@app/service/RecipeService";

const mockData: IRecipe = {
  title: 'Whole-Grain Banana Bread',
  content: `This one-bowl banana bread -- our 2018 recipe 
  of the Year -- uses the simplest ingredients, but is incredibly most and flavorful. 
  While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), 
  we often make the bread 100% whole wheat, and honestly? No one can tell, 
  it's that good! And not only is this bread delicious -- it's versatile`,
  prepTime: "10 mins",
  bakeTime: "1 hr to 1 hr 15 mins",
  totalTime: "1 hr 10 mins",
  yield: "1 loaf, 12 generous servings",
}

interface RecipeProps {
  recipe: IRecipe;
}

const RecipePage: React.FC<RecipeProps> = ({ recipe }) => {
  return (
    <Container>
      <Box my={1} mx={4}>
        <Breadcrumb />
      </Box>
      <RecipeCard
        title={recipe.title}
        description={recipe.content}
        image={BreadImage}
        prepTime={recipe.prepTime}
        bakeTime={recipe.bakeTime}
        totalTime={recipe.totalTime}
        makes={recipe.yield}
      />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // fetch recipe from backend
  try {
    const recipe = await RecipeService.getRecipeById('1');
  } catch (error) {
    // Will have error since we do not have any real API here
    console.error(error)
  }

  return {
    props: {
      recipe: mockData, // doesn't have backend, so we get the mockData
    },
  };
};

export default RecipePage;
