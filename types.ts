import React from 'react';

export interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}