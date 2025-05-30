import { useState } from "react";
import MessengerHeader from "./MessengerHeader";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import AdminPanel from "./AdminPanel";

const MessengerLayout = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MessengerHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex overflow-hidden">
        {activeTab === "chat" ? (
          <>
            <ChatSidebar />
            <ChatWindow />
          </>
        ) : (
          <AdminPanel />
        )}
      </div>
    </div>
  );
};

export default MessengerLayout;
