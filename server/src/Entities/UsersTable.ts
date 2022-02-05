import {BaseEntity, BeforeInsert, Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, BeforeUpdate} from "typeorm";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    username!: string;
    @Column({select: false})
    password!: string;
    @Column({unique: true})
    email!: string;
    @CreateDateColumn()
    createdAt!: Date;
    @UpdateDateColumn()
    updatedAt!: Date;
}