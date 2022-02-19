import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  const emailLenght = useMemo(() => {
    console.log("Executou!");
    return email.length;
  }, [email]);

  // useEffect(() => {
  //   console.log(email);
  //   console.log(senha);
  // }, [email, senha]);

  // const handleEntrar = () => {
  //   console.log(email);
  //   console.log(senha);
  // };

  return (
    <div>
      <p>Quantidade de caracteres do e-mail: {emailLenght}</p>
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
