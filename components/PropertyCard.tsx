import React from 'react';
import { Property } from '../types';
import { MapPin, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';

export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-40" />
        <div className="absolute bottom-4 left-4">
          <span className="text-xs font-bold uppercase tracking-wider text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-1.5 text-zinc-500 text-sm font-medium">
          <MapPin size={16} className="text-blue-500" />
          {property.location}
        </div>
        <h3 className="mb-4 text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {property.title}
        </h3>
        
        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-5 text-zinc-600">
            {property.beds && (
              <span className="flex items-center gap-1.5 font-medium">
                <Bed size={18} className="text-zinc-400" /> {property.beds}
              </span>
            )}
            {property.baths && (
              <span className="flex items-center gap-1.5 font-medium">
                <Bath size={18} className="text-zinc-400" /> {property.baths}
              </span>
            )}
            <span className="font-mono text-sm font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">{property.sqft} sqft</span>
          </div>
        </div>
        <div className="mt-4">
            <span className="block text-xl font-extrabold text-blue-600">{property.price}</span>
        </div>
      </div>
    </motion.div>
  );
};