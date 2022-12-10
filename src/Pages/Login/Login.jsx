import { FormLoginContainer, Container, ErrorContainer } from "./Login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginYupValidation } from "@validation/userYupValidation";
import { Link } from "react-router-dom";
import { useAutenticacao } from "@context/Autenticacao";
import { Helmet } from "react-helmet";


import {
  FormTitle,
  FormInput,
  FormError,
  FormLabel,
  ButtonStyle,
  LinkStyled,
  LoadingContainer,
  FormPassword,
} from "@components";
import { GmailStyled, LockFillStyled } from "@components/Icons/Icons.styles";

export const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(LoginYupValidation),
  });

  const { login, desabilitado } = useAutenticacao();

  const onSubmit = (data) => {
    login(data);
  };

  if (desabilitado) {
    return <LoadingContainer msg={"Logando, pode demorar alguns minutos"} />;
  }

  return (
    <>
      <Helmet>
        <title>Connect Lab || Login ✨</title>
        <meta name="description" content="Página do Login" />
      </Helmet>
      <FormLoginContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Login</FormTitle>

        <Container>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <GmailStyled />

          <FormInput
            placeholder="E-mail"
            type="text"
            id="email"
            {...register("email")}
          ></FormInput>

          <ErrorContainer>
            {formState.errors.email && (
              <FormError>{formState.errors.email?.message}</FormError>
            )}
          </ErrorContainer>
        </Container>

        <Container>
          <FormLabel>Senha</FormLabel>
          <LockFillStyled />

          <FormPassword
            placeholder="Senha"
            id="password"
            {...register("password")}
          ></FormPassword>
          <ErrorContainer>
            {formState.errors.password && (
              <FormError>{formState.errors.password?.message}</FormError>
            )}
          </ErrorContainer>
        </Container>
        <ButtonStyle disabled={desabilitado}>ACESSAR</ButtonStyle>
        <LinkStyled>
          <Link to="/cadastro">Cadastrar</Link>{" "}
        </LinkStyled>
      </FormLoginContainer>
    </>
  );
};
