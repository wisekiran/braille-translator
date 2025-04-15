const { exec } = require("child_process");

describe('translator.js script', () => {
    it('translates English to Braille', (done) => {
        exec("node translator.js Abc 123 xYz", (error, stdout, stderr) => {
            expect(error).toBeNull();
            expect(stderr).toBe("");
            expect(stdout.trim()).toBe(".....OO.....O.O...OO...........O.OOOO.....O.O...OO..........OO..OO.....OOO.OOOO..OOO");
            done();
        });
    });
    it('translates Braille to English', (done) => {
        const braille = 'O.....O.O...OO...........O.OOOO.....O.O...';
        exec(`node translator.js "${braille}"`, (error, stdout, stderr) => {
          expect(error).toBeNull();
          expect(stderr).toBe("");
          expect(stdout.trim().toLowerCase()).toContain("abc 12");
          done();
        });
    });
});