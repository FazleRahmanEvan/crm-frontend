export interface Client {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
