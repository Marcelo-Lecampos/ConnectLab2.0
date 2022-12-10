import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { yupResolver } from "@hookform/resolvers/yup";
import { CadastroYupValidation } from "@validation/userYupValidation";
import {
  CadastroContainer,
  Titulo,
  FormContainerStyled,
  InputContainer,
  ButtonContainer,
  GridContainer,
} from "./Cadastro.styles";
import {
  FormInput,
  FormError,
  FormLabel,
  ButtonStyle,
  LoadingContainer,
  FormPassword,
} from "@components";

import { useAutenticacao } from "@context/Autenticacao";
import {
  LockFillStyled,
  PersonFillStyled,
  GmailStyled,
  PhotoStyled,
  TelephoneStyled,
  AddressStyled,
} from "@components/Icons/Icons.styles";
import { ApiViaCep } from "@services/useApi";

export const Cadastro = () => {
  const { register, handleSubmit, formState, getValues, setValue } = useForm({
    resolver: yupResolver(CadastroYupValidation),
  });
  const { aviso, cadastro, desabilitado, autenticado, edicao, user } =
    useAutenticacao();

  const ViaCepApi = async (cep) => {
    if (cep.length !== 8) {
      return false;
    }
    try {
      aviso("CEP encontrado");
      const axiosCep = await ApiViaCep(cep);
      const current = axiosCep.data;
      setValue("userAddress.city", current.localidade);
      setValue("userAddress.neighborhood", current.bairro);
      setValue("userAddress.number", current.complemento);
      setValue("userAddress.street", current.logradouro);
      setValue("userAddress.state", current.uf);
    } catch (error) {
      aviso("Parece que algo deu errado", error);
    }
  };
  if (autenticado) {
    const { fullName, phone, email, userAddress, photoUrl } = user;
    const { street, neighborhood, city, state, zipCode, number } = userAddress;
    setValue("fullName", fullName);
    setValue("email", email);
    setValue("userAddress.city", city);
    setValue("userAddress.neighborhood", neighborhood);
    setValue("userAddress.number", number);
    setValue("userAddress.street", street);
    setValue("userAddress.state", state);
    setValue("userAddress.zipCode", zipCode);
    setValue("phone", phone);
    setValue("photoUrl", photoUrl);
  }

  const onSubmit = (data) => {
    autenticado ? edicao(data) : cadastro(data);
  };

  if (desabilitado) {
    return (
      <LoadingContainer
        msg={autenticado ? "Editando Usuário" : "Cadastrando Usuário"}
      />
    );
  }

  return (
    <CadastroContainer>
      <Helmet>
        <title>{autenticado ? "Connect Lab || Edição Perfil ✨" : "Connect Lab || Cadastro✨"}</title>
        <meta name="description" content={autenticado ? "Página da Edição" : "Página do Cadastro"} />
      </Helmet>
      <Titulo>{autenticado ? "Editar Perfil" : "Cadastrar"}</Titulo>
      <FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          <InputContainer>
            <FormLabel htmlFor="fullName">Nome*</FormLabel>
            <PersonFillStyled />
            <FormInput
              placeholder="Nome"
              type="text"
              id="fullName"
              {...register("fullName")}
            ></FormInput>

            {formState.errors.fullName && (
              <FormError>{formState.errors.fullName?.message}</FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="email">E-mail*</FormLabel>
            <GmailStyled />
            <FormInput
              placeholder="email"
              type={"email"}
              id="email"
              {...register("email")}
            ></FormInput>

            {formState.errors.email && (
              <FormError>{formState.errors.email?.message}</FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="photoUrl">URL da Foto</FormLabel>
            <PhotoStyled />
            <FormInput
              placeholder="photoUrl "
              type="url"
              id="photoUrl"
              {...register("photoUrl")}
            ></FormInput>

            {formState.errors.url && (
              <FormError>{formState.errors.url?.message}</FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="phone">Telefone</FormLabel>
            <TelephoneStyled />
            <FormInput
              placeholder="phone"
              type="tel"
              id="phone"
              {...register("phone")}
            ></FormInput>

            {formState.errors.phone && (
              <FormError>{formState.errors.phone?.message}</FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="password">Senha*</FormLabel>
            <LockFillStyled />
            <FormPassword
              placeholder="password"
              id="password"
              {...register("password")}
            ></FormPassword>

            {formState.errors.password && (
              <FormError>{formState.errors.password?.message}</FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="passwordConfirmation">
              Confirmação de senha*
            </FormLabel>
            <LockFillStyled />
            <FormPassword
              placeholder="passwordConfirmation"
              id="passwordConfirmation"
              {...register("passwordConfirmation")}
            ></FormPassword>

            {formState.errors.passwordConfirmation && (
              <FormError>
                {formState.errors.passwordConfirmation?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="zipCode">Cep*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="zipCode"
              type="number"
              id="zipCode"
              {...register("userAddress.zipCode")}
              onBlur={() => ViaCepApi(getValues("userAddress.zipCode"))}
            ></FormInput>

            {formState.errors.userAddress?.zipCode && (
              <FormError>
                {formState.errors.userAddress?.zipCode?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="state">Estado*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="state"
              type={"text"}
              id={"state"}
              {...register("userAddress.state")}
            ></FormInput>

            {formState.errors.userAddress?.state && (
              <FormError>
                {formState.errors.userAddress?.state?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="city">Cidade*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="city"
              type="text"
              id="city"
              {...register("userAddress.city")}
            ></FormInput>

            {formState.errors.userAddress?.city && (
              <FormError>
                {formState.errors.userAddress?.city?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="neighborhood">Bairro*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="neighborhood"
              type="text"
              id="neighborhood"
              {...register("userAddress.neighborhood")}
            ></FormInput>

            {formState.errors.userAddress?.neighborhood && (
              <FormError>
                {formState.errors.userAddress?.neighborhood?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="street">Rua*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="street"
              type="text"
              id="street"
              {...register("userAddress.street")}
            ></FormInput>

            {formState.errors.userAddress?.street && (
              <FormError>
                {formState.errors.userAddress?.street?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="number">Número*</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="number"
              type="number"
              id="number"
              {...register("userAddress.number")}
            ></FormInput>

            {formState.errors.userAddress?.number && (
              <FormError>
                {formState.errors.userAddress?.number?.message}
              </FormError>
            )}
          </InputContainer>

          <InputContainer>
            <FormLabel htmlFor="complement">Complemento</FormLabel>
            <AddressStyled />
            <FormInput
              placeholder="complement"
              type="text"
              id="complement"
              {...register("userAddress.complement")}
            ></FormInput>

            {formState.errors.complement && (
              <FormError>{formState.errors.complement?.message}</FormError>
            )}
          </InputContainer>
        </GridContainer>

        <ButtonContainer>
          <ButtonStyle disabled={formState.isSubmitted} type="submit">
            {autenticado ? "Editar Perfil" : "Cadastrar"}
          </ButtonStyle>
        </ButtonContainer>
      </FormContainerStyled>
    </CadastroContainer>
  );
};
