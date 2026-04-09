import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Info, History, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/lib/seo';
import breedsData from '@/data/breeds.json';
import horsesData from '@/data/horses.json';
import { Breed, Horse } from '@/types';
import { HorseCard } from '@/components/HorseCard';

const BreedDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const breed = (breedsData as Breed[]).find(b => b.slug === slug);
  const relatedHorses = (horsesData as Horse[]).filter(h => h.breed === breed?.name);

  if (!breed) {
    return <div className="py-24 text-center">Breed not found.</div>;
  }

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={`${breed.name} Horse Breed Guide`} 
        description={`Learn about the ${breed.name} horse breed: origin, temperament, height, and history. View high-resolution images and available horses.`}
        ogImage={breed.image}
      />

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={breed.image}
          alt={breed.name}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-paper">
            <Link to="/breeds" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-70 hover:opacity-100">
              <ArrowLeft className="h-4 w-4" /> Back to Directory
            </Link>
            <h1 className="font-serif text-7xl font-light tracking-tight">{breed.name}</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <div className="mb-6 flex items-center gap-3">
                <Info className="h-5 w-5 text-ink/40" />
                <h2 className="font-serif text-3xl font-medium">Overview</h2>
              </div>
              <p className="text-lg leading-relaxed text-ink/70">
                {breed.description}
              </p>
            </section>

            <section>
              <div className="mb-6 flex items-center gap-3">
                <History className="h-5 w-5 text-ink/40" />
                <h2 className="font-serif text-3xl font-medium">History & Origin</h2>
              </div>
              <p className="text-lg leading-relaxed text-ink/70">
                {breed.history}
              </p>
            </section>

            <section>
              <div className="mb-6 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-ink/40" />
                <h2 className="font-serif text-3xl font-medium">Use Cases</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {breed.useCases.map(use => (
                  <Badge key={use} variant="outline" className="border-ink/20 px-4 py-2 text-sm text-ink/60">
                    {use}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-8">
            <div className="border border-ink/10 bg-white p-8">
              <h3 className="mb-6 font-serif text-2xl font-medium">Breed Standards</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Origin</span>
                  <p className="font-medium text-ink">{breed.origin}</p>
                </div>
                <div className="h-px bg-ink/5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Type</span>
                  <p className="font-medium text-ink">{breed.type}</p>
                </div>
                <div className="h-px bg-ink/5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Height</span>
                  <p className="font-medium text-ink">{breed.height}</p>
                </div>
                <div className="h-px bg-ink/5" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Temperament</span>
                  <p className="font-medium text-ink">{breed.temperament}</p>
                </div>
              </div>
            </div>

            <div className="border border-ink/10 bg-ink p-8 text-paper">
              <h3 className="mb-4 font-serif text-2xl font-light">Key Traits</h3>
              <ul className="space-y-3">
                {breed.traits.map(trait => (
                  <li key={trait} className="flex items-center gap-2 text-sm opacity-80">
                    <span className="h-1.5 w-1.5 rounded-full bg-paper/40" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Horses */}
        {relatedHorses.length > 0 && (
          <section className="mt-24">
            <div className="mb-12 border-t border-ink/10 pt-12">
              <h2 className="font-serif text-4xl font-light text-ink">Available {breed.name} Horses</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedHorses.map(horse => (
                <HorseCard key={horse.id} horse={horse} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BreedDetail;
