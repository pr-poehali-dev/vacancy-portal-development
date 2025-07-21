import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

interface JobAnalyticsProps {
  isOpen: boolean
  onClose: () => void
}

const JobAnalytics = ({ isOpen, onClose }: JobAnalyticsProps) => {
  const mockAnalytics = {
    totalVacancies: 12,
    totalViews: 3247,
    totalApplications: 89,
    totalHired: 7,
    conversionRate: 2.7,
    avgTimeToHire: 14
  }

  const vacancyStats = [
    {
      id: 1,
      title: 'Frontend разработчик',
      views: 847,
      applications: 23,
      hired: 2,
      status: 'active',
      postedDate: '2024-01-15',
      conversionRate: 2.7,
      avgSalaryRequest: '195к',
      topSkills: ['React', 'TypeScript', 'CSS'],
      sourceStats: {
        direct: 45,
        search: 38,
        referral: 17
      }
    },
    {
      id: 2,
      title: 'Python разработчик',
      views: 692,
      applications: 18,
      hired: 1,
      status: 'active',
      postedDate: '2024-01-20',
      conversionRate: 2.6,
      avgSalaryRequest: '220к',
      topSkills: ['Python', 'Django', 'PostgreSQL'],
      sourceStats: {
        direct: 52,
        search: 31,
        referral: 17
      }
    },
    {
      id: 3,
      title: 'UX/UI дизайнер',
      views: 534,
      applications: 15,
      hired: 1,
      status: 'closed',
      postedDate: '2024-01-10',
      conversionRate: 2.8,
      avgSalaryRequest: '165к',
      topSkills: ['Figma', 'Sketch', 'Prototyping'],
      sourceStats: {
        direct: 41,
        search: 43,
        referral: 16
      }
    }
  ]

  const weeklyStats = [
    { day: 'Пн', views: 145, applications: 8 },
    { day: 'Вт', views: 167, applications: 12 },
    { day: 'Ср', views: 134, applications: 6 },
    { day: 'Чт', views: 189, applications: 15 },
    { day: 'Пт', views: 203, applications: 18 },
    { day: 'Сб', views: 89, applications: 4 },
    { day: 'Вс', views: 67, applications: 2 }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto bg-white shadow-2xl animate-scale-in">
        <CardHeader className="bg-gradient-to-r from-jobBlue to-jobGreen text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center">
                <Icon name="BarChart3" className="mr-3" size={28} />
                Аналитика вакансий
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Подробная статистика эффективности размещения
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2"
              onClick={onClose}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} />
                <span>Обзор</span>
              </TabsTrigger>
              <TabsTrigger value="vacancies" className="flex items-center space-x-2">
                <Icon name="Briefcase" size={16} />
                <span>По вакансиям</span>
              </TabsTrigger>
              <TabsTrigger value="trends" className="flex items-center space-x-2">
                <Icon name="Activity" size={16} />
                <span>Тренды</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Card className="bg-gradient-to-br from-jobBlue/10 to-jobBlue/5 border-jobBlue/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-jobBlue">{mockAnalytics.totalVacancies}</div>
                    <div className="text-sm text-jobGray-600">Активных вакансий</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-jobGreen/10 to-jobGreen/5 border-jobGreen/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-jobGreen">{mockAnalytics.totalViews.toLocaleString()}</div>
                    <div className="text-sm text-jobGray-600">Просмотров</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-jobOrange/10 to-jobOrange/5 border-jobOrange/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-jobOrange">{mockAnalytics.totalApplications}</div>
                    <div className="text-sm text-jobGray-600">Откликов</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-jobRed/10 to-jobRed/5 border-jobRed/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-jobRed">{mockAnalytics.totalHired}</div>
                    <div className="text-sm text-jobGray-600">Нанято</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">{mockAnalytics.conversionRate}%</div>
                    <div className="text-sm text-jobGray-600">Конверсия</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-indigo-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">{mockAnalytics.avgTimeToHire}</div>
                    <div className="text-sm text-jobGray-600">Дней до найма</div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" className="mr-2 text-jobBlue" />
                    Активность по дням недели
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyStats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-8 text-sm font-medium text-jobGray-600">{stat.day}</div>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Просмотры: {stat.views}</span>
                            <span>Отклики: {stat.applications}</span>
                          </div>
                          <Progress 
                            value={(stat.views / 250) * 100} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vacancies Tab */}
            <TabsContent value="vacancies" className="space-y-4">
              {vacancyStats.map((vacancy) => (
                <Card key={vacancy.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-jobGray-900 mb-1">{vacancy.title}</h3>
                        <p className="text-sm text-jobGray-600">Опубликовано: {vacancy.postedDate}</p>
                      </div>
                      <Badge 
                        className={vacancy.status === 'active' ? 'bg-jobGreen/10 text-jobGreen' : 'bg-jobGray-200 text-jobGray-700'}
                      >
                        {vacancy.status === 'active' ? '🟢 Активна' : '🔴 Закрыта'}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-jobBlue/5 rounded-lg">
                        <div className="text-xl font-bold text-jobBlue">{vacancy.views}</div>
                        <div className="text-xs text-jobGray-600">Просмотров</div>
                      </div>
                      <div className="text-center p-3 bg-jobOrange/5 rounded-lg">
                        <div className="text-xl font-bold text-jobOrange">{vacancy.applications}</div>
                        <div className="text-xs text-jobGray-600">Откликов</div>
                      </div>
                      <div className="text-center p-3 bg-jobGreen/5 rounded-lg">
                        <div className="text-xl font-bold text-jobGreen">{vacancy.hired}</div>
                        <div className="text-xs text-jobGray-600">Нанято</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">{vacancy.conversionRate}%</div>
                        <div className="text-xs text-jobGray-600">Конверсия</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-jobGray-700 mb-2">Источники трафика:</h4>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Прямые переходы</span>
                            <span className="font-medium">{vacancy.sourceStats.direct}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Поиск на сайте</span>
                            <span className="font-medium">{vacancy.sourceStats.search}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Рекомендации</span>
                            <span className="font-medium">{vacancy.sourceStats.referral}%</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-jobGray-700 mb-2">Дополнительная информация:</h4>
                        <div className="space-y-1 text-sm">
                          <div>Средняя ЗП в откликах: <span className="font-medium text-jobGreen">{vacancy.avgSalaryRequest}</span></div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {vacancy.topSkills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs border-jobBlue text-jobBlue">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-jobBlue">
                      <Icon name="Clock" className="mr-2" />
                      Лучшее время публикации
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-jobGreen/5 rounded-lg">
                      <span className="font-medium">Вторник, 10:00-12:00</span>
                      <Badge className="bg-jobGreen text-white">Пик активности</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-jobBlue/5 rounded-lg">
                      <span className="font-medium">Четверг, 14:00-16:00</span>
                      <Badge className="bg-jobBlue text-white">Высокий отклик</Badge>
                    </div>
                    <div className="text-sm text-jobGray-600 mt-4">
                      💡 Совет: Публикуйте вакансии во вторник утром для максимальной видимости
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-jobOrange">
                      <Icon name="Target" className="mr-2" />
                      Рекомендации по оптимизации
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-jobOrange/5 rounded-lg">
                      <div className="font-medium text-sm mb-1">📈 Увеличьте конверсию</div>
                      <div className="text-xs text-jobGray-600">Добавьте больше деталей о проекте в описание</div>
                    </div>
                    <div className="p-3 bg-jobRed/5 rounded-lg">
                      <div className="font-medium text-sm mb-1">🎯 Улучшите таргетинг</div>
                      <div className="text-xs text-jobGray-600">Уточните требования к опыту работы</div>
                    </div>
                    <div className="p-3 bg-jobGreen/5 rounded-lg">
                      <div className="font-medium text-sm mb-1">💰 Скорректируйте зарплату</div>
                      <div className="text-xs text-jobGray-600">Средняя ЗП в откликах на 15% выше указанной</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-jobGray-900">
                    <Icon name="Award" className="mr-2" />
                    Сравнение с рынком
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-jobBlue/10 to-transparent rounded-lg">
                      <div className="text-2xl font-bold text-jobBlue mb-1">87%</div>
                      <div className="text-sm text-jobGray-600">Ваша позиция по просмотрам</div>
                      <div className="text-xs text-jobGreen mt-1">+12% к среднему</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-jobGreen/10 to-transparent rounded-lg">
                      <div className="text-2xl font-bold text-jobGreen mb-1">73%</div>
                      <div className="text-sm text-jobGray-600">Позиция по откликам</div>
                      <div className="text-xs text-jobOrange mt-1">-5% к среднему</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-jobOrange/10 to-transparent rounded-lg">
                      <div className="text-2xl font-bold text-jobOrange mb-1">92%</div>
                      <div className="text-sm text-jobGray-600">Скорость закрытия</div>
                      <div className="text-xs text-jobGreen mt-1">+18% к среднему</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default JobAnalytics