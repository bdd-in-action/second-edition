import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { FrequentFlyerStatus } from './FrequentFlyerStatus';

@Entity()
export class FrequentFlyerMember {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    joinedAt: Date;

    @Column()
    initialPoints: number;

    @Column()
    status: FrequentFlyerStatus;

    constructor(frequentFlyerMember: Partial<FrequentFlyerMember>) {
        Object.assign(this, frequentFlyerMember);
    }
}
