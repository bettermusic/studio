import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
//   const chordSheet = `
//        Am         C/G        F          C
// Let it be, let it be, let it be, let it be
// C                G              F  C/E Dm C
// Whisper words of wisdom, let it be`.substring(1);

// const parser = new ChordSheetJS.ChordSheetParser();
// const song = parser.parse(chordSheet);

  return <button>{props.children} Today</button>;
}

Button.displayName = "cpstudio";
