import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts') //ttable name
export class AccountsEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 1000 })
  username: string;

  @Column({ type: 'varchar', length: 1000 })
  password: string;

  @Column({ type: 'varchar', length: 1000 })
  permission: string;
}
