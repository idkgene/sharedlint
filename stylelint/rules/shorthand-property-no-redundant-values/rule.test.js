import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import path from 'path';
import fs from 'node:fs/promises';

describe('shorthand-property-no-redundant-values', () => {
  const getFixturePath = (filename) => {
    return path.resolve(__dirname, `./fixtures/${filename}`);
  };

  it('valid.scss should pass', async () => {
    const validPath = getFixturePath('valid.scss');
    const validCode = await fs.readFile(validPath, 'utf8');
    const config = require('../../.stylelintrc.js');
    const ruleConfig = config.rules['shorthand-property-no-redundant-values'];
    
    const result = await stylelint.lint({
      code: validCode,
      config: {
        rules: {
          'shorthand-property-no-redundant-values': ruleConfig,
        },
      },
      syntax: 'scss',
    });
    
    expect(result.errored).toBeFalsy();
  });

  it('invalid.scss should fail', async () => {
    const invalidPath = getFixturePath('invalid.scss');
    const invalidCode = await fs.readFile(invalidPath, 'utf8');
    const config = require('../../.stylelintrc.js');
    const ruleConfig = config.rules['shorthand-property-no-redundant-values'];
    
    const result = await stylelint.lint({
      code: invalidCode,
      config: {
        rules: {
          'shorthand-property-no-redundant-values': ruleConfig,
        },
      },
      syntax: 'scss',
    });
    
    expect(result.errored).toBeTruthy();
  });
});
