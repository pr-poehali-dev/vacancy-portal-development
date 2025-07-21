import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const CompaniesSection = () => {
  const companies = [
    { name: 'Яндекс', employees: '18 000+', vacancies: 245, logo: '🔍' },
    { name: 'Сбер', employees: '25 000+', vacancies: 189, logo: '💳' },
    { name: 'VK', employees: '8 000+', vacancies: 156, logo: '💬' },
    { name: 'Тинькофф', employees: '45 000+', vacancies: 203, logo: '🏦' }
  ]

  return (
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
  )
}

export default CompaniesSection