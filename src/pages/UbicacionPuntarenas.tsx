import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionPuntarenas() {
  return <UbicacionTemplate province={getProvince('puntarenas')} />
}

