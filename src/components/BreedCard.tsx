import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Breed } from '@/types';
import { motion } from 'motion/react';

interface BreedCardProps {
  breed: Breed;
}

export const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/breeds/${breed.slug}`}>
        <Card className="group relative aspect-[3/4] overflow-hidden border-none bg-ink">
          <img
            src={breed.image}
            alt={breed.name}
            className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-paper">
            <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">
              {breed.origin}
            </span>
            <h3 className="mb-4 font-serif text-4xl font-light tracking-tight">{breed.name}</h3>
            <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-12">
              <p className="text-xs font-medium uppercase tracking-widest">
                Explore Breed Details →
              </p>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
