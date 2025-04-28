export interface Reminder {
  _id: string;
  relatedClientId?: string;
  relatedProjectId?: string;
  dueDate: string;
  description: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
