import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import JobListings from '@/components/JobListings'
import CompaniesSection from '@/components/CompaniesSection'
import UserFeaturesSection from '@/components/UserFeaturesSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import JobAnalytics from '@/components/JobAnalytics'

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedEmployer, setSelectedEmployer] = useState('')
  const [analyticsOpen, setAnalyticsOpen] = useState(false)

  const handleChatOpen = (company: string) => {
    setSelectedEmployer(company)
    setChatOpen(true)
  }

  const handleAnalyticsOpen = () => {
    setAnalyticsOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobGray-50 to-white font-inter">
      <Header />
      <HeroSection />
      <StatsSection />
      <JobListings onChatOpen={handleChatOpen} />
      <CompaniesSection />
      <UserFeaturesSection onAnalyticsOpen={handleAnalyticsOpen} />
      <CTASection />
      <Footer />

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

      {/* Analytics Widget */}
      <JobAnalytics
        isOpen={analyticsOpen}
        onClose={() => setAnalyticsOpen(false)}
      />
    </div>
  )
}

export default Index