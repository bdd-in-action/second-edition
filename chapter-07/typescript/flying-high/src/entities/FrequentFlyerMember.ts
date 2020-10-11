import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FrequentFlyerMember {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    joinedAt: Date;
}
