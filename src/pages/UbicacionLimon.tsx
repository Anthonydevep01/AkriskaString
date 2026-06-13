import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionLimon() {
  return <UbicacionTemplate province={getProvince('limon')} />
}

