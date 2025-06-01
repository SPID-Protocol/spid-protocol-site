import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="SPID Protocol"
      description="A Practical Consent Framework for Responsible AI Governance"
    >
      <main className="container">
        <h1>SPID Protocol</h1>
        <h2>A Practical Consent Framework for Responsible AI Governance</h2>

        <p>
          SPID Protocol provides a delivery-layer consent mechanism for AI-generated communications,
          ensuring lawful, ethical, and regulator-compliant delivery of AI-generated content at scale.
        </p>

        <p>
          In an AI-driven world, consent is becoming the new currency of trust. 
          SPID Protocol creates the global permission layer to enable trusted, compliant AI agent-to-human communications.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Read the Whitepaper
          </Link>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Link className="button button--secondary button--lg" to="/blog">
            Visit The Blog
          </Link>
        </div>
      </main>
    </Layout>
  );
}
