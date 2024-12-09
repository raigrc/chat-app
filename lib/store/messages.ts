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
  actionMessage: IMessage | undefined
  optimisticIds: string[]
  addMessage: (message:IMessage) => void
  setMessageAction: (message: IMessage|undefined)=> void
  setOptimisticIds: (id: string)=> void
  deleteMessage: (id: string | undefined)=> void
  editMessage: (message: IMessage | undefined)=> void
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  actionMessage: undefined,
  optimisticIds: [],
addMessage:(newMessage) => set((state)=> ({messages: [...state.messages, newMessage]})),
setMessageAction:(message) => set(()=> ({actionMessage: message})),
setOptimisticIds:(id) => set((state)=>({optimisticIds:[...state.optimisticIds,id]})),
deleteMessage: (id) => set ((state)=> {
  return {
    messages: state.messages.filter((message)=> message.id !== id)
  }
}),
editMessage: (updateMessage) => set ((state)=> {
  return {
    messages: state.messages.filter((message)=> {
      if(message.id === updateMessage?.id) {
        message.message = updateMessage.message,
        message.is_edit = updateMessage.is_edit
      }

      return message
    })
  }
})
}));
