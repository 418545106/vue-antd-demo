import { localSave, localRead, localRemove } from './local'

const TOKEN = 'token'
const REFRESHTOKEN = 'refreshToken'

export const loadToken = () => {
  return localRead(TOKEN)
}

export const saveToken = (token) => {
  localSave(TOKEN, token)
}

export const removeToken = () => {
  localRemove(TOKEN)
}

export const loadRefreshToken = () => {
  return localRead(REFRESHTOKEN)
}

export const saveRefreshToken = (refreshToken) => {
  localSave(REFRESHTOKEN, refreshToken)
}

export const removeRefreshToken = () => {
  localRemove(REFRESHTOKEN)
}
