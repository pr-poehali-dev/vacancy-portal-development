import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'
import ChatWidget from '@/components/ChatWidget'

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSalary, setSelectedSalary] = useState('')
  const [selectedExperience, setSelectedExperience] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedEmployer, setSelectedEmployer] = useState('')

  const mockJobs = [
    {
      id: 1,
      title: 'Frontend разработчик',
      company: 'Яндекс',
      location: 'Москва',
      salary: '150 000 - 250 000 ₽',
      experience: '3+ года',
      type: 'Полная занятость',
      logo: '🔥',
      skills: ['React', 'TypeScript', 'JavaScript'],
      description: 'Разработка современных веб-интерфейсов с использованием React и TypeScript'
    },
    {
      id: 2,
      title: 'Python разработчик',
      company: 'Сбер',
      location: 'Санкт-Петербург',
      salary: '200 000 - 300 000 ₽',
      experience: '5+ лет',
      type: 'Удаленно',
      logo: '💚',
      skills: ['Python', 'Django', 'PostgreSQL'],
      description: 'Backend разработка высоконагруженных систем'
    },
    {
      id: 3,
      title: 'UX/UI дизайнер',
      company: 'VK',
      location: 'Москва',
      salary: '120 000 - 180 000 ₽',
      experience: '2+ года',
      type: 'Гибрид',
      logo: '🎨',
      skills: ['Figma', 'Sketch', 'Prototyping'],
      description: 'Создание пользовательских интерфейсов для мобильных и веб-приложений'
    },
    {
      id: 4,
      title: 'DevOps инженер',
      company: 'Тинькофф',
      location: 'Москва',
      salary: '180 000 - 280 000 ₽',
      experience: '4+ года',
      type: 'Полная занятость',
      logo: '⚡',
      skills: ['Docker', 'Kubernetes', 'AWS'],
      description: 'Автоматизация процессов разработки и развертывания'
    }
  ]

  const companies = [
    { name: 'Яндекс', employees: '18 000+', vacancies: 245, logo: '🔍' },
    { name: 'Сбер', employees: '25 000+', vacancies: 189, logo: '💳' },
    { name: 'VK', employees: '8 000+', vacancies: 156, logo: '💬' },
    { name: 'Тинькофф', employees: '45 000+', vacancies: 203, logo: '🏦' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobGray-50 to-white font-inter">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-jobBlue/10 to-jobGreen/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-jobGray-900 mb-6 animate-fade-in">
              Найди работу 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jobBlue to-jobGreen"> мечты</span>
            </h1>
            <p className="text-xl text-jobGray-600 mb-12 animate-fade-in">
              Более 10,000 вакансий от ведущих компаний России. 
              Твоя карьера начинается здесь!
            </p>

            {/* Search Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto animate-scale-in">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <Icon name="Search" className="absolute left-3 top-3 text-jobGray-400" size={20} />
                  <Input
                    placeholder="Должность или компания"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-jobGray-200 focus:border-jobBlue focus:ring-jobBlue"
                  />
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12 border-jobGray-200">
                    <Icon name="MapPin" className="mr-2 text-jobGray-400" size={16} />
                    <SelectValue placeholder="Город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="novosibirsk">Новосибирск</SelectItem>
                    <SelectItem value="remote">Удаленно</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedSalary} onValueChange={setSelectedSalary}>
                  <SelectTrigger className="h-12 border-jobGray-200">
                    <Icon name="DollarSign" className="mr-2 text-jobGray-400" size={16} />
                    <SelectValue placeholder="Зарплата" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50 - 100 тыс ₽</SelectItem>
                    <SelectItem value="100-150">100 - 150 тыс ₽</SelectItem>
                    <SelectItem value="150-200">150 - 200 тыс ₽</SelectItem>
                    <SelectItem value="200+">200+ тыс ₽</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="h-12 border-jobGray-200">
                    <Icon name="Users" className="mr-2 text-jobGray-400" size={16} />
                    <SelectValue placeholder="Опыт" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-experience">Без опыта</SelectItem>
                    <SelectItem value="1-3">1-3 года</SelectItem>
                    <SelectItem value="3-5">3-5 лет</SelectItem>
                    <SelectItem value="5+">5+ лет</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full md:w-auto bg-gradient-to-r from-jobBlue to-jobGreen hover:from-jobBlue/90 hover:to-jobGreen/90 text-white px-12 py-3 text-lg font-semibold">
                <Icon name="Search" className="mr-2" size={20} />
                Найти вакансии
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-jobBlue mb-2">10,000+</div>
              <div className="text-jobGray-600">Активных вакансий</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-jobGreen mb-2">500+</div>
              <div className="text-jobGray-600">Проверенных компаний</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-jobOrange mb-2">50,000+</div>
              <div className="text-jobGray-600">Активных кандидатов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-jobRed mb-2">1,200+</div>
              <div className="text-jobGray-600">Трудоустройств в месяц</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-jobGray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jobGray-900 mb-4">🔥 Топ вакансии</h2>
            <p className="text-xl text-jobGray-600">Лучшие предложения от ведущих компаний</p>
          </div>
          {/* Extended Job Listings with Filters */}
          <div className="mb-8 flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-jobBlue text-jobBlue hover:bg-jobBlue hover:text-white">
              <Icon name="Code" className="mr-2" size={16} />
              IT & Разработка
            </Button>
            <Button variant="outline" className="border-jobGreen text-jobGreen hover:bg-jobGreen hover:text-white">
              <Icon name="Palette" className="mr-2" size={16} />
              Дизайн
            </Button>
            <Button variant="outline" className="border-jobOrange text-jobOrange hover:bg-jobOrange hover:text-white">
              <Icon name="TrendingUp" className="mr-2" size={16} />
              Маркетинг
            </Button>
            <Button variant="outline" className="border-jobRed text-jobRed hover:bg-jobRed hover:text-white">
              <Icon name="Users" className="mr-2" size={16} />
              HR
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mockJobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white border-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jobBlue to-jobGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl p-2 rounded-xl bg-gradient-to-br from-jobBlue/10 to-jobGreen/10 group-hover:scale-110 transition-transform">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-jobGray-900 group-hover:text-jobBlue transition-colors cursor-pointer text-lg">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-jobGray-600 font-medium">
                          {job.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-jobBlue/10 text-jobBlue hover:bg-jobBlue/20 border border-jobBlue/20">
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-jobGray-700 mb-4 line-clamp-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-jobGray-600 border-jobGray-300 hover:border-jobBlue hover:text-jobBlue transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center text-jobGray-600">
                        <Icon name="MapPin" size={16} className="mr-1 text-jobBlue" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="text-xl font-bold bg-gradient-to-r from-jobGreen to-jobBlue bg-clip-text text-transparent">
                        {job.salary}
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="text-sm text-jobGray-500">Опыт: {job.experience}</div>
                      <div className="flex gap-2">
                        <Button 
                          className="bg-gradient-to-r from-jobBlue to-jobGreen hover:from-jobBlue/90 hover:to-jobGreen/90 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                          onClick={() => {
                            setSelectedEmployer(job.company)
                            setChatOpen(true)
                          }}
                        >
                          <Icon name="MessageCircle" className="mr-2" size={16} />
                          Чат
                        </Button>
                        <Button variant="outline" className="border-jobBlue text-jobBlue hover:bg-jobBlue hover:text-white px-4 py-2">
                          <Icon name="Send" className="mr-2" size={16} />
                          Резюме
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-jobBlue text-jobBlue hover:bg-jobBlue hover:text-white">
              Посмотреть все вакансии →
            </Button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jobGray-900 mb-4">💼 Топ работодатели</h2>
            <p className="text-xl text-jobGray-600">Ведущие компании России ищут таланты</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-jobGray-50 border-0">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <h3 className="text-xl font-bold text-jobGray-900 mb-2">{company.name}</h3>
                  <p className="text-jobGray-600 mb-2">{company.employees} сотрудников</p>
                  <Badge className="bg-jobGreen/10 text-jobGreen hover:bg-jobGreen/20">
                    {company.vacancies} вакансий
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Features Section - Auth & Profiles */}
      <section className="py-16 bg-gradient-to-br from-jobGray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jobGray-900 mb-4">👤 Личный кабинет</h2>
            <p className="text-xl text-jobGray-600">Управляйте карьерой в одном месте</p>
          </div>
          
          {/* Mock User Dashboard Preview */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* For Job Seekers */}
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-jobBlue to-jobGreen text-white p-6">
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="User" className="mr-3" size={28} />
                  Для соискателей
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Ваш путь к идеальной работе
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-jobBlue/5 rounded-lg">
                    <Icon name="FileText" className="mr-3 text-jobBlue" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">Создать резюме</h4>
                      <p className="text-sm text-jobGray-600">Конструктор современного резюме</p>
                    </div>
                    <Button className="ml-auto bg-jobBlue hover:bg-jobBlue/90">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 bg-jobGreen/5 rounded-lg">
                    <Icon name="Bell" className="mr-3 text-jobGreen" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">Уведомления</h4>
                      <p className="text-sm text-jobGray-600">5 новых подходящих вакансий</p>
                    </div>
                    <Badge className="ml-auto bg-jobGreen text-white">5</Badge>
                  </div>
                  
                  <div className="flex items-center p-4 bg-jobOrange/5 rounded-lg">
                    <Icon name="BarChart" className="mr-3 text-jobOrange" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">Статистика</h4>
                      <p className="text-sm text-jobGray-600">12 просмотров резюме за неделю</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-jobBlue to-jobGreen hover:from-jobBlue/90 hover:to-jobGreen/90 text-white">
                  <Icon name="LogIn" className="mr-2" />
                  Войти как соискатель
                </Button>
              </CardContent>
            </Card>
            
            {/* For Employers */}
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-jobOrange to-jobRed text-white p-6">
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="Building" className="mr-3" size={28} />
                  Для работодателей
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Найдите лучших кандидатов
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-jobOrange/5 rounded-lg">
                    <Icon name="PlusCircle" className="mr-3 text-jobOrange" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">Разместить вакансию</h4>
                      <p className="text-sm text-jobGray-600">Быстрая публикация за 5 минут</p>
                    </div>
                    <Button className="ml-auto bg-jobOrange hover:bg-jobOrange/90">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 bg-jobRed/5 rounded-lg">
                    <Icon name="Users" className="mr-3 text-jobRed" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">База кандидатов</h4>
                      <p className="text-sm text-jobGray-600">15 новых откликов</p>
                    </div>
                    <Badge className="ml-auto bg-jobRed text-white">15</Badge>
                  </div>
                  
                  <div className="flex items-center p-4 bg-jobBlue/5 rounded-lg">
                    <Icon name="TrendingUp" className="mr-3 text-jobBlue" size={24} />
                    <div>
                      <h4 className="font-semibold text-jobGray-900">Аналитика</h4>
                      <p className="text-sm text-jobGray-600">Эффективность ваших вакансий</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-jobOrange to-jobRed hover:from-jobOrange/90 hover:to-jobRed/90 text-white">
                  <Icon name="LogIn" className="mr-2" />
                  Войти как работодатель
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-jobBlue to-jobGreen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готов начать новую карьеру? 🚀
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам специалистов, которые уже нашли работу мечты через JobSpace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-jobBlue hover:bg-jobGray-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <Icon name="User" className="mr-2" />
              Создать резюме
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-jobBlue px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <Icon name="Building" className="mr-2" />
              Разместить вакансию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          className="bg-gradient-to-r from-jobBlue to-jobGreen hover:from-jobBlue/90 hover:to-jobGreen/90 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          onClick={() => {
            setSelectedEmployer('JobSpace Support')
            setChatOpen(true)
          }}
        >
          <div className="relative">
            <Icon name="MessageCircle" size={24} />
            <div className="absolute -top-1 -right-1 bg-jobRed text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </div>
          </div>
        </Button>
      </div>

      {/* Chat Widget */}
      <ChatWidget
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        recipientName={selectedEmployer || 'HR Менеджер'}
        recipientRole="employer"
      />
    </div>
  )
}

export default Index