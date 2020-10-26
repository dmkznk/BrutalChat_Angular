export interface History {
  message: string;
  isMessageFromMe: boolean;
  messageTime: {
    date: string;
    time: string;
  }
}
