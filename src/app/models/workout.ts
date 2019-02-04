export interface Workout {
    id: number;
    complete: boolean;
    dateAdded: string;
    name: string;
    bodyParts?: string;
    sets?: number;
    reps?: number;
}
