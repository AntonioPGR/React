import axios from "axios";
import { deleteFetchInfo, ICart, ICategory, IProduct, IUser, newFetchInfo, ISearchFilter } from "interfaces/ItensApi";

export class FakeStoreAPIController{

  // GENERAL FUNCTIONS ---------------------
  /**
   * Faz o request GET a url passada e retora os resultados
   * @param requestURL url a ser requisitada
   * @returns informações retornadas da api
   */
  public static get<T>(requestURL:string):Promise<T | undefined>{
    return axios.get<T>(requestURL)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return undefined;
      });
  }
  /**
   * Faz o request POST, PUT e DELETE a url passada e retora os resultados
   * @param requestURL url a ser requisitada
   * @param data informações a serem passadas no request
   * @returns informações retornadas da api
   */
  public static post<T>(requestUrl:string, data:newFetchInfo):Promise<T | undefined>{
    return axios.post(requestUrl, data)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return undefined;
      });
  }
  public static put<T>(requestUrl:string, data:newFetchInfo):Promise<T | undefined>{
    return axios.put(requestUrl, data)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return undefined;
      });
  }
  public static delete<T>(requestUrl:string, data:deleteFetchInfo):Promise<T | undefined>{
    return axios.delete(requestUrl, data)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return undefined;
      });
  }
  /**
   * Cria uma nova url com request desejando a filtragem perante as opções passadas
   * @param oldRequestUrl url padrão, sem filtragem
   * @param filter opções de filtro
   * @returns nova url com as opções de filtros ligadas
   */
  public static filterSearch(oldRequestUrl:string, filter:ISearchFilter):string{
    let requestQuery = oldRequestUrl;

    // Adiciona os filtros a URL perante as informações passadas, caso existam
    const limitQuery = filter.limit? `limit=${filter.limit}` : undefined;
    const sortQuery = filter.sort? `sort=${filter.sort}` : undefined;

    if(limitQuery && sortQuery){
      requestQuery += `?${limitQuery}&${sortQuery}`;
    } 
    else if(limitQuery){
      requestQuery += `?${limitQuery}`;
    } 
    else if(sortQuery){
      requestQuery += `?${sortQuery}`;
    }

    return requestQuery;
  }


  // PRODUCTS ---------------------
  /**
   * faz o request a API e retorna uma lista completa com os produtos
   * @param filters configurações opcionais de filtro para a busca
   * @returns lista completa de produtos
   */
  public static getProducts(filters?:ISearchFilter) : Promise<IProduct[] | undefined>{
    let requestQuery = "https://fakestoreapi.com/products";
    if(filters){
      requestQuery = FakeStoreAPIController.filterSearch(requestQuery, filters);
    }
    return FakeStoreAPIController.get<IProduct[]>(requestQuery);
  }
  /**
   * Faz o request para a API e retorna o produto com id desejado
   * @param productNumber numero do produto desejado
   * @returns retorna os dados do produto com id correspondente ou undefined caso não encontrado
   */
  public static getProduct(productNumber:number): Promise<IProduct | undefined>{
    return FakeStoreAPIController.get<IProduct>(`https://fakestoreapi.com/products/${productNumber}`);
  }
  /**
   * Faz o request a API e retorna a lista completa com todas as categorias
   * @returns lista completa de categorias
   */
  public static getCategories() : Promise<ICategory[] | undefined>{
    return FakeStoreAPIController.get<ICategory[]>("https://fakestoreapi.com/products/categories");
  }
  /**
   * Faz o request a API e retorna uma lista produtos pertencentes a categoria desejada
   * @param category categoria a qual os produtos retornados pertencem
   * @returns lista de produtos correspondentes a categoria
   */
  public static getProductsInCategory(category: ICategory) : Promise<IProduct[] | undefined>  {
    return FakeStoreAPIController.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
  /**
   * faz a requisição de adicionar um produto ao servidor
   * @param newProduct produto a ser adicionado
   * @returns produto adicionado confirmando o request
   */
  public static addNewProduct(newProduct:IProduct) : Promise<IProduct | undefined>{
    return FakeStoreAPIController.put<IProduct>("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct)
    });
  }
  /**
   * faz a requisição de modificar um produto ao servidor
   * @param productId id do produto a ser modificado
   * @param newProduct produto a ser modificado
   * @returns produto modificado confirmando o request
   */
  public static updateProduct(productId:number, newProduct:IProduct) : Promise<IProduct | undefined>{
    return FakeStoreAPIController.put<IProduct>(`https://fakestoreapi.com/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(newProduct)
    });
  }
  /**
   * faz a requisição de  um produto ao servidor
   * @param productId id do produto a ser deletado
   * @returns produto deletado confirmando o request
   */
  public static deleteProduct(productId:number) : Promise<IProduct | undefined>{
    return FakeStoreAPIController.delete<IProduct>(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    });
  }


  // CARRINHO ---------------------
  /**
   * Faz o request a API e retorna uma lista com todos os carrinhos de comprar registrados
   * @returns todos o carrinho de compras de todos os usuários registrados
   */
  public static getCarts(filters?:ISearchFilter) : Promise<ICart[] | undefined>{
    let requestQuery = "https://fakestoreapi.com/carts";
    if(filters){
      requestQuery = FakeStoreAPIController.filterSearch(requestQuery, filters);
    }
    return FakeStoreAPIController.get<ICart[]>(requestQuery);
  }
  /**
   * Faz o request a API e retorna o carrinho de compra desejado perante ao parâmetro passado
   * @param cartId id do carrinho a ser buscado
   * @returns carrinho de compra com id correspondente ou undefined
   */
  public static getCart(cartId: number) : Promise<ICart | undefined>{
    return FakeStoreAPIController.get<ICart>(`https://fakestoreapi.com/carts/${cartId}`);
  }
  /**
   * Faz o request a API e retorna uma lista com todos os usuários registrados
   * @param userId id do usuário de desejo na busca dos carrinhos
   * @returns todos o carrinho de compras percentente ao usuário com id correspondente
   */
  public static getUserCarts(userId: number) : Promise<ICart[] | undefined>{
    return FakeStoreAPIController.get<ICart[]>(`https://fakestoreapi.com/carts/user/${userId}`);
  }
  /**
   * faz a requisição de adicionar um carrinho ao servidor
   * @param newCart carrinho a ser adicionado
   * @returns carrinho adicionado confirmando o request
   */
  public static addNewCart(newCart:ICart) : Promise<ICart | undefined>{
    return FakeStoreAPIController.put<ICart>("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(newCart)
    });
  }
  /**
   * faz a requisição de modificar um carrinho ao servidor
   * @param cartId id do carrinho a ser modificado
   * @param newCart carrinho a ser modificado
   * @returns carrinho modificado confirmando o request
   */
  public static updateCart(cartId:number, newCart:ICart) : Promise<ICart | undefined>{
    return FakeStoreAPIController.put<ICart>(`https://fakestoreapi.com/carts/${cartId}`, {
      method: "PUT",
      body: JSON.stringify(newCart)
    });
  }
  /**
   * faz a requisição de  um carrinho ao servidor
   * @param cartId id do carrinho a ser deletado
   * @returns carrinho deletado confirmando o request
   */
  public static deleteCart(cartId:number) : Promise<ICart | undefined>{
    return FakeStoreAPIController.delete<ICart>(`https://fakestoreapi.com/carts/${cartId}`, {
      method: "DELETE",
    });
  }


  // USUARIOS ---------------------
  /**
   * Faz o request a API e retorna uma lista com todos os usuários
   * @returns todos os usuários registrados
   */
  public static getUsers(filters?:ISearchFilter):Promise<IUser[] | undefined>{
    let requestQuery = "https://fakestoreapi.com/users";
    if(filters){
      requestQuery = FakeStoreAPIController.filterSearch(requestQuery, filters);
    }
    return FakeStoreAPIController.get<IUser[]>(requestQuery);
  }
  /**
   * Faz o request a API e retorna o usuário de desejo
   * @param userId id do usuário de desejo
   * @returns usuário correspondente
   */
  public static getUser(userId: number):Promise<IUser | undefined>{
    return FakeStoreAPIController.get<IUser>(`https://fakestoreapi.com/users/${userId}`);
  }
  /**
   * faz a requisição de adicionar um usuário ao servidor
   * @param newUser usuário a ser adicionado
   * @returns usuário adicionado confirmando o request
   */
  public static addNewUser(newUser:IUser) : Promise<IUser | undefined>{
    return FakeStoreAPIController.put<IUser>("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(newUser)
    });
  }
  /**
   * faz a requisição de modificar um usuário ao servidor
   * @param productId id do usuário a ser modificado
   * @param newUser usuário a ser modificado
   * @returns usuário modificado confirmando o request
   */
  public static updateUser(userId:number, newUser:IUser) : Promise<IUser | undefined>{
    return FakeStoreAPIController.put<IUser>(`https://fakestoreapi.com/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify(newUser)
    });
  }
  /**
   * faz a requisição de deletar um usuário ao servidor
   * @param productId id do usuário a ser deletado
   * @returns usuário deletado confirmando o request
   */
  public static deleteUser(userId:number){
    return FakeStoreAPIController.delete<IUser>(`https://fakestoreapi.com/users/${userId}`, {
      method: "DELETE"
    });
  }

}
