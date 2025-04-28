export interface Project {
  _id: string;
  clientId: string;
  title: string;
  budget: number;
  deadline: string;
  status: "Not Started" | "In Progress" | "Completed";
  user: string;
  createdAt: string;
  updatedAt: string;
}
