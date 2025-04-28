export interface Interaction {
  _id: string;
  relatedClientId?: string;
  relatedProjectId?: string;
  interactionType: "Call" | "Meeting" | "Email";
  date: string;
  notes: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
