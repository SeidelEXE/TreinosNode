import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="login-page">
      <form className="login-card">
        <h1 className="login-title">Entrar</h1>

        <label className="login-field">
          <span>Usuario</span>
          <input type="text" name="username" placeholder="Seu usuario" required />
        </label>

        <label className="login-field">
          <span>Senha</span>
          <input type="password" name="password" placeholder="Sua senha" required />
        </label>

        <button className="login-button" type="submit">
          Conectar
        </button>
      </form>
    </div>
  );
}
