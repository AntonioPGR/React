import { IProduct } from "interfaces/ItensApi";
import { Styled_Product } from "./styles";

interface PropsProduct {
  product: IProduct
}
export function Product(props:PropsProduct){

  const { category, description, id, image, price, title} = props.product;

  return (
    <Styled_Product>
      <h3> {title} </h3>
      <div>
        <img alt={`${title}`} src={image}/>
      </div>
      <p> {description} </p>
      <p> {price} </p>
      <div>
        <span> {category} </span>
        <span> {id} </span>
      </div>
    </Styled_Product>
  );
}