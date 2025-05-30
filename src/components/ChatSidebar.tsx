import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const ChatSidebar = () => {
  const chats = [
    {
      id: 1,
      name: "Анна Петрова",
      lastMessage: "Привет! Как дела?",
      time: "14:32",
      unread: 2,
    },
    {
      id: 2,
      name: "Команда разработки",
      lastMessage: "Новая версия готова",
      time: "13:15",
      unread: 0,
    },
    {
      id: 3,
      name: "Михаил Соколов",
      lastMessage: "Увидимся завтра",
      time: "12:45",
      unread: 1,
    },
    {
      id: 4,
      name: "Поддержка",
      lastMessage: "Ваш запрос обработан",
      time: "11:20",
      unread: 0,
    },
    {
      id: 5,
      name: "Елена Васильева",
      lastMessage: "Спасибо за помощь!",
      time: "10:18",
      unread: 3,
    },
  ];

  return (
    <div className="w-80 bg-gradient-to-b from-purple-50 to-white border-r border-purple-100 flex flex-col">
      <div className="p-4 border-b border-purple-100">
        <Input
          placeholder="🔍 Поиск чатов..."
          className="bg-white border-purple-200 focus:border-purple-400"
        />
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {chats.map((chat) => (
            <Card
              key={chat.id}
              className="p-3 cursor-pointer hover:bg-purple-100 transition-colors border-transparent hover:border-purple-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {chat.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="bg-purple-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
