import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Ruler, Share2, Heart, ShieldCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PedigreeChart } from '@/components/PedigreeChart';
import { SEO } from '@/lib/seo';
import horsesData from '@/data/horses.json';
import { Horse } from '@/types';

const HorseProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const horse = (horsesData as Horse[]).find(h => h.slug === slug);

  if (!horse) {
    return <div className="py-24 text-center">Horse not found.</div>;
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": horse.name,
    "image": horse.image,
    "description": horse.description,
    "brand": {
      "@type": "Brand",
      "name": horse.breed
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": horse.currency,
      "price": horse.price,
      "availability": horse.status === 'Available' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <div className="bg-paper min-h-screen">
      <SEO 
        title={`${horse.name} - ${horse.breed} ${horse.gender} for Sale`} 
        description={`View details for ${horse.name}, a ${horse.age}-year-old ${horse.breed} ${horse.gender} located in ${horse.location}. Verified pedigree and health info.`}
        ogImage={horse.image}
        ogType="product"
        schema={productSchema}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden border border-ink/10">
              <img
                src={horse.image}
                alt={horse.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square overflow-hidden border border-ink/5 opacity-50 hover:opacity-100 cursor-pointer">
                  <img src={horse.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Badge className="bg-ink text-paper px-4 py-1">{horse.status}</Badge>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="text-ink/40 hover:text-ink">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-ink/40 hover:text-ink">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <h1 className="mb-2 font-serif text-5xl font-light text-ink">{horse.name}</h1>
              <p className="mb-8 text-xl font-serif italic text-ink/60">{horse.breed} {horse.gender}</p>
              
              <div className="mb-8 grid grid-cols-2 gap-8 border-y border-ink/10 py-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Price</span>
                  <p className="font-serif text-3xl font-medium text-ink">{horse.currency} {horse.price.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Location</span>
                  <p className="flex items-center gap-2 font-medium text-ink">
                    <MapPin className="h-4 w-4 text-ink/40" /> {horse.location}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Age</span>
                  <p className="flex items-center gap-2 font-medium text-ink">
                    <Calendar className="h-4 w-4 text-ink/40" /> {horse.age} Years
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Height</span>
                  <p className="flex items-center gap-2 font-medium text-ink">
                    <Ruler className="h-4 w-4 text-ink/40" /> {horse.height}
                  </p>
                </div>
              </div>

              <p className="mb-12 text-lg leading-relaxed text-ink/70">
                {horse.description}
              </p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-ink text-paper hover:bg-ink/90 py-8 text-lg uppercase tracking-widest">
                <Mail className="mr-2 h-5 w-5" /> Inquiry for Purchase
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-ink/40">
                <ShieldCheck className="h-4 w-4" /> Verified Listing • Secure Transaction
              </div>
            </div>
          </div>
        </div>

        {/* Pedigree Section */}
        <section className="mt-24 border-t border-ink/10 pt-24">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
              Heritage Verification
            </span>
            <h2 className="font-serif text-5xl font-light text-ink">4-Generation Pedigree</h2>
          </div>
          <PedigreeChart pedigree={horse.pedigree} horseName={horse.name} />
        </section>

        {/* Performance & Health */}
        <section className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="border border-ink/10 bg-white p-12">
            <h3 className="mb-6 font-serif text-3xl font-medium">Performance History</h3>
            <p className="text-lg leading-relaxed text-ink/60 italic">
              "{horse.performance}"
            </p>
          </div>
          <div className="border border-ink/10 bg-white p-12">
            <h3 className="mb-6 font-serif text-3xl font-medium">Health & Fitness</h3>
            <p className="text-lg leading-relaxed text-ink/60">
              {horse.health}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorseProfile;
