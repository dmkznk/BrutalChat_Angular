export interface History {
  message: string;
  isMessageFromMe: boolean;
  isRead: boolean;
  messageTime: {
    date: Date;
  };
}
