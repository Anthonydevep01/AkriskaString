import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionSanJose() {
  return <UbicacionTemplate province={getProvince('san-jose')} />
}

