import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private user = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'clerk' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'admin' },
    { id: 5, name: 'Eva Lee', email: 'eva@example.com', role: 'user' },
  ];

  findAll(role?: 'admin' | 'user' | 'clerk') {
    return role == 'admin'
      ? this.user.filter((u) => u.role == 'admin')
      : role == 'user'
        ? this.user.filter((u) => u.role == 'user')
        : this.user.filter((u) => u.role == 'clerk');
  }
  create(data: {
    name: string;
    email: string;
    role: 'admin' | 'clerk' | 'user';
  }) {
    const dataTosave = { ...data, id: Math.floor(Math.random() * 1000 + 100) };
    return this.user.push(dataTosave);
  }
  update(
    id: number,
    data: {
      email?: string;
      name?: string;
    },
  ) {
    this.user = this.user.map((u) => {
      if (u.id == id) {
        return { ...u, data };
      } else {
        return u;
      }
    });

    return this.getOne(id);
  }
  delete(id: number) {
    return this.user.filter((u) => u.id != id);
  }
  getOne(id: number) {
    return this.user.filter((u) => u.id == id);
  }
}
