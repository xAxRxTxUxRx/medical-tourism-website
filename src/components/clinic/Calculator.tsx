import { useMemo, useState } from 'react';
import Icon from '@/components/ui/icon';
import { PRICES } from './data';

export default function Calculator() {
  const [qty, setQty] = useState<Record<string, number>>({});

  const set = (name: string, delta: number) =>
    setQty((q) => ({ ...q, [name]: Math.max(0, (q[name] || 0) + delta) }));

  const total = useMemo(
    () => PRICES.reduce((sum, o) => sum + o.price * (qty[o.name] || 0), 0),
    [qty],
  );
  const count = useMemo(
    () => Object.values(qty).reduce((a, b) => a + b, 0),
    [qty],
  );

  const fmt = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 space-y-3 max-h-[560px] overflow-y-auto pr-1">
        {PRICES.map((o) => (
          <div key={o.name} className="glass-card rounded-2xl p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-jade truncate">{o.name}</p>
              <p className="text-sm text-muted-foreground">от {fmt(o.price)}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => set(o.name, -1)} className="w-9 h-9 rounded-full border border-gold/40 text-jade hover:bg-gold/10 transition flex items-center justify-center">
                <Icon name="Minus" size={16} />
              </button>
              <span className="w-6 text-center font-semibold">{qty[o.name] || 0}</span>
              <button onClick={() => set(o.name, 1)} className="w-9 h-9 rounded-full bg-jade text-ivory hover:opacity-90 transition flex items-center justify-center">
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-2">
        <div className="gradient-jade rounded-3xl p-8 text-ivory sticky top-24 overflow-hidden relative">
          <div className="absolute inset-0 pattern-clouds-light opacity-60 pointer-events-none" />
          <div className="relative">
            <p className="font-display text-2xl mb-6">Ваш расчёт</p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-ivory/15 pb-3">
                <span className="opacity-80">Выбрано услуг</span>
                <span className="text-lg font-semibold">{count}</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-gold/20 border border-gold/40 p-5 text-center">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-1">Примерная стоимость</p>
              <p className="font-display text-4xl text-gold">{fmt(total)}</p>
            </div>
            <p className="text-xs opacity-70 mt-4 text-center">Итоговая стоимость определяется после осмотра и КТ. Оплата в рублях.</p>
            <a href="#zayavka" className="mt-6 block text-center bg-ivory text-jade rounded-full py-3 font-semibold hover:bg-cream transition">
              Записаться на лечение
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
