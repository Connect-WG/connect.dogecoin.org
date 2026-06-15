import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Network,
  QrCode,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { organizationUrl } from '@/lib/shared';

const flow = [
  {
    title: 'Vendor',
    description: 'Creates an itemised Payment Request.',
  },
  {
    title: 'QR or NFC',
    description: 'Carries a short DogeConnect URL and relay key hash.',
  },
  {
    title: 'Client Wallet',
    description: 'Fetches and verifies the signed Payment Envelope.',
  },
  {
    title: 'Payment Relay',
    description: 'Validates the signed transaction and reports status.',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-14 sm:px-8 lg:py-20">
      <section className="grid flex-1 items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)]">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-normal text-fd-foreground sm:text-6xl">
            DogeConnect
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-fd-muted-foreground">
            A payment protocol for transmitting rich Dogecoin payment requests,
            displaying itemised details in wallets, and submitting signed
            transactions through a vendor-nominated relay.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <BookOpen className="size-4" />
              Read the docs
            </Link>
            <Link
              href={organizationUrl}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-fd-border bg-fd-background px-5 text-sm font-medium text-fd-foreground transition hover:bg-fd-accent"
            >
              <ExternalLink className="size-4" />
              GitHub
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-fd-border bg-fd-card p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-fd-border pb-4">
            <div>
              <h2 className="text-base font-semibold text-fd-foreground">
                Protocol Flow
              </h2>
              <p className="mt-1 text-sm text-fd-muted-foreground">
                Request, verify, sign, relay.
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-md bg-fd-accent text-fd-primary">
              <Network className="size-5" />
            </div>
          </div>

          <ol className="grid gap-3">
            {flow.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.75rem_1fr] items-start gap-4 rounded-md border border-fd-border bg-fd-background p-4"
              >
                <div className="flex size-11 items-center justify-center rounded-md bg-fd-secondary text-fd-primary">
                  {index === 0 ? (
                    <QrCode className="size-5" />
                  ) : index === 1 ? (
                    <ArrowRight className="size-5" />
                  ) : index === 2 ? (
                    <WalletCards className="size-5" />
                  ) : (
                    <ShieldCheck className="size-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-fd-foreground">
                      {item.title}
                    </h3>
                    {index < flow.length - 1 ? (
                      <ArrowRight className="size-3.5 text-fd-muted-foreground" />
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
