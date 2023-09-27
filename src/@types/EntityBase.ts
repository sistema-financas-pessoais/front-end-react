export interface EntityBase {
  id: string;
  deleted_at: Date;
  created_at: Date;
  created_by: string;
  updated_by: string;
  deleted_by: string;
  status: string;
}
