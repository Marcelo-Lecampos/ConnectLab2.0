import styled from "styled-components";
import {theme} from "@/themes/theme";
import {LockFill} from '@styled-icons/bootstrap/LockFill'
import { Gmail } from "@styled-icons/boxicons-logos/Gmail";
import {PersonFill} from "@styled-icons/bootstrap/PersonFill"
import {PersonSquare} from "@styled-icons/bootstrap/PersonSquare"
import {Telephone} from "@styled-icons/bootstrap/Telephone"
import {HouseDoor} from "@styled-icons/bootstrap/HouseDoor"
import {ErrorAlt} from "@styled-icons/boxicons-regular/ErrorAlt"
import {EyeFill} from "@styled-icons/bootstrap/EyeFill"
import {EyeSlashFill} from "@styled-icons/bootstrap/EyeSlashFill"
import {DarkTheme} from "@styled-icons/fluentui-system-regular/DarkTheme"
import {Login} from "@styled-icons/entypo/Login"
import {LogOut} from "@styled-icons/boxicons-solid/LogOut"
import {Home} from "@styled-icons/entypo/Home"
import {Profile} from "@styled-icons/icomoon/Profile"
import {DeviceSsdFill} from "@styled-icons/bootstrap/DeviceSsdFill"
import {EditAlt} from "@styled-icons/boxicons-regular/EditAlt"
import {SearchAlt2} from "@styled-icons/boxicons-regular/SearchAlt2"
import {Numbers} from "@styled-icons/remix-fill/Numbers"




export const LockFillStyled = styled(LockFill)`
  color: ${theme.gray};
  width: 2rem;
  position: absolute;
  transform: translate(.6rem,.9rem);

`

export const GmailStyled = styled(Gmail)`
  color: ${theme.gray};
  width: 2rem;
  position: absolute;
  transform: translate(.6rem,.9rem);

`
export const PersonFillStyled = styled(PersonFill)`
    color: ${theme.gray};
    width: 2rem;
    position: absolute;
    transform: translate(.6rem,.9rem);
`
export const PhotoStyled = styled(PersonSquare)`
    color: ${theme.gray};
    width: 2rem;
    position: absolute;
    transform: translate(.6rem,.9rem);
`
export const TelephoneStyled = styled(Telephone)`
    color: ${theme.gray};
    width: 2rem;
    position: absolute;
    transform: translate(.6rem,.9rem);
`
export const AddressStyled = styled(HouseDoor)`
    color: ${theme.gray};
    width: 2rem;
    position: absolute;
    transform: translate(.6rem,.9rem);
`

export const SearchIcon = styled(SearchAlt2)`
    color: ${theme.gray};
    width: 2rem;
    position: absolute;
    transform: translate(.6rem,2.8rem);
    opacity: 0.3;
`


export const ErrorStyled = styled(ErrorAlt)`
    color: ${theme.red};
    width: 1rem;
    transform: translateY(-5%);

`
export const EyeFillStyled = styled(EyeFill)`
    color: ${theme.orange};
    width: 2rem;
    position: absolute;
    opacity: 0.5;
`
export const EyeSlashFillStyled = styled(EyeSlashFill)`
    color: ${theme.orange};
    width: 2rem;
    position: absolute;
    opacity: 0.5;
`
export const EditAltStyled = styled(EditAlt)`
    color: ${theme.white};
    width: 2rem;
`
export const ThemeStyled = styled(DarkTheme)`
    color: ${theme.white};
    width: 2rem;
`
export const LoginStyled = styled(Login)`
    color: ${theme.white};
    width: 2rem;
`
export const LogOutStyled = styled(LogOut)`
    color: ${theme.white};
    width: 2rem;
`
export const HomeStyled = styled(Home)`
    color: ${theme.white};
    width: 2rem;
`
export const ProfileStyled = styled(Profile)`
    color: ${theme.white};
    width: 2rem;
`
export const DeviceSsdFillStyled = styled(DeviceSsdFill)`
    color: ${theme.white};
    width: 2rem;
`

export const NumberStyled = styled(Numbers)`
 color: ${theme.white};
    width: 2rem;
`
