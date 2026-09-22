import Papa from 'papaparse';
import type { NormalizedRecord } from '../types/data';

const monthOrder = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const num = (v: unknown) => Number(v ?? 0) || 0;

function parse<T extends Record<string, string>>(text: string) {
  return Papa.parse<T>(text, { header: true, skipEmptyLines: true }).data;
}

export function normalizeSarees(text: string): NormalizedRecord[] {
  return parse<Record<string,string>>(text).map(r => ({
    id: r.Order_ID, date: r.Order_Date, month: r.Month, quarter: r.Quarter, region: r.Region,
    city: r.City, product: r.Saree_Type, category: r.Fabric, occasion: r.Occasion,
    channel: r.Sales_Channel, unitPrice: num(r.Unit_Price_INR), discount: num(r.Discount_Pct),
    quantity: num(r.Units_Sold), revenue: num(r.Revenue_INR), rating: num(r.Customer_Rating),
    dataset: 'Sarees', fabric: r.Fabric, sareeType: r.Saree_Type
  }));
}
export function normalizePrePleated(text: string): NormalizedRecord[] {
  return parse<Record<string,string>>(text).map(r => ({
    id: r.Order_ID, date: r.Order_Date, month: r.Month, quarter: r.Quarter, region: r.Region,
    city: r.City, product: r.Service_or_Product, category: r.Category, occasion: r.Occasion,
    channel: r.Sales_Channel, unitPrice: num(r.Unit_Price_INR), discount: num(r.Discount_Pct),
    quantity: num(r.Quantity), revenue: num(r.Revenue_INR), rating: num(r.Customer_Rating),
    dataset: 'Pre-Pleated'
  }));
}
export function normalizeMehendi(text: string): NormalizedRecord[] {
  return parse<Record<string,string>>(text).map(r => ({
    id: r.Order_ID, date: r.Order_Date, month: r.Month, quarter: r.Quarter, region: r.Region,
    city: r.City, product: r.Service_or_Product, category: r.Category, occasion: r.Occasion,
    channel: r.Sales_Channel, unitPrice: num(r.Unit_Price_INR), discount: num(r.Discount_Pct),
    quantity: num(r.Quantity), revenue: num(r.Revenue_INR), rating: num(r.Customer_Rating),
    dataset: 'Mehendi'
  }));
}
export { monthOrder };
