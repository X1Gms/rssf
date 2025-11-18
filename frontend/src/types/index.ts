export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  last_access: Date;
};

export type Block = {
  id: number;
  name: string;
  school: string;
};

export type Room = {
  id: number;
  name: string;
  floor: number;
  block: string;
  type: "room" | "eletric_panel" | "corridor";
};
