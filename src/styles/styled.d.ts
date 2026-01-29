/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import type { Theme } from './themeTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
