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
    email: "john@site.com",
    password: bcrypt.hashSync("password", 10),
    password: "xxxxx",
  },
  {
    name: "Jane Doe",
    email: "jane@site.com",
    password: bcrypt.hashSync("password", 10),
    password: "xxxxx",
  },
]

export default users
