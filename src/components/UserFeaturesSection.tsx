import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface UserFeaturesSectionProps {
  onAnalyticsOpen: () => void
}

const UserFeaturesSection = ({ onAnalyticsOpen }: UserFeaturesSectionProps) => {
  return (
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
                
                <div className="flex items-center p-4 bg-jobBlue/5 rounded-lg cursor-pointer hover:bg-jobBlue/10 transition-colors"
                     onClick={onAnalyticsOpen}>
                  <Icon name="TrendingUp" className="mr-3 text-jobBlue" size={24} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-jobGray-900">Аналитика</h4>
                    <p className="text-sm text-jobGray-600">Эффективность ваших вакансий</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-jobBlue text-white text-xs">3247 👀</Badge>
                    <div className="text-xs text-jobGray-500 mt-1">Всего просмотров</div>
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
  )
}

export default UserFeaturesSection