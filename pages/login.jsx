import { useContext, useState } from "react"
import { UseAuth } from "../hooks/useAuth"
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const auth = UseAuth()
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()


        try {
            await auth.autheticate(login, senha)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }

        


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login">Login:</label>
                <input type="text" onChange={(e) => setLogin(e.target.value)} id="login" />
                <br></br>
                <br></br>
                <label htmlFor="senha">senha:</label>
                <input type="password" onChange={(e) => setSenha(e.target.value)} id="senha" />
                <br></br>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}