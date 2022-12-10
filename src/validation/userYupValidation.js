import * as yup from "yup";
import YupPassword from "yup-password";

YupPassword(yup);

export const LoginYupValidation = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Nome é obrigatório"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .min(8, "Senha deve possuir ao menos 8 dígitos")
    .minLowercase(1, "Senha deve possuir uma letra minúscula")
    .minUppercase(1, "Senha deve possuir uma letra maiúscula")
    .minNumbers(1, "Senha deve possuir um numero")
    .minSymbols(1, "Senha deve possuir um caractere especial"),
});

export const CadastroYupValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Obrigatório informar o e-mail"),
    password: yup
      .string()
      .required("Obrigatório digitar uma senha")
      .min(8, "Senha deve possuir ao menos 8 dígitos")
      .minLowercase(1, "Senha deve possuir uma letra minúscula")
      .minUppercase(1, "Senha deve possuir uma letra maiúscula")
      .minNumbers(1, "Senha deve possuir um numero")
      .minSymbols(1, "Senha deve possuir um caractere especial"),
    passwordConfirmation: yup
      .string()
      .required("Digite sua senha novamente")
      .oneOf([yup.ref("password"), null], "Senhas digitadas não conferem"),
    fullName: yup.string().required("Obrigatório informar um nome"),
    photoUrl: yup.string().url("Digite a URL da foto"),
    phone: yup.string(),
    userAddress: yup.object({
      zipCode: yup
        .string()
        .typeError()
        .matches(/[0-9]{8}/, "CEP deve conter 8 números")
        .required("Obrigatório informar o CEP"),
      street: yup.string().required("Obrigatório informar o nome da rua"),
      number: yup
        .number()
        .typeError("Digite um número válido")
        .positive()
        .typeError("Digite um número válido")
        .integer()
        .typeError("Digite um número válido")
        .required("Digite o número do endereço"),
      neighborhood: yup.string().required("Obrigatório informar o bairro"),
      city: yup.string().required("Obrigatório informar a cidade"),
      state: yup.string().required("Obrigatório informar o estado"),
      complement: yup.string(),
    }),
  })
  .required("Obrigatório informar os dados de endereço");
