import keysConfig from './key_config.json';


export function parseInput(chordpro, parser) {
  return parser.parse(chordpro);
}

export function formatSong(song, formatter) {
  return formatter.format(song);
}

export function renderChordpro(chordpro, parser, formatter) {    
  const song = parseInput(chordpro, parser);
  return formatSong(song, formatter);
}

export function renderChordproFromSong(song, formatter) {    
  return formatSong(song, formatter);
}

export function getAvaliableCaposFromKey(songKey: any) {
  let capos =  Object.keys(keysConfig['capos'][`${songKey}`]).map(capo => {
    return {
      position: capo,
      key: keysConfig['capos'][`${songKey}`][`${capo}`],
      label: `${capo} (Key of ${keysConfig['capos'][`${songKey}`][`${capo}`]})`
    }
  });
  capos.unshift({
    position: null,
    key: null,
    label: "None"
  }
  );
  return capos;
}

export function getKeys(major: boolean) {
  const scale = major ? 'majorKeys' : 'minorKeys';
  return keysConfig[`${scale}`].map(keyName => {
    return {
      name: keyName
    }
  })
}