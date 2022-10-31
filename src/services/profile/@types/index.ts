import { TResponse } from '../../@types/response'
import { TProfile } from './profile'

export interface IProfile extends TResponse {
  profile: TProfile
}
