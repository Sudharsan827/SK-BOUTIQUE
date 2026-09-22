import { useEffect, useState } from 'react';
import type { NormalizedRecord } from '../types/data';
import { loadAllData } from '../data/loadData';

export function useBusinessData() {
  const [data,setData]=useState<NormalizedRecord[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');
  useEffect(()=>{ loadAllData().then(setData).catch(e=>setError(e instanceof Error?e.message:'Data loading failed')).finally(()=>setLoading(false)); },[]);
  return {data,loading,error};
}
