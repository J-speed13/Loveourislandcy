import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Idea: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 py-32 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d37628]/10 rounded-none blur-[120px] -mr-48 -mt-48"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-[#d37628] font-black uppercase tracking-[0.3em] text-xs mb-10 block">
          {t.idea.title}
        </span>
        
        <div className="text-xl sm:text-2xl font-bold text-slate-300 leading-relaxed max-w-3xl">
          <p className="mb-6">{t.idea.shame} {t.idea.fines} {t.idea.identity}</p>
          <p className="mb-6 text-white text-3xl font-black">{t.idea.p1}</p>
          <p className="opacity-70 text-lg font-medium">{t.idea.p2}</p>
        </div>
      </div>
    </section>
  );
};