/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Based on similar script in Jest
// https://github.com/facebook/jest/blob/a7acc5ae519613647ff2c253dd21933d6f94b47f/scripts/prettier.js

// eslint-disable-next-line import/no-extraneous-dependencies
const chalk = require('chalk');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
const prettier = require('prettier');
const fs = require('fs');
const listChangedFiles = require('./listChangedFiles');

const prettierConfigPath = require.resolve('../.prettierrc');

const mode = process.argv[2] || 'check';
const shouldWrite = mode === 'write' || mode === 'write-changed';
const onlyChanged = mode === 'check-changed' || mode === 'write-changed';

const changedFiles = onlyChanged ? listChangedFiles() : null;
let didWarn = false;
let didError = false;

const files = glob
  .sync('src/**/*.ts*', { ignore: ['**/node_modules/**', 'build/**'] })
  .filter(f => !onlyChanged || changedFiles.has(f));

if (!files.length) {
  return;
}

files.forEach(file => {
  const options = prettier.resolveConfig.sync(file, {
    config: prettierConfigPath,
  });
  try {
    const input = fs.readFileSync(file, 'utf8');
    if (shouldWrite) {
      const output = prettier.format(input, options);
      if (output !== input) {
        fs.writeFileSync(file, output, 'utf8');
      }
    } else if (!prettier.check(input, options)) {
      if (!didWarn) {
        console.log(
          `\n${chalk.red(`这个项目使用 prettier 格式化了所有代码.\n`)}${chalk.dim(
            ` 请运行 `
          )}${chalk.reset('yarn prettier-all')}${chalk.dim(
            ` 并且添加修改了的文件到你的 commit`
          )}\n\n`
        );
        didWarn = true;
      }
      console.log(file);
    }
  } catch (error) {
    didError = true;
    console.log(`\n\n${error.message}`);
    console.log(file);
  }
});

if (didWarn || didError) {
  process.exit(1);
}
