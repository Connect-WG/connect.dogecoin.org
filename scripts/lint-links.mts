import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { register } from 'fumadocs-mdx/node';

register();

const { source } = await import('@/lib/source');

type Page = ReturnType<typeof source.getPages>[number];

function getHeadings(page: Page): string[] {
  return page.data.toc.map((item) => item.url.slice(1));
}

async function getFiles(): Promise<FileObject[]> {
  return Promise.all(
    source.getPages().map(async (page) => ({
      path: page.absolutePath,
      content: await page.data.getText('raw'),
      url: page.url,
      data: page.data,
    })),
  );
}

async function checkLinks() {
  const pages = source.getPages();
  const scanned = await scanURLs({
    preset: 'next',
    populate: {
      'docs/[[...slug]]': pages.map((page) => ({
        value: {
          slug: page.slugs,
        },
        hashes: getHeadings(page),
      })),
    },
  });

  printErrors(
    await validateFiles(await getFiles(), {
      scanned,
      checkRelativePaths: 'as-url',
    }),
    true,
  );
}

void checkLinks();
