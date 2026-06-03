import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Calculator from '@/components/clinic/Calculator';
import MediaImage from '@/components/clinic/MediaImage';
import Reveal from '@/components/clinic/Reveal';
import {
  IMAGES, HERO_VIDEO, IMAGE_FALLBACK,
  GALLERY, CERTIFICATES, ALL_DOCTORS_PHOTO, HOTEL_PHOTOS, FEEDBACK_PHOTOS, FEEDBACK_VIDEO,
  ADVANTAGES, DENTAL_CATEGORIES, CROWN_TYPES, IMPLANT_STEPS,
  DIRECTIONS, JOURNEY_STEPS, JOURNEY_BONUSES,
  DOCTORS, REVIEWS, MESSENGERS, PHONES, CONTACT_EMAIL,
} from '@/components/clinic/data';

const NAV = [
  { id: 'about', label: 'О клинике' },
  { id: 'services', label: 'Услуги и цены' },
  { id: 'journey', label: 'Как мы работаем' },
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
        <Reveal className="text-center mb-14">
          {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">{eyebrow}</p>}
          {title && <h2 className="font-display text-4xl md:text-6xl text-jade text-balance">{title}</h2>}
          {sub && <p className="text-muted-foreground max-w-2xl mx-auto mt-5 text-balance">{sub}</p>}
        </Reveal>
      )}
      {children}
    </div>
  </section>
);

const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';
const fmtRange = (min: number, max?: number) => (max ? `от ${fmt(min)} до ${fmt(max)}` : `от ${fmt(min)}`);

function AutoVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return <MediaImage src={poster} alt="" className={className} />;
  }
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      poster={IMAGE_FALLBACK[poster] || poster}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function Index() {
  const [menu, setMenu] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 glass-card border-x-0 border-t-0">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo_128.png" alt="Доверие" className="h-9 w-9" />
            <span className="font-display text-2xl text-jade tracking-wide">Доверие</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
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
          <AutoVideo src={HERO_VIDEO} poster={IMAGES.lobby} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-jade/85 via-jade/65 to-jade/90" />
          <div className="absolute inset-0 pattern-clouds-light opacity-50" />
        </div>
        <div className="relative z-10 text-center text-ivory px-5 max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card !bg-ivory/10 !border-ivory/25 rounded-full px-5 py-2 mb-8 text-ivory text-sm">
            <Icon name="Landmark" size={16} className="text-gold" />
            Государственная клиника · Хэйхэ, Китай
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 text-balance">
            Государственная стоматологическая клиника <span className="text-gold">«Доверие»</span> в Хэйхэ, Китай
          </h1>
          <p className="text-lg md:text-xl text-ivory/85 max-w-2xl mx-auto mb-10 text-balance">
            Лечение зубов, косметология и медицина по ценам на 40–60% ниже российских при европейском уровне качества.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#zayavka" className="bg-gold text-jade px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-xl">Получить консультацию</a>
            <a href="#services" className="glass-card !bg-ivory/10 !border-ivory/30 text-ivory px-8 py-4 rounded-full font-semibold hover:bg-ivory/20 transition">Услуги и цены</a>
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
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={(i % 4) * 80} className="glass-card rounded-3xl p-7 hover-lift">
              <div className="w-12 h-12 rounded-2xl gradient-jade flex items-center justify-center mb-5">
                <Icon name={a.icon} size={22} className="text-ivory" />
              </div>
              <h3 className="font-display text-2xl text-jade mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[['3000+', 'м² медцентра'], ['25+', 'стоматологов'], ['98–99%', 'приживаемость'], ['2026', 'год открытия']].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className="text-center gradient-jade rounded-3xl py-8 text-ivory relative overflow-hidden">
              <div className="absolute inset-0 pattern-clouds-light opacity-50" />
              <p className="font-display text-4xl text-gold relative">{n}</p>
              <p className="text-sm opacity-80 mt-1 relative">{l}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="oriental-divider max-w-3xl mx-auto" />

      {/* SERVICES + PRICES */}
      <Section id="services" eyebrow="Услуги и стоимость" title="Стоматология — наша специализация" sub="Полный спектр стоматологии с прозрачными ценами в рублях. Ниже — косметология и медицина." className="gradient-soft pattern-clouds">
        <div className="space-y-8">
          {DENTAL_CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.id} className="glass-card rounded-[2rem] overflow-hidden hover-lift">
              <div className={`grid md:grid-cols-2 ${idx % 2 ? 'md:[direction:rtl]' : ''}`}>
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden [direction:ltr]">
                  <MediaImage src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 [direction:ltr]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl gradient-jade flex items-center justify-center shrink-0">
                      <Icon name={cat.icon} size={22} className="text-ivory" />
                    </div>
                    <h3 className="font-display text-3xl text-jade">{cat.title}</h3>
                  </div>
                  {cat.intro && <p className="text-sm text-muted-foreground mb-5">{cat.intro}</p>}
                  <div className="space-y-3">
                    {cat.services.map((s) => (
                      <div key={s.name} className="flex items-start justify-between gap-4 border-b border-gold/15 pb-3">
                        <div>
                          <p className="font-medium text-jade">{s.name}</p>
                          <p className="text-sm text-muted-foreground">{s.desc}</p>
                        </div>
                        <div className="text-right whitespace-nowrap">
                          <p className="text-jade font-semibold font-display text-xl leading-none">{fmtRange(s.price, s.priceMax)}</p>
                          <p className="text-xs text-muted-foreground line-through mt-1">в РФ {fmt(s.ru)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Виды коронок */}
        <Reveal className="text-center mt-20 mb-10">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Виды коронок</h3>
          <p className="text-muted-foreground mt-3">Подбираем оптимальный материал под ваш случай.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {CROWN_TYPES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="glass-card rounded-3xl overflow-hidden hover-lift">
              <div className="aspect-[16/9] overflow-hidden">
                <MediaImage src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name={c.icon} size={24} className="text-gold" />
                  <h4 className="font-display text-2xl text-jade">{c.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{c.text}</p>
                <ul className="space-y-2 mb-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-jade/90">
                      <Icon name="Check" size={15} className="text-gold mt-0.5 shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <span className="inline-block bg-gold/15 text-jade font-semibold px-4 py-2 rounded-full">от {fmt(c.price)}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Этапы имплантации */}
        <Reveal className="text-center mt-20 mb-10">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Как проходит имплантация</h3>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Приживаемость имплантов 98–99%. Прозрачный процесс на каждом этапе.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPLANT_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} className="relative glass-card rounded-3xl p-7 hover-lift">
              <span className="absolute top-5 right-6 font-display text-5xl text-gold/30">{i + 1}</span>
              <div className="w-12 h-12 rounded-2xl gradient-jade flex items-center justify-center mb-5">
                <Icon name={s.icon} size={22} className="text-ivory" />
              </div>
              <h4 className="font-display text-2xl text-jade mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Калькулятор */}
        <Reveal className="text-center mt-20 mb-10">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Калькулятор стоимости</h3>
          <p className="text-muted-foreground mt-3">Выберите услуги и узнайте примерную стоимость лечения.</p>
        </Reveal>
        <Calculator />

        {/* Косметология и другие медицины */}
        <Reveal className="text-center mt-20 mb-10">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Косметология и медицина</h3>
          <p className="text-muted-foreground mt-3">Помимо стоматологии мы предлагаем широкий спектр услуг.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 90} className="glass-card rounded-3xl overflow-hidden hover-lift flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <MediaImage src={d.image} alt={d.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl gradient-jade flex items-center justify-center shrink-0">
                    <Icon name={d.icon} size={20} className="text-ivory" />
                  </div>
                  <h4 className="font-display text-2xl text-jade">{d.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{d.text}</p>
                <ul className="space-y-2 mt-auto">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-jade/90">
                      <Icon name="Check" size={15} className="text-gold mt-0.5 shrink-0" />{it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* JOURNEY */}
      <Section id="journey" eyebrow="Как мы работаем" title="Ваш путь к новой улыбке" sub="Сопровождаем на каждом этапе — от первой заявки до возвращения домой." className="gradient-jade !text-ivory pattern-clouds-light">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOURNEY_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} className="rounded-3xl bg-ivory/[0.08] border border-ivory/25 backdrop-blur-sm p-7 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-4xl text-gold leading-none">0{i + 1}</span>
                <div className="w-11 h-11 rounded-2xl bg-gold/20 flex items-center justify-center">
                  <Icon name={s.icon} size={22} className="text-gold" />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-2 text-[#036168]">{s.title}</h3>
              <p className="text-sm text-[#036168]">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Бонусы */}
        <Reveal className="text-center mt-16 mb-8">
          <h3 className="font-display text-3xl md:text-4xl text-ivory">Всё это — бесплатно для наших пациентов</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {JOURNEY_BONUSES.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="rounded-3xl bg-white text-jade p-7 hover-lift">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center mb-4">
                <Icon name={b.icon} size={22} className="text-gold" />
              </div>
              <h4 className="font-display text-xl mb-2 text-jade">{b.title}</h4>
              <p className="text-sm text-jade/70">{b.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Фото отеля и проживания */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {HOTEL_PHOTOS.map((src, i) => (
            <Reveal key={i} delay={i * 70} className="rounded-3xl overflow-hidden group aspect-[4/5]">
              <MediaImage src={src} alt="Проживание для пациентов" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DOCTORS */}
      <Section id="doctors" eyebrow="Наша команда" title="Врачи клиники «Доверие»" sub="Опытные специалисты с практикой работы с пациентами из России.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 80} className="group rounded-3xl overflow-hidden glass-card hover-lift">
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <MediaImage src={d.photo} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-jade">{d.name}</h3>
                <p className="text-sm text-gold font-medium">{d.role}</p>
                {d.exp && <p className="text-sm text-muted-foreground mt-1">{d.exp}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Общее фото команды */}
        <Reveal className="mt-10 rounded-[2rem] overflow-hidden relative hover-lift">
          <div className="aspect-[21/9] overflow-hidden">
            <MediaImage src={ALL_DOCTORS_PHOTO} alt="Команда врачей клиники" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-jade/85 to-transparent flex items-end p-8">
            <div className="text-ivory">
              <p className="font-display text-3xl md:text-4xl">Наша команда</p>
              <p className="opacity-85">Более 25 специалистов, готовых помочь вам</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" eyebrow="Галерея" title="Атмосфера клиники" sub="Интерьеры, кабинеты, оборудование и зоны отдыха для пациентов." className="gradient-soft pattern-clouds">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {GALLERY.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 60} className={`rounded-3xl overflow-hidden group ${i === 0 ? 'md:row-span-2 md:col-span-2' : ''} ${i === 5 ? 'md:row-span-2' : ''}`}>
              <MediaImage src={src} alt="Галерея клиники" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </Reveal>
          ))}
        </div>

        {/* Сертификаты */}
        <Reveal className="text-center mt-20 mb-10">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Сертификаты и лицензии</h3>
          <p className="text-muted-foreground mt-3">Подтверждение качества и официального статуса клиники.</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {CERTIFICATES.map((src, i) => (
            <Reveal key={i} delay={i * 70} className="glass-card rounded-2xl p-3 hover-lift">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-cream">
                <MediaImage src={src} alt={`Сертификат ${i + 1}`} className="w-full h-full object-contain" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">Сертификат №{i + 1}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" eyebrow="Отзывы" title="Что говорят пациенты">
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80} className="glass-card rounded-3xl p-7 hover-lift">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-jade/90 mb-5 leading-relaxed">«{r.text}»</p>
              <p className="font-display text-xl text-jade">{r.name}</p>
            </Reveal>
          ))}
        </div>

        {/* Фото довольных пациентов */}
        <Reveal className="text-center mt-16 mb-8">
          <h3 className="font-display text-3xl md:text-4xl text-jade">Наши счастливые пациенты</h3>
          <p className="text-muted-foreground mt-3">Люди, которые доверили нам свою улыбку.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEEDBACK_PHOTOS.map((src, i) => (
            <Reveal key={i} delay={i * 100} className="rounded-[2rem] overflow-hidden shadow-xl border border-gold/20 aspect-[4/5] hover-lift">
              <MediaImage src={src} alt={`Пациент ${i + 1}`} className="w-full h-full object-cover" />
            </Reveal>
          ))}
        </div>

        {/* Видео-отзыв */}
        <Reveal className="mt-8 max-w-3xl mx-auto">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gold/20 aspect-video">
            <video
              src={FEEDBACK_VIDEO}
              controls
              playsInline
              poster={FEEDBACK_PHOTOS[0]}
              className="w-full h-full object-cover bg-jade"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">Видео-отзыв нашего пациента</p>
        </Reveal>
      </Section>

      {/* APPOINTMENT + CONTACTS */}
      <Section id="zayavka" eyebrow="Запись на приём" title="Получите бесплатную консультацию" className="gradient-jade !text-ivory pattern-clouds-light">
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <form onSubmit={submit} className="bg-white rounded-[2rem] p-8 shadow-2xl space-y-5">
              <div>
                <p className="font-display text-2xl text-jade">Оставьте заявку</p>
                <p className="text-sm text-muted-foreground mt-1">Перезвоним и составим план лечения бесплатно</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Icon name="User" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-jade/40 z-10" />
                  <Input required placeholder="Имя" className="bg-cream/40 border-border rounded-xl h-12 pl-11 text-jade placeholder:text-jade/40" />
                </div>
                <div className="relative">
                  <Icon name="Phone" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-jade/40 z-10" />
                  <Input required placeholder="Телефон" className="bg-cream/40 border-border rounded-xl h-12 pl-11 text-jade placeholder:text-jade/40" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Icon name="MapPin" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-jade/40 z-10" />
                  <Input placeholder="Город" className="bg-cream/40 border-border rounded-xl h-12 pl-11 text-jade placeholder:text-jade/40" />
                </div>
                <div className="relative">
                  <Icon name="Stethoscope" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-jade/40 z-10" />
                  <Input placeholder="Желаемое лечение" className="bg-cream/40 border-border rounded-xl h-12 pl-11 text-jade placeholder:text-jade/40" />
                </div>
              </div>
              <div className="relative">
                <Icon name="MessageCircle" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-jade/40 z-10" />
                <Input placeholder="Мессенджер для связи" className="bg-cream/40 border-border rounded-xl h-12 pl-11 text-jade placeholder:text-jade/40" />
              </div>
              <Textarea placeholder="Комментарий" className="bg-cream/40 border-border rounded-xl min-h-24 text-jade placeholder:text-jade/40" />
              <Button type="submit" className="w-full bg-jade text-ivory rounded-full h-12 text-base hover:opacity-90 shadow-lg shadow-jade/20">Отправить заявку</Button>
              <p className="text-xs text-jade/50 text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          </Reveal>

          <Reveal delay={120} id="contacts" as="div" className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {PHONES.map((p) => (
                <a key={p.value} href={p.href} className="bg-ivory/[0.08] border border-ivory/25 rounded-2xl p-5 flex items-start gap-4 hover:bg-ivory/15 transition">
                  <div className="w-11 h-11 rounded-xl bg-gold/25 flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-ivory/70">{p.label}</p>
                    <p className="font-medium text-ivory">{p.value}</p>
                    {p.note && <p className="text-xs text-ivory/70 mt-1">{p.note}</p>}
                  </div>
                </a>
              ))}
            </div>

            <a href={CONTACT_EMAIL.href} className="bg-ivory/[0.08] border border-ivory/25 rounded-2xl p-5 flex items-center gap-4 hover:bg-ivory/15 transition">
              <div className="w-11 h-11 rounded-xl bg-gold/25 flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-ivory/70">{CONTACT_EMAIL.label}</p>
                <p className="font-medium text-ivory">{CONTACT_EMAIL.value}</p>
              </div>
            </a>

            <div className="bg-ivory/[0.08] border border-ivory/25 rounded-2xl p-5">
              <p className="font-medium text-ivory mb-3">Мессенджеры и QR-коды</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {MESSENGERS.map((m) => (
                  <a key={m.label} href={m.href} className="rounded-2xl border border-ivory/20 p-4 bg-ivory/[0.04] hover:bg-ivory/10 transition flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gold/25 flex items-center justify-center">
                        <Icon name={m.icon} size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-ivory">{m.label}</p>
                        <p className="text-xs text-ivory/70">{m.value}</p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/95 p-3 aspect-square flex items-center justify-center">
                      <MediaImage src={m.qr} alt={`QR ${m.label}`} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs text-ivory/70">Нажмите, чтобы открыть</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-ivory/[0.08] border border-ivory/25 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2"><Icon name="MapPin" size={18} className="text-gold" /><span className="font-medium text-ivory">Адрес</span></div>
              <p className="text-sm text-ivory/80">Провинция Хэйлунцзян, Хэйхэ, улица Чжунъян, Китай</p>
              <p className="text-sm text-ivory/80">Координаты: 50.243901, 127.504512</p>
              <p className="text-sm text-ivory/80 mt-2">г. Хэйхэ, в 700 м от пункта пропуска напротив г. Благовещенск</p>
            </div>
            <div className="rounded-2xl overflow-hidden h-48 border border-ivory/25">
              <iframe title="Карта" className="w-full h-full grayscale" src="https://yandex.ru/map-widget/v1/?ll=127.504512%2C50.243901&z=16&pt=127.504512,50.243901,pm2rdm" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-jade text-ivory/70 py-12 px-5 relative overflow-hidden">
        <div className="absolute inset-0 pattern-clouds-light opacity-40" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center text-center md:text-left relative">
          <div className="flex items-center gap-3">
            <img src="/images/logo_128.png" alt="Доверие" className="h-9 w-9" />
            <div>
              <p className="font-display text-2xl text-ivory">Доверие</p>
              <p className="text-sm mt-1">Государственная клиника · Хэйхэ, Китай</p>
            </div>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Клиника «Доверие». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}