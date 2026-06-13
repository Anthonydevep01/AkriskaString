import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionAlajuela() {
  return <UbicacionTemplate province={getProvince('alajuela')} />
}

