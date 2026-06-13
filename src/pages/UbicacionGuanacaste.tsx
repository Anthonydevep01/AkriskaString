import UbicacionTemplate from '@/pages/ubicaciones/UbicacionTemplate'
import { getProvince } from '@/pages/ubicaciones/getProvince'

export default function UbicacionGuanacaste() {
  return <UbicacionTemplate province={getProvince('guanacaste')} />
}

