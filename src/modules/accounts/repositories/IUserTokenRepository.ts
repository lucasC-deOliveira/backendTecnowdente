
import { ICreateUserTokens } from "../dtos/ICreateUserTokensDTO"
import { UserTokens } from "../entities/userTokens"



interface IUsersTokensRepository {
  create({ expires_date, refresh_token, user_id }: ICreateUserTokens): Promise<UserTokens>

  findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens>

  deleteById(id: string): Promise<void>

  deleteByUserId(id: string): Promise<void>

  findByRefreshToken(refresh_token: string): Promise<UserTokens>
}


export { IUsersTokensRepository }