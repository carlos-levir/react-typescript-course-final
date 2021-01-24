import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/auth";

interface Props extends RouteProps {
  isPrivate: boolean;
  signed: boolean;
}

export default function CustomRoute({ isPrivate, signed, ...rest }: Props) {
  const { loading } = useAuth();

  if (loading) {
    return <h1>Carregando</h1>
  }

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />
}