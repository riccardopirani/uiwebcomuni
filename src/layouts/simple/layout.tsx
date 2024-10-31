import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';
import { Main, CompactContent } from './main';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';

export type SimpleLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  content?: {
    compact?: boolean;
  };
};

export function SimpleLayout({ sx, children, header, content }: SimpleLayoutProps) {
  const layoutQuery: Breakpoint = 'md';

  return (
    <LayoutSection
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{ container: { maxWidth: false } }}
          sx={header?.sx}
          slots={{}}
        />
      }
      footerSection={null}
      cssVars={{
        '--layout-simple-content-compact-width': '448px',
      }}
      sx={sx}
    >
      <Main>
        {content?.compact ? (
          <CompactContent layoutQuery={layoutQuery}>{children}</CompactContent>
        ) : (
          children
        )}
      </Main>
    </LayoutSection>
  );
}
