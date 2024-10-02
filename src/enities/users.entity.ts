import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') //ttable name
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 1000 })
  username: string;

  @Column({ type: 'varchar', length: 1000 })
  password: string;

  @Column({ type: 'date', nullable: true })
  createdAt: Date;
}
