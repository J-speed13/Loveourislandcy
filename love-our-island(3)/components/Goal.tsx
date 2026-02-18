import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Droplets, Coffee, Package, Store, Monitor, Map } from 'lucide-react';

export const Goal: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Droplets className="w-6 h-6" />;
      case 1: return <Coffee className="w-6 h-6" />;
      case 2: return <Package className="w-6 h-6" />;
      case 3: return <Store className="w-6 h-6" />;
      case 4: return <Monitor className="w-6 h-6" />;
      case 5: return <Map className="w-6 h-6" />;
      default: return <Droplets className="w-6 h-6" />;
    }
  };

  return (
    <section className="bg-[#fdfbf7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter mb-6 uppercase">
            {t.goal.title}
          </h2>
          <p className="max-w-2xl mx-auto text-3xl text-slate-900 font-black uppercase italic">
            To see this symbol on
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200">
          {t.goal.items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border-r border-b border-slate-200 flex flex-col items-center text-center gap-6 group hover:bg-slate-50 transition-colors last:border-r-0 lg:[&:nth-child(3n)]:border-r-0">
              <div className="text-[#2d3a1a] opacity-50 group-hover:opacity-100 transition-opacity">
                {getIcon(idx)}
              </div>
              <span className="text-xl font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-xl mx-auto text-center border-l-4 border-[#d37628] pl-8 text-left">
          <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            Zero cost to companies.<br />
            Shared responsibility.<br />
            Cultural upside.
          </p>
        </div>
      </div>
    </section>
  );
};