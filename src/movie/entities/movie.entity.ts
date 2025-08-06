import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'movies'})
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    releaseYear: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}