import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AdminPanel = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Всего пользователей</p>
              <p className="text-xl font-semibold">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">В сети</p>
              <p className="text-xl font-semibold">1</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Сообщений сегодня</p>
              <p className="text-xl font-semibold">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица пользователей */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Пользователи</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Пользователь
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Статус
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Последняя активность
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      АП
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Анна Петрова</p>
                      <p className="text-sm text-gray-500">
                        anna.petrova@mail.ru
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    <Icon
                      name="Circle"
                      size={8}
                      className="mr-1 fill-current"
                    />
                    Онлайн
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  2 минуты назад
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 px-2">
                      <Icon name="MessageCircle" size={14} />
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 px-2">
                      <Icon name="Settings" size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-2 text-red-600 hover:text-red-700"
                    >
                      <Icon name="UserX" size={14} />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
