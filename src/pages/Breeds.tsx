import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BreedCard } from '@/components/BreedCard';
import { SEO } from '@/lib/seo';
import breedsData from '@/data/breeds.json';
import { Breed } from '@/types';

const Breeds: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('All');

  const filteredBreeds = (breedsData as Breed[]).filter(breed => {
    const matchesSearch = breed.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || breed.type === filter;
    return matchesSearch && matchesFilter;
  });

  const types = ['All', 'Performance', 'Rare', 'Draft', 'Pony'];

  return (
    <div className="bg-paper min-h-screen py-24">
      <SEO 
        title="Horse Breed Directory" 
        description="Explore our comprehensive directory of global horse breeds, including Marwari, Akhal-Teke, and Arabian horses."
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
            Global Knowledge Base
          </span>
          <h1 className="font-serif text-6xl font-light text-ink">Breed Directory</h1>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <Input 
              placeholder="Search breeds..." 
              className="border-ink/10 bg-white pl-10 focus-visible:ring-ink"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={filter === type ? 'default' : 'outline'}
                className={filter === type ? 'bg-ink text-paper' : 'border-ink/10 text-ink hover:bg-ink/5'}
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>

        {filteredBreeds.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-ink/40 font-serif italic">No breeds found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Breeds;
