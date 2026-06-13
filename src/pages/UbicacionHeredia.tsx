import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionHeredia() {
  return <UbicacionTemplate province={getProvince('heredia')} />
}

