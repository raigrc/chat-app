import AvatarHeader from "../avatar-header";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";
import ListMessages from "./list-messages";

const ConversationBody = () => {
  return (
    <>
      <ChatMessages />
      <ChatInput />
    </>
  );
};

export default ConversationBody;
