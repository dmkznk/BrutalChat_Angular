export interface Message {
  text: string;
  isMessageFromMe: boolean;
  isRead: boolean;
  messageTime: {
    date: Date;
  };
}
