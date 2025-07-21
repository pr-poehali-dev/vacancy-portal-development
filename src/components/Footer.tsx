const Footer = () => {
  return (
    <footer className="bg-jobGray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🚀</div>
              <span className="text-2xl font-bold">JobSpace</span>
            </div>
            <p className="text-jobGray-400 mb-4">
              Современная платформа для поиска работы и талантов
            </p>
            <div className="flex space-x-4">
              <div className="text-2xl cursor-pointer hover:scale-110 transition-transform">📱</div>
              <div className="text-2xl cursor-pointer hover:scale-110 transition-transform">💬</div>
              <div className="text-2xl cursor-pointer hover:scale-110 transition-transform">📧</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Для соискателей</h3>
            <ul className="space-y-2 text-jobGray-400">
              <li><a href="#" className="hover:text-white transition-colors">Поиск вакансий</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Создать резюме</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьерные советы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Для работодателей</h3>
            <ul className="space-y-2 text-jobGray-400">
              <li><a href="#" className="hover:text-white transition-colors">Разместить вакансию</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Поиск кандидатов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HR решения</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-jobGray-400">
              <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-jobGray-800 mt-8 pt-8 text-center text-jobGray-400">
          <p>&copy; 2024 JobSpace. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer