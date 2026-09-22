export type DatasetKind = 'Sarees' | 'Pre-Pleated' | 'Mehendi';

export interface NormalizedRecord {
  id: string;
  date: string;
  month: string;
  quarter: string;
  region: string;
  city: string;
  product: string;
  category: string;
  occasion: string;
  channel: string;
  unitPrice: number;
  discount: number;
  quantity: number;
  revenue: number;
  rating: number;
  dataset: DatasetKind;
  fabric?: string;
  sareeType?: string;
}

export interface CollectionItem {
  name: string;
  category: string;
  occasion: string;
  averagePrice: number;
  averageRating: number;
  revenue: number;
  quantity: number;
  dataset: DatasetKind;
}
