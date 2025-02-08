import React from 'react';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to the Lipozem website. By accessing and utilizing any services, features, or content provided on our site, you are entering into a legal agreement with Lipozem and agree to comply with the following Terms of Service ("Terms"). Please ensure that you read these Terms carefully, as they establish the rules and guidelines governing your use of this website.
            </p>
            <p className="mb-4">
              If you disagree with any aspect of these Terms, you should immediately cease using this website. Additionally, by using this site, you confirm that you are at least 18 years of age. If you are under 18, you are not permitted to use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Amendments to Terms</h2>
            <p>
              Lipozem reserves the right to change or update these Terms at any time, at our sole discretion. Any modifications will become effective once published on the website. You are encouraged to periodically review these Terms to stay informed of any changes. Your continued use of our website signifies your acceptance of any modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Website Access and Security</h2>
            <p>
              We strive to keep our website accessible to you at all times, but we do not guarantee uninterrupted availability. Lipozem retains the right to modify, suspend, or discontinue any part of the website, whether temporarily or permanently, without prior notice. Furthermore, there may be occasions where access is restricted, including for registered users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Responsibilities:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure your own access to the website, including any internet and device requirements.</li>
              <li>Ensure that all users who access the website through your device or connection are aware of and comply with these Terms.</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}