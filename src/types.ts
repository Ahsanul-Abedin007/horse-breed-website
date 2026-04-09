export interface Breed {
  id: string;
  slug: string;
  name: string;
  origin: string;
  type: string;
  temperament: string;
  height: string;
  description: string;
  traits: string[];
  useCases: string[];
  image: string;
  history: string;
}

export interface Pedigree {
  father: string;
  mother: string;
  paternalGrandfather: string;
  paternalGrandmother: string;
  maternalGrandfather: string;
  maternalGrandmother: string;
}

export interface Horse {
  id: string;
  slug: string;
  name: string;
  breed: string;
  age: number;
  gender: 'Stallion' | 'Mare' | 'Gelding';
  height: string;
  price: number;
  currency: string;
  location: string;
  status: 'Available' | 'Sold' | 'Reserved';
  image: string;
  description: string;
  pedigree: Pedigree;
  performance: string;
  health: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  image: string;
}
