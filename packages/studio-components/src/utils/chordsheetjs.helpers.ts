import { ChordProParser, HtmlDivFormatter } from "@praisecharts/chordsheetjs";
import keysConfig from './key_config.json';


export function parseChordpro(chordpro) {
  const parser = new ChordProParser();
  return parser.parse(chordpro);
}

export function formatSong(song) {
  const formatter = new HtmlDivFormatter();
  return formatter.format(song);
}

export function renderChordpro(chordpro) {    
  const song = parseChordpro(chordpro);
  return formatSong(song);
}

export function renderChordproFromSong(song) {    
  return formatSong(song);
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