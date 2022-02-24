import { useCallback, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputSenhaRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(senha);

    if (inputSenhaRef.current !== null) {
      inputSenhaRef.current.focus();
    }
  }, [email, senha]);

  const emailLenght = useMemo(() => {
    console.log("Executou!");
    return email.length;
  }, [email]);

  return (
    <div>
      <p>Quantidade de caracteres do e-mail: {emailLenght}</p>
      <form>
        <InputLogin
          label="E-mail"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputSenhaRef.current?.focus()}
        />
        <InputLogin
          type="password"
          label="Senha"
          value={senha}
          ref={inputSenhaRef}
          onChange={(newValue) => setSenha(newValue)}
        />

        <ButtonLogin onClick={handleEntrar} type="button">
          Entrar
        </ButtonLogin>
      </form>
    </div>
  );
};
