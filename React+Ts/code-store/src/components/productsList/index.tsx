import { FakeStoreAPIController } from "apis/fakeStoreApiController";
import { ListComponent } from "components/listComponent";
import { Product } from "components/product";
import { ICategory, IProduct, ISearchFilter } from "interfaces/ItensApi";
import { useEffect, useState } from "react";
import { Styled_ProductsSection } from "./styles";

interface PropsProductsList extends ISearchFilter {
  category?: ICategory
}
export function ProductsList({limit, sort, category}:PropsProductsList){

  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  // retorna a função correta a ser executada perate os parâmetros
  const getRequestFunction = () => {
    if(category){
      return FakeStoreAPIController.getProductsInCategory(category);
    }
    return FakeStoreAPIController.getProducts({
      limit: limit,
      sort: sort
    });
  };

  // Retorna a lista de produtos filtrada
  const getProducts = async () => {
    const requestFunc = getRequestFunction();
    const products = await requestFunc;
    return products;
  };

  // Carrega os produtos assim que o componente é iniciado
  useEffect(()=>{
    getProducts()
      .then(res => setProducts(res));
  }, ["", category]);

  // ----------------------------------
  // RENDER
  // Erro no carregamento dos produtos
  if(!products){
    return(
      <section>
        não foi possivel carregar os produtos, tente novamente
      </section>
    );
  }

  // Produtos caregando
  if(products.length === 0){
    return(
      <section>
        loading
      </section>
    );
  }

  // Produtos Carregadas
  return (
    <Styled_ProductsSection>
      <ListComponent components={products} returnFunction={
        (product, index)=>{
          return (
            <Product key={index} product={product} />
          ); 
        }
      } />
    </Styled_ProductsSection>
  );

}