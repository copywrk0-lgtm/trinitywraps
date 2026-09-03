import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {const base='https://trinitywraps.vercel.app'; return ['', '/services','/work','/about','/contact'].map(p=>({url:base+p,lastModified:new Date(),changeFrequency:'monthly',priority:p===''?1:0.8}))}
