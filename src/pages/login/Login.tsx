import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  const handleEntrar = () => {
    console.log(email);
    console.log(senha);
  };

  return (
    <div>
      <form>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button onClick={handleEntrar} type="button">
          Entrar
        </button>
      </form>
    </div>
  );
};
