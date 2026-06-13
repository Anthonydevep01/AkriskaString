import { provinces, type LocationProvince } from '@/content/ubicaciones'

export function getProvince(slug: string): LocationProvince {
  const p = provinces.find((x) => x.slug === slug)
  if (!p) throw new Error(`Unknown province slug: ${slug}`)
  return p
}

