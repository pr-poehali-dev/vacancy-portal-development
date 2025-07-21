import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface JobListingsProps {
  onChatOpen: (company: string) => void
}

const JobListings = ({ onChatOpen }: JobListingsProps) => {
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

  return (
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
                        onClick={() => onChatOpen(job.company)}
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
  )
}

export default JobListings