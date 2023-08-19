import { v4 as uuid } from "uuid"
import { hash } from "bcryptjs"

import createConnection from "../index"

async function create() {

  const connection = await createConnection("localhost");
  const id = uuid();

  const password = await hash(process.env.PASSWORD, 10);

  await connection.query(
    `INSERT INTO  USERS(id, name, email, password, "isAdmin", created_at, updated_at)
            values('${id}', '${process.env.USER}', '${process.env.USER_EMAIL}', '${password}', 'true', 'now()', 'now()')`
  )

  connection.close;


}

create().then(() => console.log("User Admin created!"))