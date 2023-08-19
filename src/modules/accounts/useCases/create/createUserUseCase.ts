import { inject, injectable } from "tsyringe";



import { hash } from "bcryptjs"
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";



@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository) { }

  async execute({
    name,
    email,
    password
  }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError("User Already Exist")
    }

    const passwordHash = await hash(password, 8)

    await this.userRepository.create({
      name,
      email,
      password: passwordHash
    })
  }

}

export { CreateUserUseCase }