// COMPONENTS
import { CategoriesList } from "../../components/categoriesList";
import { ProductsList } from "components/productsList";

export function HomePage(){

  return (
    <>
      <CategoriesList />
      <ProductsList limit={5}/>
    </>
  );
}