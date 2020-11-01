import {Message} from './message';

export interface Member {
  id: number;
  name: string;
  isOnline: boolean;
  imageUrl: string;
  history: Array<Message>;
}
