import { Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUserRepository } from "../IUserRepository";
import AppDataSource from "../../../../database"


class UsersRepository implements IUserRepository {

  private repository: Repository<User>


  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }

  async create({
    name,
    email,
    password,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      id,
    })

    await this.repository.save(user)
  }


  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email })
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id })
    return user;
  }



}

export { UsersRepository }