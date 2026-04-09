import React from 'react';
import { Search, SlidersHorizontal, MapPin, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HorseCard } from '@/components/HorseCard';
import { SEO } from '@/lib/seo';
import horsesData from '@/data/horses.json';
import { Horse } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Marketplace: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [breedFilter, setBreedFilter] = React.useState('All');
  const [priceSort, setPriceSort] = React.useState('none');

  const filteredHorses = (horsesData as Horse[]).filter(horse => {
    const matchesSearch = horse.name.toLowerCase().includes(search.toLowerCase()) || 
                         horse.location.toLowerCase().includes(search.toLowerCase());
    const matchesBreed = breedFilter === 'All' || horse.breed === breedFilter;
    return matchesSearch && matchesBreed;
  }).sort((a, b) => {
    if (priceSort === 'low-high') return a.price - b.price;
    if (priceSort === 'high-low') return b.price - a.price;
    return 0;
  });

  const breeds = ['All', 'Marwari', 'Akhal-Teke', 'Arabian', 'Thoroughbred'];

  return (
    <div className="bg-paper min-h-screen py-24">
      <SEO 
        title="Horse Marketplace | Buy & Sell Elite Horses" 
        description="Browse our exclusive marketplace for stallions, mares, and geldings. Verified pedigrees and global listings."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
              Elite Listings
            </span>
            <h1 className="font-serif text-6xl font-light text-ink">Marketplace</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Total Listings</p>
              <p className="font-serif text-2xl text-ink">{filteredHorses.length} Horses</p>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <Input 
              placeholder="Search by name, location..." 
              className="border-ink/10 bg-white pl-10 focus-visible:ring-ink"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select onValueChange={setBreedFilter} defaultValue="All">
            <SelectTrigger className="border-ink/10 bg-white focus:ring-ink">
              <SelectValue placeholder="Breed" />
            </SelectTrigger>
            <SelectContent>
              {breeds.map(b => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setPriceSort} defaultValue="none">
            <SelectTrigger className="border-ink/10 bg-white focus:ring-ink">
              <SelectValue placeholder="Sort by Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Featured</SelectItem>
              <SelectItem value="low-high">Price: Low to High</SelectItem>
              <SelectItem value="high-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHorses.map((horse) => (
            <HorseCard key={horse.id} horse={horse} />
          ))}
        </div>

        {filteredHorses.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-ink/40 font-serif italic">No horses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
