import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ChatWindow = () => {
  const messages = [
    {
      id: 1,
      text: "Привет! Как дела?",
      time: "14:30",
      isOwn: false,
      sender: "Анна",
    },
    {
      id: 2,
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      time: "14:31",
      isOwn: true,
    },
    {
      id: 3,
      text: "Тоже хорошо! Хотела обсудить проект",
      time: "14:32",
      isOwn: false,
      sender: "Анна",
    },
    {
      id: 4,
      text: "Конечно, давай обсудим. Что именно интересует?",
      time: "14:33",
      isOwn: true,
    },
    {
      id: 5,
      text: "Мне нужно понять timeline и основные этапы",
      time: "14:34",
      isOwn: false,
      sender: "Анна",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold">
            А
          </div>
          <div>
            <h2 className="font-semibold">Анна Петрова</h2>
            <p className="text-purple-100 text-sm">в сети</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isOwn
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isOwn ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex space-x-3">
          <Input
            placeholder="Написать сообщение..."
            className="flex-1 border-purple-200 focus:border-purple-400"
          />
          <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6">
            📤
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
