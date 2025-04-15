# Braille CLI Translator

Braille CLI Translator is a command-line application that translates between English and Braille and vice versa. It intelligently detects the input type at runtime and performs the appropriate conversion.

Braille characters are represented using 'O' (raised dot) and '.' (unraised dot)

Each Braille symbol is a 6-character string, read top-to-bottom, left-to-right.    

## What is Braille?  
Braille is a tactile writing system used by people who are visually impaired. Each Braille character is made up of six dots arranged in a 3x2 grid. Different combinations of raised (or unraised) dots represent letters, numbers, and symbols.

## Features
- Full English alphabet (a–z)  
- Capitalization via a cap symbol  
- Numbers 0–9 via a num symbol (applies to the next continuous digits)  
- Spaces (multi-word support)
- Handles dynamic translation using CLI  

## How it Works
When given an input, the application:  
- Detects whether it is in English or Braille format  
- Converts English → Braille using symbolic dot patterns  
- Converts Braille → English, recognizing capitalization and numbers  

## Usage
```bash
node translator.js "Hello 123"
node translator.js ".....OOOO...O....."
```

## Example
**Input:** `Abc 123`
**Output:** Braille string like `.....OO.....O.O...OO...........O.OOOO.....O.O...OO....`

## Tests
```bash
npm install
npm test
```
