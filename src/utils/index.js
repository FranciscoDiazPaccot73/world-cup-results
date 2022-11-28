const formatStringType = ({ label, value }) => {
  return {
    [label.toLowerCase()]: value,
  }
}

const elems = {
  0: 'name',
  1: 'pj',
  2: 'gep',
  3: 'goals'
}

const formatGames = ({ gep, goals }) => {
  const [win, emp, lost] = gep.split('/')
  const [gf, gc] = goals.split('/')
  
  return { win, emp, lost, gf, gc }
}

const sortByPoints = (array) => {
  const points = array.sort((a,b) => {
    if (a.points === b.points) {
      return b.dg - a.dg
    }
    return b.points - a.points
  })
  
  return points;
}

const formatArrayType = (array) => {
  const zoneArray = []
  array.forEach(el => {
    let result = {}
    if (el.type === 'double-string') {
      let elemResult = {}
      el.value?.forEach(({ value }, index) => {
        elemResult = { 
          ...elemResult,
          [`${elems[index]}`]: value }
      })

      const { win, emp, lost, gf, gc } = formatGames(elemResult)
      const dg = gf - gc;
      const points = win * 3 + emp * 1;
      result = {
        ...result,
        name: elemResult.name,
        pj: elemResult.pj,
        win, emp, lost, gf, gc, dg, points
      }
      zoneArray.push(result)
    }
  })

  return sortByPoints(zoneArray);
}

export const formatResult = (data) => {
  const items = []
  data.forEach(res => {
    let result = { id: res.id };
    res.components?.forEach(({ type, child, ...others }) => {
      if (type === 'string') {
        const stringResult = formatStringType(others);
        result = { ...result, ...stringResult }
      }
      if (type === 'array') {
        const arrayResult = formatArrayType(child)
        result = { ...result, teams: arrayResult }
      }
    });
    items.push(result)
  });

  return items;
}

export const formatPlayoffResult = (data) => {
  const items = []
  data.forEach(res => {
    let result = { id: res.id };
    const keys = {
      1: 'result',
      2: 'teamA',
      3: 'teamB'
    }
    res.components?.forEach(({ type, child, ...others }, index) => {
      if (type === 'string') {
        const stringResult = formatStringType({ value: others.value, label: keys[index] });
        result = { ...result, ...stringResult }
      }
    });
    items.push(result)
  });

  return items;
}

export const formatGamesResult = (data, group) => {
  const items = []
  data.forEach(res => {
    let result = { id: res.id, group };
    const keys = {
      1: 'date',
      2: 'result',
      3: 'teamA',
      4: 'teamB'
    }
    res.components?.forEach(({ type, child, ...others }, index) => {
      if (type === 'string') {
        const stringResult = formatStringType({ value: others.value, label: keys[index] });
        result = { ...result, ...stringResult }
      }
    });
    items.push(result)
  });

  return items;
}

export const formatImageTitle = (name) => name.replaceAll(' ', '').toLowerCase()

export const getCountdown = () => {
  function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + " hs, " + minutes + " min, " + seconds + ' sec';
}
  
  const date1 = new Date().getTime();
  const date2 = new Date('06/09/2026').getTime();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `${diffDays} days, ${msToTime(diffTime)}`
}
