import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-8 max-w-xl">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-violet-700">404</h1>
          <h2 className="text-3xl font-bold text-gray-900">Страница не найдена</h2>
          <p className="text-gray-600 mt-4">
            Извините, но страница, которую вы пытаетесь посетить, не существует или была перемещена.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться на главную
            </Link>
          </Button>
          
          <div className="text-gray-600">
            <p>Или перейдите на одну из наших основных страниц:</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/services" className="text-violet-600 hover:underline">Услуги</Link>
              <Link to="/contacts" className="text-violet-600 hover:underline">Контакты</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
