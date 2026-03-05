import "./LoginForm.css";
import { useState } from "react";

export default function LoginForm() {

const [pass, setPass] = useState()
const [user, setUser] = useState()

var enviar= async() => {
  await fetch('http://localhost:3334/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user,
    pass
  })
})
}
  return (
    <div className="login-page">
      <div className="login-frame">
        <form className="login-card">
          <h1 className="login-title">Entrar</h1>

          <label className="login-field">
            <span>Usuario</span>
            <input type="text" name="username" placeholder="Seu usuario" onChange={e => setUser(e.target.value)} required />
          </label>

          <label className="login-field">
            <span>Senha</span>
            <input type="password" name="password" placeholder="Sua senha"  onChange={e => setPass(e.target.value)} required />
          </label>

          <button className="login-button" type="button" onClick={enviar}>
            Conectar
          </button>
        </form>
      </div>
    </div>
  );
}
