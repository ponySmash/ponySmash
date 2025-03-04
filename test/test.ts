import { assert } from 'chai';
import { createHash } from 'crypto';
import { existsSync, readdirSync, readFileSync } from 'fs';

import Lists from '../src/Lists';

describe('List tests', () => {
    Object.entries(Lists).forEach((l) => {
        if (l[0] == 'custom') return; // Ignore custom as its special

        describe(l[0], () => {
            it(`There shouldnt be duplicate names`, () => {
                const names = l[1].list.map((c) => c.name);
                const dupedNames = names.filter((item, index) => names.indexOf(item) !== index);
                assert(dupedNames.length == 0, `Characters with dupe names: ${dupedNames.map((n) => `"${n}" `)}`);
            });

            it(`There shouldnt be duplicate images`, () => {
                const imgs = l[1].list.map((c) => c.img);
                const dupedImgs = imgs.filter((item, index) => imgs.indexOf(item) !== index);
                assert(dupedImgs.length == 0, `Characters with dupe images: ${dupedImgs.map((n) => `"${n}" `)}`);
            });

            it('All characters should have an existing valid WebP', () => {
                l[1].list.forEach((c) => {
                    assert(existsSync(`./public/${c.img}`), `${c.name} WebP path is not valid (${c.img})`);
                });
            });
        });
    });
});

function getFiles(source) {
    return readdirSync(source, { withFileTypes: true, recursive: true })
        .filter((dirent) => !dirent.isDirectory())
        .map((dirent) => `${dirent.parentPath}/${dirent.name}`);
}

describe('Filesystem tests', () => {
    const files = getFiles('./public/characters');

    it('All WebPs should have a character assigned to any list', () => {
        files.forEach((filename) => {
            let found = false;
            Object.entries(Lists).every((l) => {
                const i = l[1].list.find((character) => character.img == filename.replace('public/', ''));
                if (typeof i !== 'undefined') {
                    found = true;
                    return false;
                }
                return true;
            });
            assert(found, `Cannot find "${filename.replace('public/', '')}"`);
        });
    });

    it('There shouldnt be any duplicate image hashes', () => {
        const hashes: { path: string, hash: string }[] = [];
        files.forEach((file) => {
            const blob = readFileSync(file);
            const sha1 = createHash('sha1').update(blob).digest('hex');

            const foundHash = hashes.find((h) => h.hash === sha1);

            if (typeof foundHash != 'undefined') {
                assert(false, `Duplicate SHA1: ${sha1} for character paths "${file}" and "${foundHash.path}"`);
            }

            if (typeof foundHash == 'undefined')
                hashes.push({ path: file, hash: sha1 });
        });
    });
});
