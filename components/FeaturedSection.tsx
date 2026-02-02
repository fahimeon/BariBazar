import React from 'react';
import { PropertyCard } from './PropertyCard';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PROPERTIES } from '../data/sampleProperties';

export const FeaturedSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight sm:text-5xl">
              Trending in Dhaka
            </h2>
            <p className="mt-4 text-xl text-zinc-500 max-w-2xl font-normal">
              Handpicked properties verified by our field agents. 
              High appreciation potential and clear documentation.
            </p>
          </div>
          <Button variant="outline" size="lg" icon={<ArrowRight size={18} />}>View All Listings</Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};