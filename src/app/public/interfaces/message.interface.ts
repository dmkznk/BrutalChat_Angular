export interface MessageInterface {
  text: string;
  isMessageFromMe: boolean;
  isRead: boolean;
  messageTime: {
    date: Date;
  };
}
