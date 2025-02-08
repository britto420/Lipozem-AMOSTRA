import React from 'react';
import Layout from '../components/Layout';

export default function Returns() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Refund & Returns Policy</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <p className="text-lg mb-6">
              We want you to be completely satisfied with your experience using Lipozem, which is why we offer a 180-day trial period from the date your order was shipped. This gives you plenty of time to evaluate the product's effectiveness and see the benefits for yourself. We believe you'll be just as happy as countless other customers and hope you'll choose to reorder when needed.
            </p>
            
            <p className="mb-6">
              We encourage you to fully utilize this trial period before considering a refund. Allow the product ample time to show results. However, if you find that it doesn't meet your expectations, we're happy to assist with a refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Easy 3-Step Refund Process</h2>
            <p className="mb-4">To ensure a smooth refund experience, please follow these steps:</p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <span className="font-semibold">Check the Guarantee Period:</span> Confirm that you're still within our 180-day money-back guarantee period. You can verify the shipping date by referring to the confirmation email or the packing slip included in your order.
              </li>
              <li>
                <span className="font-semibold">Contact Us for a Refund:</span> Send an email to us with "Refund Request" in the subject line. This will help direct your inquiry to the right team member for prompt handling. You can reach us at support@lipozem.com.
              </li>
              <li>
                <span className="font-semibold">Return the Product:</span> Ship back all bottles (used, unused, or unopened) to the return address provided below. You'll be responsible for covering the return postage, and we recommend using a trackable shipping method. Please email us the tracking ID for your return, so we can monitor it effectively.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Include the following details with your return:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name</li>
              <li>Your order number (found in your confirmation email)</li>
              <li>The email address used for placing your order</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}