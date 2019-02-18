export interface Workout {
    id?: string;
    complete: boolean;
    dateAdded: string;
    name: string;
    bodyParts?: string;
    sets?: number;
    reps?: number;
    uid?: string;
}
