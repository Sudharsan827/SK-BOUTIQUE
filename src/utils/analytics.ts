import type { NormalizedRecord } from '../types/data';
import { monthOrder } from './csv';

export const sum = (rows: NormalizedRecord[], key: 'revenue'|'quantity') => rows.reduce((a,r)=>a+r[key],0);
export const avg = (rows: NormalizedRecord[], key: 'revenue'|'rating') => rows.length ? sum(rows,'revenue') / rows.length : 0;
export const avgRating = (rows: NormalizedRecord[]) => rows.length ? rows.reduce((a,r)=>a+r.rating,0)/rows.length : 0;
export const aov = (rows: NormalizedRecord[]) => rows.length ? sum(rows,'revenue')/rows.length : 0;

export function group(rows: NormalizedRecord[], key: keyof NormalizedRecord) {
  const map = new Map<string, {name:string; revenue:number; quantity:number; orders:number; ratingTotal:number}>();
  rows.forEach(r => {
    const name = String(r[key] ?? 'Unknown');
    const x = map.get(name) ?? {name,revenue:0,quantity:0,orders:0,ratingTotal:0};
    x.revenue += r.revenue; x.quantity += r.quantity; x.orders += 1; x.ratingTotal += r.rating; map.set(name,x);
  });
  return [...map.values()].map(x=>({...x, rating:x.orders?x.ratingTotal/x.orders:0})).sort((a,b)=>b.revenue-a.revenue);
}
export function groupByMonth(rows: NormalizedRecord[]) {
  return monthOrder.map(month => ({month, revenue: rows.filter(r=>r.month===month).reduce((a,r)=>a+r.revenue,0)}));
}
export function collectionItems(rows: NormalizedRecord[]) {
  return group(rows,'product').map(x => {
    const itemRows = rows.filter(r=>r.product===x.name);
    return { name:x.name, category:itemRows[0]?.category ?? '', occasion:itemRows[0]?.occasion ?? '', averagePrice:itemRows.reduce((a,r)=>a+r.unitPrice,0)/itemRows.length, averageRating:x.rating, revenue:x.revenue, quantity:x.quantity, dataset:itemRows[0]?.dataset ?? 'Sarees' };
  });
}
