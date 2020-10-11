import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('frequent_flyer_member')
export class FrequentFlyerMember {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    joinedAt: Date;
}
