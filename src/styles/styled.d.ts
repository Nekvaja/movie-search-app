import 'styled-components';
import type { Theme } from './themeTypes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
