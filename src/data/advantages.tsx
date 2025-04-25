import { 
  CheckCircle2,
  Zap,
  Settings
} from "lucide-react";
import { ReactNode } from "react";

interface Advantage {
  title: string;
  description: string;
  icon: ReactNode;
}

export const advantages: Advantage[] = [
  {
    title: "Профессиональный подход",
    description: "Более 5 лет опыта оптимизации компьютерных систем для геймеров и профессионалов",
    icon: <CheckCircle2 className="h-6 w-6 text-teal-500" />
  },
  {
    title: "Быстрый результат",
    description: "Заметное улучшение производительности уже после первой настройки системы",
    icon: <Zap className="h-6 w-6 text-amber-500" />
  },
  {
    title: "Индивидуальные решения",
    description: "Настройка системы под конкретные задачи и особенности вашего компьютера",
    icon: <Settings className="h-6 w-6 text-blue-500" />
  }
];
