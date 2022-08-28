import { CategoriesList } from "components/categoriesList";
import { ProductsList } from "components/productsList";
import { useParams } from "react-router-dom";

export function ProductsPage(){

  const getCurrentCategory = () => {
    return useParams().category;
  };

  return(
    <>
      <CategoriesList />
      <ProductsList category={getCurrentCategory()} />
    </>
  );
}