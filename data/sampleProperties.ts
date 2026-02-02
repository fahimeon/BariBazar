import { Property } from '../types';

export const ALL_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment in Gulshan 2",
    location: "Road 76, Gulshan 2, Dhaka",
    price: "4.5 Crore BDT",
    type: "Flat",
    beds: 3,
    baths: 4,
    sqft: 2450,
    imageUrl: "https://picsum.photos/800/600?random=1",
  },
  {
    id: 2,
    title: "Modern Studio in Banani",
    location: "Block E, Banani, Dhaka",
    price: "85 Lac BDT",
    type: "Flat",
    beds: 1,
    baths: 1,
    sqft: 850,
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Ready Plot in Bashundhara",
    location: "Block I, Bashundhara R/A",
    price: "1.2 Crore BDT / Katha",
    type: "Land",
    sqft: 2160,
    imageUrl: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Commercial Space Mirpur 12",
    location: "Main Road, Mirpur DOHS",
    price: "45,000 BDT/Month",
    type: "Commercial",
    sqft: 1200,
    imageUrl: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "Duplex in Uttara Sector 4",
    location: "Sector 4, Uttara, Dhaka",
    price: "2.1 Crore BDT",
    type: "Flat",
    beds: 4,
    baths: 4,
    sqft: 3200,
    imageUrl: "https://picsum.photos/800/600?random=5"
  },
  {
    id: 6,
    title: "Industrial Land Near Purbachal",
    location: "Purbachal Highway",
    price: "5 Crore BDT",
    type: "Land",
    sqft: 10000,
    imageUrl: "https://picsum.photos/800/600?random=6"
  },
  {
    id: 7,
    title: "Office Space in Dhanmondi",
    location: "Dhanmondi 27",
    price: "1.5 Lac BDT/Month",
    type: "Commercial",
    sqft: 2500,
    imageUrl: "https://picsum.photos/800/600?random=7"
  },
  {
    id: 8,
    title: "Lake View Apartment",
    location: "Hatirjheel, Dhaka",
    price: "1.8 Crore BDT",
    type: "Flat",
    beds: 3,
    baths: 3,
    sqft: 1650,
    imageUrl: "https://picsum.photos/800/600?random=8"
  }
];

/** Featured subset for the home page - first 4 with first one marked trending */
export const FEATURED_PROPERTIES: Property[] = ALL_PROPERTIES.slice(0, 4).map((p, i) => ({
  ...p,
  isTrending: i === 0
}));
