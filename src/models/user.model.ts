export class User {
  id?: number;
  userName?: string;
  email?: string;
  password?: string;

  constructor({ id, userName, email, password }) {
    if (id !== null) this.id = id;
    if (userName !== null) this.userName = userName;
    if (email !== null) this.email = email;
    if (password !== null) this.password = password;
  }
}
