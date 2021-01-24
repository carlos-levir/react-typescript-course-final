import { AuthProvider } from "./auth";

interface Props {
  children?: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default ContextProvider;