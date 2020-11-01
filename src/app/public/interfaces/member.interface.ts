import {MessageInterface} from './message.interface';

export interface MemberInterface {
  id: number;
  name: string;
  isOnline: boolean;
  imageUrl: string;
  history: Array<MessageInterface>;
}
