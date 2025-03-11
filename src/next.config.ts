import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {};
 
/**
 * This works for Webpack
 */
const withNextIntl = createNextIntlPlugin(
  'i18n/request.ts',
);

// /**
//  * This works for STARTING the Turbo dev server but NOT when the layout.tsx file is run
//  */
// const withNextIntl = createNextIntlPlugin(
//   'src/i18n/request.ts',
// );

export default withNextIntl(nextConfig);
