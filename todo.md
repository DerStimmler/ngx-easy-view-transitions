# TODO

## Check ESLint compatibility

The `demo` and `ngx-easy-view-transitions` lint targets currently fail before linting because ESLint cannot load `plugin:@angular-eslint/recommended` through `@nx/eslint-plugin`.

- Check compatibility between Nx 23.1.0, ESLint 9.17.0, and the installed `@angular-eslint/*` 22.1.0 packages.
- Review whether the legacy `.eslintrc.json` setup should be migrated to flat config.
- After resolving the configuration, rerun `pnpm exec nx affected -t lint` and confirm both projects pass.

This issue is unrelated to the `update-executor-lint-inputs` migration. The migration's new `^default` and `tools/eslint-rules/**/*` inputs resolve correctly for both lint targets.
