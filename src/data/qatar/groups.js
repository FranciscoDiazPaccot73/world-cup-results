import groupAInfo from './grupoA.json';
import groupBInfo from './grupoB.json';
import groupCInfo from './grupoC.json';
import groupDInfo from './grupoD.json';
import groupEInfo from './grupoE.json';
import groupFInfo from './grupoF.json';
import groupGInfo from './grupoG.json';
import groupHInfo from './grupoH.json';

import { formatGamesResult } from '../../utils';

export const games = () => {
  const groupA = formatGamesResult(groupAInfo.data, 'A')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupB = formatGamesResult(groupBInfo.data, 'B')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupC = formatGamesResult(groupCInfo.data, 'C')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupD = formatGamesResult(groupDInfo.data, 'D')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupE = formatGamesResult(groupEInfo.data, 'E')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupF = formatGamesResult(groupFInfo.data, 'F')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupG = formatGamesResult(groupGInfo.data, 'G')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  const groupH = formatGamesResult(groupHInfo.data, 'H')?.sort((a,b) => new Date(a.date) - new Date(b.date));
  
  const results = 
  [...groupA, ...groupB, ...groupC, ...groupD, ...groupE, ...groupF, ...groupG, ...groupH].sort((a,b) => new Date(a.date) - new Date(b.date));
  
  return results;
}
