import React from 'react';
import { PropertyCard } from './PropertyCard';
import { SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ALL_PROPERTIES } from '../data/sampleProperties';

interface ListingPageProps {
  title: string;
  filterType: 'Buy' | 'Rent' | 'Land' | 'Commercial' | 'Projects';
}

export const ListingPage: React.FC<ListingPageProps> = ({ title, filterType }) => {
  const filteredProperties = ALL_PROPERTIES.filter(p => {
    if (filterType === 'Rent') return p.price.includes('Month');
    if (filterType === 'Buy') return !p.price.includes('Month');
    if (filterType === 'Land') return p.type === 'Land';
    if (filterType === 'Commercial') return p.type === 'Commercial';
    if (filterType === 'Projects') return true; // Show all for demo
    return true;
  });

  return (
    <div className="min-h-screen pt-12 pb-24 bg-zinc-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-zinc-900 mb-2">{title}</h1>
                    <p className="text-zinc-500 text-lg">Showing {filteredProperties.length} verified properties in Dhaka</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 rounded-lg text-zinc-700 font-medium hover:bg-zinc-50 transition-colors shadow-sm hover:shadow-md">
                    <SlidersHorizontal size={18} />
                    <span>Filter Results</span>
                </button>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((prop, idx) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <PropertyCard property={prop} />
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full flex flex-col items-center justify-center py-24 text-zinc-500">
                        <p className="text-xl">No properties found in this category.</p>
                        <button className="mt-4 text-blue-600 font-semibold hover:underline">Clear filters</button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};