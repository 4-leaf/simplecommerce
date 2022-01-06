import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@site.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    password: bcrypt.hashSync("password", 10),
    password: "xxxxx",
  },
  {
    name: "Jane Doe",
    password: bcrypt.hashSync("password", 10),
    password: "xxxxx",
  },
]

export default users
