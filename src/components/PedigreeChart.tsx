import React from 'react';
import { Pedigree } from '@/types';

interface PedigreeChartProps {
  pedigree: Pedigree;
  horseName: string;
}

export const PedigreeChart: React.FC<PedigreeChartProps> = ({ pedigree, horseName }) => {
  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-4 gap-4">
          {/* Generation 1 */}
          <div className="flex flex-col justify-center">
            <div className="flex h-24 items-center justify-center border border-ink bg-ink p-4 text-center text-paper">
              <span className="font-serif text-xl font-medium">{horseName}</span>
            </div>
          </div>

          {/* Generation 2 */}
          <div className="flex flex-col justify-around gap-4">
            <div className="flex h-32 flex-col items-center justify-center border border-ink/20 bg-white p-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Sire</span>
              <span className="font-serif text-lg font-medium text-ink">{pedigree.father}</span>
            </div>
            <div className="flex h-32 flex-col items-center justify-center border border-ink/20 bg-white p-4 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Dam</span>
              <span className="font-serif text-lg font-medium text-ink">{pedigree.mother}</span>
            </div>
          </div>

          {/* Generation 3 */}
          <div className="flex flex-col justify-around gap-4">
            <div className="flex h-20 flex-col items-center justify-center border border-ink/10 bg-white/50 p-2 text-center">
              <span className="text-[8px] font-bold uppercase tracking-widest text-ink/40">Sire of Sire</span>
              <span className="font-serif text-sm font-medium text-ink">{pedigree.paternalGrandfather}</span>
            </div>
            <div className="flex h-20 flex-col items-center justify-center border border-ink/10 bg-white/50 p-2 text-center">
              <span className="text-[8px] font-bold uppercase tracking-widest text-ink/40">Dam of Sire</span>
              <span className="font-serif text-sm font-medium text-ink">{pedigree.paternalGrandmother}</span>
            </div>
            <div className="flex h-20 flex-col items-center justify-center border border-ink/10 bg-white/50 p-2 text-center">
              <span className="text-[8px] font-bold uppercase tracking-widest text-ink/40">Sire of Dam</span>
              <span className="font-serif text-sm font-medium text-ink">{pedigree.maternalGrandfather}</span>
            </div>
            <div className="flex h-20 flex-col items-center justify-center border border-ink/10 bg-white/50 p-2 text-center">
              <span className="text-[8px] font-bold uppercase tracking-widest text-ink/40">Dam of Dam</span>
              <span className="font-serif text-sm font-medium text-ink">{pedigree.maternalGrandmother}</span>
            </div>
          </div>

          {/* Generation 4 (Labels only for structure) */}
          <div className="flex flex-col justify-around gap-2 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex h-10 items-center justify-center border border-dashed border-ink/20 p-1 text-center">
                <span className="text-[8px] font-medium">Lineage {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
