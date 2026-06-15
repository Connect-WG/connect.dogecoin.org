import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/getting_started/introduction.html',
        destination: '/docs',
        permanent: true,
      },
      {
        source: '/getting_started/introduction',
        destination: '/docs',
        permanent: true,
      },
      {
        source: '/qr_codes/qr_codes.html',
        destination: '/docs/payment-qr-code',
        permanent: true,
      },
      {
        source: '/qr_codes/qr_codes',
        destination: '/docs/payment-qr-code',
        permanent: true,
      },
      {
        source: '/payment_envelope/envelope.html',
        destination: '/docs/payment-envelope',
        permanent: true,
      },
      {
        source: '/payment_envelope/envelope',
        destination: '/docs/payment-envelope',
        permanent: true,
      },
      {
        source: '/payment_relay/relay.html',
        destination: '/docs/payment-relay',
        permanent: true,
      },
      {
        source: '/payment_relay/relay',
        destination: '/docs/payment-relay',
        permanent: true,
      },
      {
        source: '/schema_reference/schema_reference.html',
        destination: '/docs/schema-reference',
        permanent: true,
      },
      {
        source: '/schema_reference/schema_reference',
        destination: '/docs/schema-reference',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
