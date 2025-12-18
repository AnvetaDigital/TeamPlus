export interface Status {
  id: string;
  date: string; // YYYY-MM-DD
  yesterday: string;
  today: string;
  blockers?: string;
  createdAt: number;
}
