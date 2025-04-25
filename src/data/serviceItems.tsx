import { 
  Settings, 
  Cpu, 
  Zap
} from "lucide-react";
import { ReactNode } from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export const serviceItems: ServiceItem[] = [
  {
    title: 'services.windows.title',
    description: 'services.windows.description',
    icon: <Settings className="h-10 w-10 text-teal-500" />,
    color: "from-teal-500/20 to-teal-500/10"
  },
  {
    title: 'services.bios.title',
    description: 'services.bios.description',
    icon: <Cpu className="h-10 w-10 text-blue-500" />,
    color: "from-blue-500/20 to-blue-500/10"
  },
  {
    title: 'services.latency.title',
    description: 'services.latency.description',
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    color: "from-amber-500/20 to-amber-500/10"
  }
];
