import ConversationBody from "./conversation-body";
import ConversationHeader from "./conversation-header";

const Conversation = () => {
  return (
    <div className="flex flex-col h-full">
      <ConversationHeader />
      <ConversationBody />
    </div>
  );
};

export default Conversation;
