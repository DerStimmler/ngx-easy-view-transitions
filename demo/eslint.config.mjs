import baseConfig from '../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ngxEzTransitions',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ngx-easy-view-transitions',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/prefer-standalone': 'off',
      // Newly enabled by the updated Angular ESLint preset; it was not enforced before the upgrade.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off'
    }
  },
  ...nx.configs['flat/angular-template']
];
