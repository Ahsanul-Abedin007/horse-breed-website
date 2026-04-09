import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Horse } from '@/types';
import { motion } from 'motion/react';

interface HorseCardProps {
  horse: Horse;
}

export const HorseCard: React.FC<HorseCardProps> = ({ horse }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/horses/${horse.slug}`}>
        <Card className="overflow-hidden border-ink/10 bg-white shadow-none transition-shadow hover:shadow-xl">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={horse.image}
              alt={horse.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <Badge className="absolute top-4 right-4 bg-ink text-paper">
              {horse.status}
            </Badge>
          </div>
          <CardContent className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                {horse.breed}
              </span>
              <span className="font-serif text-lg font-bold text-ink">
                {horse.currency} {horse.price.toLocaleString()}
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl font-medium text-ink">{horse.name}</h3>
            <div className="grid grid-cols-3 gap-4 border-t border-ink/5 pt-4">
              <div className="flex flex-col items-center gap-1">
                <Calendar className="h-3 w-3 text-ink/40" />
                <span className="text-[10px] font-medium text-ink/60">{horse.age} Years</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-ink/5">
                <Ruler className="h-3 w-3 text-ink/40" />
                <span className="text-[10px] font-medium text-ink/60">{horse.height}</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <MapPin className="h-3 w-3 text-ink/40" />
                <span className="truncate text-[10px] font-medium text-ink/60">{horse.location.split(',')[0]}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
