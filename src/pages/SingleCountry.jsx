import { useParams } from "react-router-dom";

export default function SingleCountry() {
  const { name } = useParams();
  return <div>{name}</div>;
}
