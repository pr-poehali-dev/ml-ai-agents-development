import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-primary rounded-full glow-cyan">
            <span className="text-primary text-sm font-semibold tracking-wider">AI & ML РЕШЕНИЯ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow-cyan leading-tight">
            Превращаем данные
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              в интеллект
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Разрабатываем ML-модели и AI-агенты для автоматизации бизнес-процессов
            и принятия решений на основе данных
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg px-8 py-6"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8 py-6"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple">
              Наши услуги
            </h2>
            <p className="text-muted-foreground text-lg">
              Комплексные AI-решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-2 border-primary/20 hover:border-primary transition-all duration-300 p-8 hover:glow-cyan group">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:glow-cyan transition-all">
                <Icon name="Brain" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Разработка ML-моделей
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Создаём нейронные сети и алгоритмы машинного обучения под специфику вашей задачи: 
                от прогнозирования до классификации данных
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Обучение на ваших данных</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Оптимизация точности</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>A/B тестирование моделей</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-2 border-secondary/20 hover:border-secondary transition-all duration-300 p-8 hover:glow-purple group">
              <div className="mb-6 w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:glow-purple transition-all">
                <Icon name="Bot" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                Создание AI-агентов
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Разрабатываем интеллектуальных агентов для автоматизации рутины: 
                чат-боты, голосовые ассистенты, системы рекомендаций
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Обработка естественного языка</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Интеграция с системами</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-secondary mr-2 mt-1 flex-shrink-0" />
                  <span>Обучение на диалогах</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-2 border-primary/20 hover:border-primary transition-all duration-300 p-8 hover:glow-cyan group">
              <div className="mb-6 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:glow-cyan transition-all">
                <Icon name="Gauge" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                MLOps и поддержка
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Развёртываем модели в продакшн, настраиваем мониторинг и обеспечиваем 
                непрерывное улучшение качества
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>CI/CD для моделей</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Мониторинг производительности</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Автоматическое переобучение</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-cyan">
              Процесс работы
            </h2>
            <p className="text-muted-foreground text-lg">
              От идеи до развёртывания за 5 шагов
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  icon: "Lightbulb",
                  title: "Анализ задачи",
                  description: "Изучаем ваш бизнес-процесс и определяем, как AI может решить задачу",
                  color: "primary"
                },
                {
                  icon: "Database",
                  title: "Подготовка данных",
                  description: "Собираем, очищаем и размечаем данные для обучения модели",
                  color: "secondary"
                },
                {
                  icon: "Cpu",
                  title: "Разработка модели",
                  description: "Создаём и обучаем ML-модель, тестируем различные архитектуры",
                  color: "primary"
                },
                {
                  icon: "Settings",
                  title: "Интеграция",
                  description: "Внедряем решение в вашу инфраструктуру с минимальным downtime",
                  color: "secondary"
                },
                {
                  icon: "TrendingUp",
                  title: "Мониторинг и улучшение",
                  description: "Отслеживаем метрики, дообучаем модель и масштабируем решение",
                  color: "primary"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6 relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 border-2 ${
                    step.color === 'primary' ? 'bg-primary/10 border-primary glow-cyan' : 'bg-secondary/10 border-secondary glow-purple'
                  }`}>
                    <Icon name={step.icon as any} size={28} className={step.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        ШАГ {index + 1}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-20"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow-purple">
              Преимущества работы с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Zap",
                title: "Быстрый запуск",
                description: "MVP за 2-4 недели"
              },
              {
                icon: "Shield",
                title: "Безопасность данных",
                description: "Полное соответствие ФЗ-152"
              },
              {
                icon: "Users",
                title: "Экспертиза",
                description: "Команда из 15+ ML-инженеров"
              },
              {
                icon: "Headphones",
                title: "Поддержка 24/7",
                description: "Всегда на связи"
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card border border-primary/20 p-6 hover:border-primary hover:glow-cyan transition-all duration-300 text-center group"
              >
                <div className="mb-4 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:glow-cyan transition-all">
                  <Icon name={benefit.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-2 border-primary p-8 md:p-12 glow-cyan">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-cyan">
                Готовы начать?
              </h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Расскажите о вашей задаче
                </label>
                <Textarea
                  id="message"
                  placeholder="Опишите, какую задачу вы хотите решить с помощью AI..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/30 focus:border-primary min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg py-6"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Brain" size={24} className="text-primary" />
            <span className="text-xl font-bold">AI Solutions</span>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Превращаем идеи в интеллектуальные решения
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
