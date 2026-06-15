'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

type BindFunctions = (element: Element) => void;

export function Mermaid({ chart }: { chart: string }) {
  const id = `mermaid-${useId().replaceAll(':', '')}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const bindRef = useRef<BindFunctions | undefined>(undefined);
  const [svg, setSvg] = useState('');
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      const { default: mermaid } = await import('mermaid');

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'inherit',
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        themeCSS: 'margin: 1.5rem auto 0;',
      });

      const result = await mermaid.render(id, chart);
      if (cancelled) return;

      bindRef.current = result.bindFunctions;
      setSvg(result.svg);
    }

    void renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  useEffect(() => {
    if (containerRef.current) bindRef.current?.(containerRef.current);
  }, [svg]);

  if (!svg) return null;

  return (
    <div
      className="overflow-x-auto"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
