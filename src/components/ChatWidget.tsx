import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

interface Message {
  id: number
  text: string
  sender: 'user' | 'employer'
  timestamp: string
  avatar?: string
  name: string
}

interface ChatProps {
  isOpen: boolean
  onClose: () => void
  recipientName?: string
  recipientRole?: 'employer' | 'candidate'
}

const ChatWidget = ({ isOpen, onClose, recipientName = "HR Менеджер", recipientRole = "employer" }: ChatProps) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Увидел ваше резюме, очень заинтересовала ваша экспертиза в React. Можем обсудить возможности?",
      sender: 'employer',
      timestamp: '14:30',
      name: recipientName,
      avatar: '👔'
    },
    {
      id: 2,
      text: "Добрый день! Да, конечно, буду рад обсудить. Какие есть вакансии?",
      sender: 'user',
      timestamp: '14:35',
      name: 'Вы',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      text: "У нас открыта позиция Senior Frontend Developer. Зарплата от 250к, удаленка + офис в центре. Интересно?",
      sender: 'employer',
      timestamp: '14:37',
      name: recipientName,
      avatar: '👔'
    }
  ])

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        name: 'Вы',
        avatar: '👨‍💻'
      }
      setMessages([...messages, newMessage])
      setMessage('')
      
      // Simulate employer response
      setTimeout(() => {
        const responseMessage: Message = {
          id: messages.length + 2,
          text: "Отлично! Давайте созвонимся завтра в 15:00 для детального обсуждения?",
          sender: 'employer',
          timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
          name: recipientName,
          avatar: '👔'
        }
        setMessages(prev => [...prev, responseMessage])
      }, 1500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-md h-[600px] bg-white shadow-2xl animate-scale-in flex flex-col">
        <CardHeader className="bg-gradient-to-r from-jobBlue to-jobGreen text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarFallback className="bg-white text-jobBlue text-lg">👔</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{recipientName}</CardTitle>
                <div className="flex items-center text-white/80 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  онлайн
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 p-2"
                onClick={() => {}}
              >
                <Icon name="Phone" size={16} />
              </Button>
              <Button
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 p-2"
                onClick={() => {}}
              >
                <Icon name="Video" size={16} />
              </Button>
              <Button
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 p-2"
                onClick={onClose}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 flex flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-3 ${
                    msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className={`text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-jobBlue text-white' 
                        : 'bg-jobGreen text-white'
                    }`}>
                      {msg.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex flex-col max-w-[70%] ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}>
                    <div className={`px-3 py-2 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-jobBlue to-jobGreen text-white rounded-br-sm'
                        : 'bg-jobGray-100 text-jobGray-900 rounded-bl-sm'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <span className="text-xs text-jobGray-500 mt-1">{msg.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <Separator />

          {/* Quick Actions */}
          <div className="p-3 bg-jobGray-50">
            <div className="flex gap-2 mb-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-jobBlue text-jobBlue hover:bg-jobBlue hover:text-white"
                onClick={() => setMessage("Да, интересно! Расскажите подробнее о проекте")}
              >
                📋 О проекте
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-jobGreen text-jobGreen hover:bg-jobGreen hover:text-white"
                onClick={() => setMessage("Можем созвониться для обсуждения деталей")}
              >
                📞 Созвон
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs border-jobOrange text-jobOrange hover:bg-jobOrange hover:text-white"
                onClick={() => setMessage("Отправлю портфолио на почту")}
              >
                💼 Портфолио
              </Button>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Введите сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-jobGray-200 focus:border-jobBlue focus:ring-jobBlue"
              />
              <Button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="bg-gradient-to-r from-jobBlue to-jobGreen hover:from-jobBlue/90 hover:to-jobGreen/90 px-3"
              >
                <Icon name="Send" size={16} />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-jobGray-500">
              <div className="flex items-center space-x-3">
                <button className="hover:text-jobBlue transition-colors">
                  <Icon name="Paperclip" size={14} />
                </button>
                <button className="hover:text-jobBlue transition-colors">
                  <Icon name="Smile" size={14} />
                </button>
                <button className="hover:text-jobBlue transition-colors">
                  <Icon name="Image" size={14} />
                </button>
              </div>
              <span>Enter для отправки</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChatWidget