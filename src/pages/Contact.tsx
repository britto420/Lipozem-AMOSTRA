import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg mb-8">
            If you have any questions or need assistance with your order, our dedicated customer support team is here to help. Please reach out to us via the contact details below.
          </p>

          <h2 className="text-2xl font-bold mb-4">How to Reach Us</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <p className="font-semibold">Email:</p>
              <a href="mailto:support@lipozem.com" className="text-blue-600 hover:underline">
                support@lipozem.com
              </a>
            </div>
            
            <div>
              <p className="font-semibold">Order Status Inquiries:</p>
              <a href="tel:(925)234-4535" className="text-blue-600 hover:underline">
                (925) 234-4535
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">
              Our customer service representatives are committed to responding within 48 hours. You'll be communicating with a real person who is ready to address any concerns and provide the answers you need.
            </p>
            <p>
              Your satisfaction is our top priority, so don't hesitate to reach out and let us know how we can assist you better.
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Returning a Product?</h2>
            <p className="mb-4">When sending back your package, please make sure to include the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your Order Number</li>
              <li>Your Name</li>
              <li>Your Email Address</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              Please note: Return shipping costs are your responsibility.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}