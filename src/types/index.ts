import { type SessionFlavor, Context } from "grammy";
import { type Conversation, type ConversationFlavor } from "@grammyjs/conversations";

export type SessionData = {
  isAuthenticated: boolean;
};

export type MyContext = Context & SessionFlavor<SessionData> & ConversationFlavor<Context>;
export type MyConversation = Conversation<MyContext>;
