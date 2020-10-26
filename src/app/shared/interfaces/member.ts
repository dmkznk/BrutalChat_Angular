import {History} from "./history";

export interface Member {
  id: number;
  name: string;
  isOnline: boolean;
  isRead: boolean;
  imageUrl: string;
  sortTime: number;
  history: Array<History>;
}
