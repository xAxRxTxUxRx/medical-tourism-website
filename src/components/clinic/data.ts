// Все фото и видео берутся из папки проекта: public/media/
// Положи свои файлы в эту папку с такими же именами — они появятся на сайте.
// FALLBACK_* используются автоматически, пока ты не загрузил свои файлы.
const FALLBACK = {
  lobby: 'https://cdn.poehali.dev/projects/3ff9815d-6a53-4b2e-baa5-723a5e088a80/files/d422d50a-17ba-49cb-98c9-18c6e0d06574.jpg',
  room: 'https://cdn.poehali.dev/projects/3ff9815d-6a53-4b2e-baa5-723a5e088a80/files/2793e945-e4be-487d-987e-dc88dd52e738.jpg',
  doctor: 'https://cdn.poehali.dev/projects/3ff9815d-6a53-4b2e-baa5-723a5e088a80/files/ad9b4019-0a11-4fa2-8883-c9d73afefba5.jpg',
};

export const IMAGES = {
  lobby: '/media/lobby.jpg',
  room: '/media/room.jpg',
  doctor: '/media/doctor.jpg',
};

// Запасные адреса на случай, если файла ещё нет в папке public/media
export const IMAGE_FALLBACK: Record<string, string> = {
  '/media/lobby.jpg': FALLBACK.lobby,
  '/media/room.jpg': FALLBACK.room,
  '/media/doctor.jpg': FALLBACK.doctor,
};

// Видео для главной страницы: положи файл в public/media/hero.mp4
// Если файла нет — на главной автоматически покажется фото клиники.
export const HERO_VIDEO = '/media/hero.mp4';

export const ADVANTAGES = [
  { icon: 'Landmark', title: 'Государственная клиника', text: 'Официальный статус и гарантии качества от государства Китая' },
  { icon: 'MapPin', title: '700 метров от границы', text: 'Сразу за пунктом пропуска напротив Благовещенска' },
  { icon: 'Sparkles', title: 'Новый центр 2026 года', text: 'Свежее открытие, более 3000 м² медицинских площадей' },
  { icon: 'Stethoscope', title: '25+ стоматологов', text: 'Опытные врачи с практикой работы с пациентами из России' },
  { icon: 'Cpu', title: 'Европейское оборудование', text: 'Современная техника ведущих мировых производителей' },
  { icon: 'Languages', title: 'Бесплатный переводчик', text: 'Сопровождение на русском языке на всех этапах' },
  { icon: 'BadgeRussianRuble', title: 'Оплата в рублях', text: 'Удобный расчёт без конвертаций и переплат' },
  { icon: 'ShieldCheck', title: 'Гарантия на лечение', text: 'Официальное гарантийное обслуживание ваших работ' },
];

export const SERVICE_GROUPS = [
  {
    icon: 'Smile',
    title: 'Стоматология',
    items: ['Имплантация', 'Протезирование', 'Ортодонтия', 'Пародонтология', 'Эндодонтия', 'Хирургия', 'Детская стоматология', 'Эстетическая реставрация', 'Лечение кариеса', 'Профессиональная чистка'],
  },
  {
    icon: 'Flower2',
    title: 'Косметология',
    items: ['Омоложение лица', 'Ботокс', 'Гиалуроновая кислота', 'Ринопластика', 'Коррекция век', 'Контурная пластика', 'Перманентный макияж'],
  },
  {
    icon: 'HeartPulse',
    title: 'Общая медицина',
    items: ['Анализы крови', 'Диагностика', 'ЭКГ', 'УЗИ', 'Чек-апы здоровья'],
  },
  {
    icon: 'Leaf',
    title: 'Китайская медицина',
    items: ['Пульсовая диагностика', 'Фитотерапия', 'Традиционные практики'],
  },
];

export const PRICES = [
  { name: 'Металлокерамическая коронка', china: 2600, russia: 6500 },
  { name: 'Коронка из циркония', china: 8800, russia: 22000 },
  { name: 'Виниры', china: 10000, russia: 28000 },
  { name: 'Имплант «под ключ»', china: 28000, russia: 65000 },
  { name: 'Профессиональная чистка', china: 2200, russia: 6000 },
  { name: 'Лечение кариеса', china: 1800, russia: 5500 },
];

export const IMPLANT_STEPS = [
  { icon: 'ScanLine', title: 'Консультация и КТ', text: 'Осмотр и компьютерная томография челюсти' },
  { icon: 'ClipboardList', title: 'Планирование', text: 'Индивидуальный план лечения и расчёт' },
  { icon: 'Drill', title: 'Установка импланта', text: 'Малоинвазивная имплантация под анестезией' },
  { icon: 'Hourglass', title: 'Период заживления', text: 'Остеоинтеграция импланта в кости' },
  { icon: 'Layers', title: 'Изготовление коронки', text: 'Точная коронка в собственной лаборатории' },
  { icon: 'CheckCircle2', title: 'Финальная установка', text: 'Готовая реставрация и красивая улыбка' },
];

export const JOURNEY = [
  { icon: 'MessageCircle', title: 'Консультация', text: 'Бесплатная онлайн-консультация и план' },
  { icon: 'Calculator', title: 'Расчёт стоимости', text: 'Прозрачная смета лечения в рублях' },
  { icon: 'Luggage', title: 'Подготовка поездки', text: 'Бронируем отель и помогаем с документами' },
  { icon: 'PlaneLanding', title: 'Приезд и заселение', text: 'Трансфер, сопровождение на границе' },
  { icon: 'Activity', title: 'Лечение', text: 'Комфортное лечение с переводчиком' },
  { icon: 'Home', title: 'Возвращение домой', text: 'Гарантия и поддержка после приезда' },
];

export const DOCTORS = [
  { name: 'Доктор Ван Вэй', role: 'Главный врач, имплантолог', exp: '20 лет опыта' },
  { name: 'Вэй Хунфэй', role: 'Ортопед-стоматолог', exp: '15 лет опыта' },
  { name: 'Чжао Дун', role: 'Хирург-имплантолог', exp: '14 лет опыта' },
  { name: 'Лю Лян', role: 'Ортодонт', exp: '12 лет опыта' },
  { name: 'Ван Лянь', role: 'Эстетическая стоматология', exp: '11 лет опыта' },
];

export const REVIEWS = [
  { name: 'Ольга, Благовещенск', text: 'Поставила импланты в два раза дешевле, чем в России. Переводчик сопровождал везде, всё было понятно и комфортно.', rating: 5 },
  { name: 'Сергей, Хабаровск', text: 'Сделал коронки из циркония. Качество европейское, цены приятно удивили. Помогли с отелем и переходом границы.', rating: 5 },
  { name: 'Марина, Чита', text: 'Профессиональная команда, новая чистая клиника. Косметологию тоже здесь делала — результатом очень довольна.', rating: 5 },
];

export const MESSENGERS = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (914) 000-00-00', href: 'tel:+79140000000' },
  { icon: 'MessageCircle', label: 'WhatsApp', value: 'Написать в WhatsApp', href: '#' },
  { icon: 'Send', label: 'Telegram', value: 'Написать в Telegram', href: '#' },
  { icon: 'MessageSquare', label: 'WeChat', value: 'doverie_clinic', href: '#' },
  { icon: 'Mail', label: 'Email', value: 'info@doverie-clinic.ru', href: 'mailto:info@doverie-clinic.ru' },
];