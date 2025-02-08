import React from 'react';
import Layout from '../components/Layout';

export default function Shipping() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Shipping Policy</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
            <p className="mb-4">
              Orders typically take 1-2 business days to process before being shipped. Please be aware that processing times may be longer during holidays. If any incorrect or incomplete payment or address information is provided, it may result in an additional 3-5 business days delay.
            </p>
            <p className="mb-4">
              Note: All shipping addresses are verified through the US postal service. To ensure accuracy, please verify your address at USPS.com (this does not apply to international orders).
            </p>
            <p>
              We ship Monday to Friday, excluding weekends and US public holidays.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Domestic Delivery Time – Standard Shipping</h2>
            <p>
              Delivery times will vary depending on the shipping method chosen and do not include weekends or holidays. All times are estimates, and Lipozem is not accountable for delays caused by circumstances beyond our control, such as weather conditions, labor strikes, or transportation issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Refused, Lost, Stolen, or Delayed Packages</h2>
            <p className="mb-4">
              If a package is refused upon delivery, the shipping fee will be deducted from your refund. Refunds for refused packages will only be processed once the product is received and inspected by our team.
            </p>
            <p>
              Lipozem primarily uses United Parcel Service (UPS) for shipping. Unfortunately, we cannot guarantee replacements for lost or stolen packages shipped via UPS. If you experience any delays or issues with your delivery, please contact us.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}