import { UseAuth } from "../hooks/useAuth"

export default function Home(){
    const auth = UseAuth()
    return (
        <div>
            <h1>Home</h1>
            <h3>Seja bem vindo !{auth.email}</h3>
            <button onClick={auth.logOut}>sair</button>
        </div>
    )
}