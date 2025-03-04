import pkgJSON from '../package.json';

export const version = `v${pkgJSON.version}` as const;

export const LIST_LATEST_VERSION = 1;
