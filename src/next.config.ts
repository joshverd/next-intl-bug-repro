import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
// /**
//  * This works for Webpack
//  * 
//  * But NOT for starting the Turbo dev server
//  */
// const withNextIntl = createNextIntlPlugin(
//   'i18n/request.ts',
// );

/**
 * This works for STARTING the Turbo dev server
 * 
 * But this will throw an error in layout.tsx when loading localhost:3000
 */
const withNextIntl = createNextIntlPlugin(
  'src/i18n/request.ts',
);

export default withNextIntl(nextConfig);
