const StatsSection = () => {
  return (
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
  )
}

export default StatsSection