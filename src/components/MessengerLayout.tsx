import MessengerHeader from "./MessengerHeader";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const MessengerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MessengerHeader />
      <div className="flex-1 flex overflow-hidden">
        <ChatSidebar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default MessengerLayout;
