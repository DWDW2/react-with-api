import { useContext } from "react"
import { AppContext, ContextType } from "./context/AuthContext"

type Props = {}

export default function Home({}: Props) {
    const { user, login, logout } = useContext(AppContext)

  return (
    <div>
     <button onClick={() => login()} >
        Login
     </button>
     <button onClick={() => logout()} >
        logout
     </button>
     {user ? 'hello' : 'not logged in'}
    </div>
  )
}