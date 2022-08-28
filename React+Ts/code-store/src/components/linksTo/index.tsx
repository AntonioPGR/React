import { Link } from "react-router-dom";

interface LinkTo{
  to: string,
  label: string
}
interface LinksProps{
  links: LinkTo[]
}
export function Links({ links }:LinksProps){

  return (
    <>
      {
        links.map((value, index) => {
          return (
            <Link to={value.to} key={index} >
              {value.label}
            </Link>
          );
        })
      }
    </>
  );

}