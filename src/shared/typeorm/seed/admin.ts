import { v4 as uuid } from "uuid"
import { hash } from "bcryptjs"

import AppDataSource from "../../../database";
import { User } from "../../../modules/accounts/entities/user";

async function create() {
  await AppDataSource.initialize()
  const repository = AppDataSource.getRepository(User)

  const userAdminExists = await repository.findOneBy({ isAdmin: true })

  if (!userAdminExists) {
    const id = uuid();

    const password = await hash(process.env.PASSWORD, 10);

    const newUserAdmin = repository.create({ id, name: String(process.env.USER), email: String(process.env.USER_EMAIL), password, isAdmin: true, created_at: new Date(), updated_at: new Date() })

    await repository.save(newUserAdmin)
  }

}

create().then(() => console.log("seed admin executada!")).catch(e => console.log("erro ao executar a seed:admin: " + e.message))