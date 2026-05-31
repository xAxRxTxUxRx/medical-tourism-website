import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Calculator from '@/components/clinic/Calculator';
import MediaImage from '@/components/clinic/MediaImage';
import {
  IMAGES, HERO_VIDEO, IMAGE_FALLBACK, ADVANTAGES, SERVICE_GROUPS, PRICES, IMPLANT_STEPS,
  JOURNEY, DOCTORS, REVIEWS, MESSENGERS,
} from '@/components/clinic/data';

const NAV = [
  { id: 'about', label: 'О клинике' },
  { id: 'services', label: 'Услуги' },
  { id: 'prices', label: 'Цены' },
  { id: 'doctors', label: 'Врачи' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, eyebrow, title, sub, children, className = '' }: SectionProps) => (
  <section id={id} className={`py-20 md:py-28 px-5 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {(eyebrow || title) && (
        <div className="text-center mb-14">
          {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">{eyebrow}</p>}
          {title && <h2 className="font-display text-4xl md:text-6xl text-jade text-balance">{title}</h2>}
          {sub && <p className="text-muted-foreground max-w-2xl mx-auto mt-5 text-balance">{sub}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = HERO_VIDEO && !videoFailed;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 glass-card border-x-0 border-t-0">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-1">
            <span className="font-display text-2xl text-jade tracking-wide">Доверие</span>
            <span className="text-gold text-lg">❖</span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-jade/80 hover:text-jade transition">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#zayavka" className="hidden sm:inline-flex bg-jade text-ivory px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition">Записаться</a>
            <button onClick={() => setMenu(!menu)} className="lg:hidden text-jade p-2"><Icon name={menu ? 'X' : 'Menu'} size={24} /></button>
          </div>
        </div>
        {menu && (
          <div className="lg:hidden bg-background border-t border-gold/15 px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)} className="text-jade py-1">{n.label}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          {showVideo ? (
            <video
              src={HERO_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              poster={IMAGE_FALLBACK[IMAGES.lobby] || IMAGES.lobby}
              onError={() => setVideoFailed(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <MediaImage src={IMAGES.lobby} alt="Клиника Доверие" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-jade/85 via-jade/65 to-jade/90" />
        </div>
        <div className="relative z-10 text-center text-ivory px-5 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card !bg-ivory/10 !border-ivory/25 rounded-full px-5 py-2 mb-8 text-ivory text-sm">
            <Icon name="Landmark" size={16} className="text-gold" />
            Государственная клиника · Хэйхэ, Китай
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 text-balance">
            Государственная стоматологическая клиника <span className="text-gold">«Доверие»</span> в Китае
          </h1>
          <p className="text-lg md:text-xl text-ivory/85 max-w-2xl mx-auto mb-10 text-balance">
            Лечение зубов, косметология и медицина по ценам на 40–60% ниже российских при европейском уровне качества.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#zayavka" className="bg-gold text-jade px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-xl">Получить консультацию</a>
            <a href="#calc" className="glass-card !bg-ivory/10 !border-ivory/30 text-ivory px-8 py-4 rounded-full font-semibold hover:bg-ivory/20 transition">Рассчитать стоимость</a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-ivory/80">
            {['Бесплатная консультация', 'Переводчик', 'Помощь с проживанием', 'Гарантия', 'Оплата в рублях'].map((t) => (
              <span key={t} className="flex items-center gap-2"><Icon name="Check" size={15} className="text-gold" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <Section id="about" eyebrow="Почему выбирают нас" title="Доверие, проверенное технологиями" sub="Современный медицинский центр в 700 метрах от российской границы — комфорт, прозрачность и европейское качество.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="glass-card rounded-3xl p-7 hover-lift">
              <div className="w-12 h-12 rounded-2xl gradient-jade flex items-center justify-center mb-5">
                <Icon name={a.icon} size={22} className="text-ivory" />
              </div>
              <h3 className="font-display text-2xl text-jade mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[['3000+', 'м² медцентра'], ['25+', 'стоматологов'], ['98–99%', 'приживаемость'], ['2026', 'год открытия']].map(([n, l]) => (
            <div key={l} className="text-center gradient-jade rounded-3xl py-8 text-ivory">
              <p className="font-display text-4xl text-gold">{n}</p>
              <p className="text-sm opacity-80 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="oriental-divider max-w-3xl mx-auto" />

      {/* SERVICES */}
      <Section id="services" eyebrow="Направления" title="Полный спектр услуг" sub="От премиальной стоматологии до косметологии и традиционной китайской медицины." className="gradient-soft">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICE_GROUPS.map((g) => (
            <div key={g.title} className="glass-card rounded-3xl p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-jade flex items-center justify-center">
                  <Icon name={g.icon} size={26} className="text-ivory" />
                </div>
                <h3 className="font-display text-3xl text-jade">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="bg-secondary text-jade text-sm px-4 py-2 rounded-full">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICES */}
      <Section id="prices" eyebrow="Прозрачные цены" title="Стоимость и экономия" sub="Цены указаны в рублях. Сравните со средними ценами в России.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRICES.map((p) => (
            <div key={p.name} className="glass-card rounded-3xl p-7 hover-lift flex flex-col">
              <p className="font-display text-2xl text-jade mb-4">{p.name}</p>
              <div className="mt-auto">
                <p className="text-sm text-muted-foreground line-through">в России {fmt(p.russia)}</p>
                <p className="font-display text-4xl text-jade">от {fmt(p.china)}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">
                  <Icon name="TrendingDown" size={14} /> экономия {fmt(p.russia - p.china)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CALCULATOR */}
      <Section id="calc" eyebrow="Калькулятор" title="Рассчитайте стоимость лечения" sub="Выберите услуги и узнайте, сколько вы сэкономите по сравнению с Россией." className="gradient-soft">
        <Calculator />
      </Section>

      {/* IMPLANT TIMELINE */}
      <Section id="implant" eyebrow="Имплантация" title="Как проходит имплантация" sub="Приживаемость имплантов 98–99%. Прозрачный процесс на каждом этапе.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPLANT_STEPS.map((s, i) => (
            <div key={s.title} className="relative glass-card rounded-3xl p-7 hover-lift">
              <span className="absolute top-5 right-6 font-display text-5xl text-gold/30">{i + 1}</span>
              <div className="w-12 h-12 rounded-2xl gradient-jade flex items-center justify-center mb-5">
                <Icon name={s.icon} size={22} className="text-ivory" />
              </div>
              <h3 className="font-display text-2xl text-jade mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" eyebrow="Медицинский туризм" title="Ваш путь к новой улыбке" sub="Бесплатное бронирование отеля, трансфер, помощь на границе и переводчик." className="gradient-jade !text-ivory">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOURNEY.map((s, i) => (
            <div key={s.title} className="glass-card !bg-ivory/10 !border-ivory/20 rounded-3xl p-7 text-ivory">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <Icon name={s.icon} size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-sm opacity-80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DOCTORS */}
      <Section id="doctors" eyebrow="Наша команда" title="Врачи клиники «Доверие»" sub="Опытные специалисты с практикой работы с пациентами из России.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((d) => (
            <div key={d.name} className="group rounded-3xl overflow-hidden glass-card hover-lift">
              <div className="aspect-[4/5] overflow-hidden">
                <MediaImage src={IMAGES.doctor} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-jade">{d.name}</h3>
                <p className="text-sm text-gold font-medium">{d.role}</p>
                <p className="text-sm text-muted-foreground mt-1">{d.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Галерея" title="Атмосфера клиники" sub="Интерьеры, кабинеты, оборудование и зоны отдыха для пациентов." className="gradient-soft">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {[IMAGES.lobby, IMAGES.room, IMAGES.doctor, IMAGES.room, IMAGES.lobby, IMAGES.doctor].map((src, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden group ${i === 0 ? 'md:row-span-2 md:col-span-2' : ''}`}>
              <MediaImage src={src} alt="Галерея клиники" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
          ))}
        </div>
      </Section>

      {/* VIDEO */}
      <Section id="video" eyebrow="Видео" title="Кинематографичный обзор клиники" sub="Презентация клиники, отзывы пациентов и процесс лечения.">
        <div className="grid md:grid-cols-3 gap-6">
          {['Презентация клиники', 'Отзывы пациентов', 'Процесс лечения'].map((t, i) => (
            <div key={t} className="relative rounded-3xl overflow-hidden aspect-video group cursor-pointer hover-lift">
              <MediaImage src={[IMAGES.lobby, IMAGES.doctor, IMAGES.room][i]} alt={t} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-jade/50 flex flex-col items-center justify-center text-ivory">
                <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition">
                  <Icon name="Play" size={26} className="text-jade ml-1" />
                </div>
                <p className="font-display text-xl mt-4">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" eyebrow="Отзывы" title="Что говорят пациенты" className="gradient-soft">
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="glass-card rounded-3xl p-7 hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-jade/90 mb-5 leading-relaxed">«{r.text}»</p>
              <p className="font-display text-xl text-jade">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRAVEL */}
      <Section id="travel" eyebrow="Дорога в Хэйхэ" title="Как добраться до клиники" sub="Хэйхэ расположен прямо напротив Благовещенска, всего в 700 метрах от пункта пропуска.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: 'MapPin', t: 'Рядом с Благовещенском', d: 'Город Хэйхэ напротив через Амур' },
            { icon: 'TramFront', t: 'Переход границы', d: 'Помогаем пройти пункт пропуска' },
            { icon: 'Car', t: 'Трансфер', d: 'Встречаем и довозим до клиники' },
            { icon: 'BedDouble', t: 'Проживание', d: 'Бронируем отель бесплатно' },
          ].map((c) => (
            <div key={c.t} className="glass-card rounded-3xl p-7 text-center hover-lift">
              <Icon name={c.icon} size={28} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl text-jade mb-1">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APPOINTMENT + CONTACTS */}
      <Section id="zayavka" eyebrow="Запись на приём" title="Получите бесплатную консультацию" className="gradient-jade !text-ivory">
        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={submit} className="glass-card !bg-ivory/95 rounded-3xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Имя" className="bg-white rounded-xl h-12" />
              <Input required placeholder="Телефон" className="bg-white rounded-xl h-12" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Город" className="bg-white rounded-xl h-12" />
              <Input placeholder="Желаемое лечение" className="bg-white rounded-xl h-12" />
            </div>
            <Input placeholder="Мессенджер для связи" className="bg-white rounded-xl h-12" />
            <Textarea placeholder="Комментарий" className="bg-white rounded-xl min-h-24" />
            <Button type="submit" className="w-full bg-jade text-ivory rounded-full h-12 text-base hover:opacity-90">Отправить заявку</Button>
            <p className="text-xs text-jade/60 text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
          </form>

          <div id="contacts" className="space-y-4">
            <div className="space-y-3">
              {MESSENGERS.map((m) => (
                <a key={m.label} href={m.href} className="glass-card !bg-ivory/10 !border-ivory/20 rounded-2xl p-5 flex items-center gap-4 text-ivory hover:bg-ivory/15 transition">
                  <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                    <Icon name={m.icon} size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs opacity-70">{m.label}</p>
                    <p className="font-medium">{m.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="glass-card !bg-ivory/10 !border-ivory/20 rounded-2xl p-5 text-ivory">
              <div className="flex items-center gap-2 mb-2"><Icon name="MapPin" size={18} className="text-gold" /><span className="font-medium">Адрес</span></div>
              <p className="text-sm opacity-80">Китай, г. Хэйхэ, в 700 м от пункта пропуска напротив г. Благовещенск</p>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 border border-ivory/20">
              <iframe title="Карта" className="w-full h-full grayscale" src="https://yandex.ru/map-widget/v1/?ll=127.528%2C50.246&z=12" />
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-jade text-ivory/70 py-12 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center text-center md:text-left">
          <div>
            <p className="font-display text-2xl text-ivory">Доверие <span className="text-gold">❖</span></p>
            <p className="text-sm mt-1">Государственная клиника · Хэйхэ, Китай</p>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Клиника «Доверие». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}