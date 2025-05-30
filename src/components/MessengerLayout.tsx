import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import AdminPanel from "./AdminPanel";

const MessengerLayout = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "admin">("chat");

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Мессенджер</h1>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === "chat" ? "secondary" : "ghost"}
              className={`${
                activeTab === "chat"
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "text-white hover:bg-purple-400"
              }`}
              onClick={() => setActiveTab("chat")}
            >
              💬 Чат
            </Button>
            <Button
              variant={activeTab === "admin" ? "secondary" : "ghost"}
              className={`${
                activeTab === "admin"
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "text-white hover:bg-purple-400"
              }`}
              onClick={() => setActiveTab("admin")}
            >
              ⚙️ Админ панель
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
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
