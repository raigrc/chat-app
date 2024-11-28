import { set } from "zod";
import { create } from "zustand";

export interface IMessage {
    created_at: string;
    id: string;
    is_edit: boolean;
    message: string;
    sent_by: string;
    users: {
        avatar_url: string;
        created_at: string;
        display_name: string;
        id: string;
    } | null;
  }
interface MessageState {
  messages: IMessage[];
  addMessage: (message:IMessage) => void
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
addMessage:(message) => set((state)=> ({messages: [...state.messages, message]}))
}));
