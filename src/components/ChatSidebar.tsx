import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ChatSidebar = () => {
  const chats = [
    {
      id: 1,
      name: "Анна Петрова",
      lastMessage: "Привет! Как дела?",
      time: "12:30",
      unread: 2,
      avatar: "АП",
    },
    {
      id: 2,
      name: "Михаил Иванов",
      lastMessage: "Завтра встречаемся?",
      time: "11:45",
      unread: 0,
      avatar: "МИ",
    },
    {
      id: 3,
      name: "Елена Сидорова",
      lastMessage: "Спасибо за помощь!",
      time: "10:20",
      unread: 1,
      avatar: "ЕС",
    },
  ];

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Search */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="relative">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Поиск чатов..."
            className="pl-10 border-purple-200 focus:border-purple-400"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {chats.map((chat) => (
            <Card
              key={chat.id}
              className="p-3 cursor-pointer hover:bg-purple-50 transition-colors border-transparent hover:border-purple-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {chat.avatar}
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
