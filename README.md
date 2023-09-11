# BetterMusic Studio

What will become the open source design system for BetterMusic, featuring a suite of tools to be used for creating, editing and playing music. Including the most robust chordpro editor, a cross platform PDF viewer, multitrack player. 

Tools used:

- 🏎 [Turborepo](https://turborepo.org) — High-performance build system for Monorepos
- 🚀 [StencilJs](https://stenciljs.com/) — Stencil is a toolchain for building reusable, scalable Design Systems.
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- 📖 [Changesets](https://github.com/changesets/changesets) — A tool to manage versioning and changelogs

Packages:
|Name|Description|
|---|---|
|@bettermusic/chordsheetjs|chordsheet Parsing Library|
|@bettermusic/studio|Web components for a suite of editor tools|
|@bettermusic/studio-angular|Angular build for @bettermusic/studio|
|codemirror-lang-chordpro|ChordPro Languagae Support for codemirror|

Project Structure:
```
turborepo monorepo
│      
└───apps
│   │   storybook
│   │   Ionic app for a full fledged app will come later ..
│   
└───demos
│   │   framework demos to prove stuff works
│   
└───Packages
    │   stand alone packages
```

Getting Started:

```
gh repo clone BetterMusic/studio
git submodule update --init --recursive
yarn install
yarn dev
```
