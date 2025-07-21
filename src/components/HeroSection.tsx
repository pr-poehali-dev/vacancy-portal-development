import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSalary, setSelectedSalary] = useState('')
  const [selectedExperience, setSelectedExperience] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  return (
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
  )
}

export default HeroSection