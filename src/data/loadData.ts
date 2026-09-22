import { normalizeSarees, normalizePrePleated, normalizeMehendi } from '../utils/csv';
import type { NormalizedRecord } from '../types/data';

async function load(path: string) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Could not load ${path}`);
  return res.text();
}
export async function loadAllData(): Promise<NormalizedRecord[]> {
  const [sarees, pre, mehendi] = await Promise.all([
    load('/data/saree_sales_2026_synthetic.csv'),
    load('/data/pre_pleated_sarees_2026.csv'),
    load('/data/mehendi_services_2026.csv')
  ]);
  return [...normalizeSarees(sarees), ...normalizePrePleated(pre), ...normalizeMehendi(mehendi)];
}
