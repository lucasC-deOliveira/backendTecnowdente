import { getRepository, Repository } from "typeorm";
import { ICreateUserTokens } from "../../dtos/ICreateUserTokensDTO";
import { UserTokens } from "../../entities/userTokens";
import { IUsersTokensRepository } from "../IUserTokenRepository";
import AppDataSource from "../../../../database"





class UsersTokensRepository implements IUsersTokensRepository {

  private repository: Repository<UserTokens>


  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens)
  }


  async create({ expires_date, refresh_token, user_id }: ICreateUserTokens): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id
    })

    await this.repository.save(userToken);


    return userToken;

  }


  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    const userTokens = await this.repository.findOneBy({
      user_id,
      refresh_token
    })

    return userTokens
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete({ id })
  }

  async deleteByUserId(id: string): Promise<void> {
    await this.repository.delete({ user_id: id })
  }


  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = await this.repository.findOneBy({ refresh_token })
    return userToken
  }

}


export { UsersTokensRepository }