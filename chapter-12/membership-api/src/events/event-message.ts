export interface EventMessage {
    id: number;
    type: string;
    timestamp: Date;
    data: any;
}