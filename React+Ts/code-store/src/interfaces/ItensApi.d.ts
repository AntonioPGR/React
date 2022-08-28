export interface IProduct {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export type ICategory = string

export interface ICartProduct {
  productId: number,
  quantity: number
}

export interface ICart{
  id: number,
  userId: number,
  date: Date,
  products: ICartProduct[]
}

export interface IUser{
  id: number,
  email: string,
  username: string,
  password: string,
  name:{
    firstname: string,
    lastname: string
  },
  address:{
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation:{
        lat: string,
        long: string
    }
  },
  phone: string
}

export interface ILogin{
  token: string
}

export type ISortOptions = "desc" | "asc"

export type ILimit = number

export interface ISearchFilter{
  limit?: ILimit,
  sort?: ISortOptions
}

export type HttpMethods = "POST" | "GET" | "DELETE" | "PUT"

export interface deleteFetchInfo {
  method: HttpMethods
}
export interface newFetchInfo {
  method: HttpMethods,
  body: string
}