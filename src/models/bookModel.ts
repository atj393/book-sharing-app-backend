import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    author!: string;

    @Column()
    description!: string;

    @Column()
    genre!: string;

    @Column()
    condition!: string;

    @Column()
    imageUrl!: string; // Assume URL for the image
}
