import octavosData from './octavos.json';
import cuartosData from './cuartos.json';
import semisData from './semis.json';
import finalData from './final.json';
import tercerData from './tercero.json';

import { formatPlayoffResult } from '../../utils';

export default {
  octavos: formatPlayoffResult(octavosData.data),
  cuartos: formatPlayoffResult(cuartosData.data),
  semis: formatPlayoffResult(semisData.data),
  final: formatPlayoffResult(finalData.data),
  tercero: formatPlayoffResult(tercerData.data),
}
