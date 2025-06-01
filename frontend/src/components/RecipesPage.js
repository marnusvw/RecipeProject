import { useParams } from "react-router-dom";

function RecipesPage() {
  const { title } = useParams();
  return <div>{title}</div>;
}

export default RecipesPage;
