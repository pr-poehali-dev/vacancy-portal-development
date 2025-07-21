import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-jobGray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🚀</div>
            <span className="text-2xl font-bold text-jobGray-900">JobSpace</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-jobGray-700 hover:text-jobBlue transition-colors">Вакансии</a>
            <a href="#" className="text-jobGray-700 hover:text-jobBlue transition-colors">Компании</a>
            <a href="#" className="text-jobGray-700 hover:text-jobBlue transition-colors">Резюме</a>
            <a href="#" className="text-jobGray-700 hover:text-jobBlue transition-colors">О нас</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="text-jobGray-700 border-jobGray-300 hover:bg-jobGray-50">
              Войти
            </Button>
            <Button className="bg-jobBlue hover:bg-jobBlue/90 text-white">
              Разместить вакансию
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header