import { ChordProParser, HtmlDivFormatter } from "@praisecharts/chordsheetjs";

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