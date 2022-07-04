import { CabinClass } from '../../src/entities';
import { PointsSchedule } from '../../src/entities/PointsSchedule';
import { TableDefinition } from 'cucumber';

export interface PointsScheduleRow {
    From: string;
    To: string;
    Class: string;
    Points: string;
}

export function asPointSchedules(table: TableDefinition<PointsScheduleRow>): PointsSchedule[] {
    return table.hashes().map(asPointsSchedule);
}

export function asPointsSchedule(row: PointsScheduleRow): PointsSchedule {
    const pointsSchedule = new PointsSchedule();
    pointsSchedule.departure = row.From;
    pointsSchedule.destination = row.To;
    pointsSchedule.cabinClass = CabinClass[row.Class];
    pointsSchedule.points = parseInt(row.Points, 10);

    return pointsSchedule;
}
