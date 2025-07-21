import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const CTASection = () => {
  return (
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
  )
}

export default CTASection