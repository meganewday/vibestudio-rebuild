declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const metadata: Record<string, any>;

  const MDXComponent: ComponentType<any>;
  export default MDXComponent;
}

// Allow importing plain CSS/SCSS files as side-effect imports
declare module '*.css';
declare module '*.scss';

// CSS modules (named exports as classes)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

