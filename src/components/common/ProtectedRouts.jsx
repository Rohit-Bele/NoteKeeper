import { useContext } from 'react'
import AuthContext from '../../context/AuthContext.jsx'
import { Navigate } from "react-router-dom"

function ProtectedRouts({children}) {

  const {islogginedin} = useContext(AuthContext)

  if (!islogginedin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRouts