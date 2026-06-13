import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionCartago() {
  return <UbicacionTemplate province={getProvince('cartago')} />
}

