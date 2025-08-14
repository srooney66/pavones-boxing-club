import { Link } from '@/lib/i18n/routing';
import { ComponentProps } from 'react';

// Re-export the localized Link component with a clear name
// This ensures all internal links use the proper i18n routing
export default function LocalizedLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}

// For external links or anchors that don't need localization
export function ExternalLink({ 
  href, 
  children, 
  ...props 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}