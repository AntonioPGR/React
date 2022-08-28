// EXTERNAL
import { useEffect, useState } from "react";

// INTERFACES
import { ICategory } from "interfaces/ItensApi";
import { FakeStoreAPIController } from "apis/fakeStoreApiController";
import { Link } from "react-router-dom";

export function CategoriesList(){

  // Array que contem as categories a ser listadas
  const [categories, setCategories] = useState<ICategory[] | undefined>();

  // Faz o request das categorias a API
  useEffect(()=>{
    FakeStoreAPIController.getCategories()
      .then(res => setCategories(res));
  }, []);

  // Mapeia o array de categorias e retorna elas formatadas em jsx
  const listCategories = () => {
    if(!categories){
      return "nothing to show";
    }

    return categories.map((name, index)=>{
      return (
        <Link to={`/products/${name}`} key={index}>
          {name}
        </Link>
      );
    });
  };

  // RENDER
  // TELA DE LOADING
  if(!categories){
    return (
      <div>
        loading
      </div>
    );
  }

  // CATEGORIAS NÃO ENCONTRADAS
  if(categories.length === 0){
    return (
      <div>
        We don&apos;t have any categories yet, please return later
      </div>
    );
  }

  // CATEGORIAS OBTIDAS DA API
  return (
    <section>
      {
        listCategories()
      }
    </section>
  );
}