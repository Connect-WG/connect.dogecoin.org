import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, organizationUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: organizationUrl,
  };
}
