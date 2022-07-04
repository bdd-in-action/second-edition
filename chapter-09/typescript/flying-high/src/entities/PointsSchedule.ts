import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CabinClass } from './CabinClass';

@Entity()
export class PointsSchedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departure: string;

    @Column()
    destination: string;

    @Column()
    cabinClass: CabinClass

    @Column()
    points: number;
}
