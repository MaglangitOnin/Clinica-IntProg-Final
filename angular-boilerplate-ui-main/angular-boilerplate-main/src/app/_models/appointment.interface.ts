export interface Appointment {
    id?: number;
    userId: number;
    appointmentDate: Date;
    reason: string;
    status?: 'pending' | 'accepted' | 'rejected';
    createdAt?: Date;
    updatedAt?: Date;
}
