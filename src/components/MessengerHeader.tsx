import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MessengerHeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const MessengerHeader = ({ activeTab, onTabChange }: MessengerHeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Мессенджер</h1>
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
          <TabsList className="bg-purple-50 border border-purple-200">
            <TabsTrigger
              value="chat"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              💬 Чат
            </TabsTrigger>
            <TabsTrigger
              value="admin"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              ⚙️ Админ панель
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default MessengerHeader;
