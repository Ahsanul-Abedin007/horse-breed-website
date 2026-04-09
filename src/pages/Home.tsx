import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HorseCard } from '@/components/HorseCard';
import { BreedCard } from '@/components/BreedCard';
import { SEO } from '@/lib/seo';
import breedsData from '@/data/breeds.json';
import horsesData from '@/data/horses.json';
import { Breed, Horse } from '@/types';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const featuredBreeds = (breedsData as Breed[]).slice(0, 3);
  const featuredHorses = (horsesData as Horse[]).slice(0, 3);

  return (
    <div className="flex flex-col">
      <SEO 
        title="Elite Equine Digital Platform" 
        description="Discover rare horse breeds, track 4-generation pedigrees, and browse our exclusive marketplace for stallions and mares."
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534073737927-85f1ebff1f5d?auto=format&fit=crop&q=80&w=2000"
            alt="Majestic Arabian Horse"
            className="h-full w-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/80" />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.4em] text-paper/60">
              Established 2025 • Global Equine Network
            </span>
            <h1 className="mb-8 font-serif text-6xl font-light leading-tight text-paper md:text-8xl">
              Preserving <br />
              <span className="italic">Legacy</span>, Defining <br />
              Excellence.
            </h1>
            <p className="mb-10 max-w-xl text-lg text-paper/70">
              The world's most sophisticated platform for horse breeders, investors, and enthusiasts. 
              Explore the directory, verify pedigrees, and secure your next champion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-paper text-ink hover:bg-paper/90">
                <Link to="/marketplace">Explore Marketplace</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-paper text-paper hover:bg-paper hover:text-ink">
                <Link to="/breeds">Breed Directory</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-8 bottom-24 hidden lg:block">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-paper/30 vertical-rl rotate-180">
            SCROLL TO EXPLORE THE LEGACY
          </span>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper">
                <Globe className="h-6 w-6 text-ink" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink">Global Directory</h3>
              <p className="text-sm leading-relaxed text-ink/60">
                Access comprehensive data on over 100 horse breeds, from the rare Akhal-Teke to the legendary Marwari.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper">
                <ShieldCheck className="h-6 w-6 text-ink" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink">Verified Pedigree</h3>
              <p className="text-sm leading-relaxed text-ink/60">
                Our interactive 4-generation lineage system ensures transparency and heritage verification for every listing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper">
                <TrendingUp className="h-6 w-6 text-ink" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink">Market Insights</h3>
              <p className="text-sm leading-relaxed text-ink/60">
                Real-time valuation data and regional price tiers to help you make informed investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Breeds */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
                Curated Selection
              </span>
              <h2 className="font-serif text-5xl font-light text-ink">Featured Breeds</h2>
            </div>
            <Link to="/breeds" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
              View All Breeds <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Marketplace */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
                Elite Listings
              </span>
              <h2 className="font-serif text-5xl font-light text-ink">Marketplace Arrivals</h2>
            </div>
            <Link to="/marketplace" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
              Browse Marketplace <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredHorses.map((horse) => (
              <HorseCard key={horse.id} horse={horse} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 font-serif text-5xl font-light text-ink">Ready to find your next champion?</h2>
          <p className="mb-12 text-lg text-ink/60">
            Join our exclusive network of breeders and buyers. List your horses or browse verified elite pedigrees today.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-ink text-paper hover:bg-ink/90">
              Create Account
            </Button>
            <Button variant="outline" size="lg" className="border-ink text-ink hover:bg-ink hover:text-paper">
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
