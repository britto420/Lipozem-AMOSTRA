import React from 'react';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <p className="text-gray-600 mb-8">Effective Date: September 2024</p>
            
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              Welcome to Lipozem. This Privacy Policy outlines how we handle and protect your personal information when you visit our website [www.lipozem.com] ("the Site"). It explains the types of data we collect, how we use this data, and your rights regarding your information. This policy applies only to data collected online through our Site, not to data gathered offline or through other means, such as telephone, mail, or in-person events.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance and Updates</h2>
            <p className="mb-4">
              By accessing or using our Site, you consent to the collection and use of your information as described in this policy. Lipozem reserves the right to make changes to this Privacy Policy. Any updates will be posted with a revised "Effective Date," and continued use of our Site signifies your acceptance of these changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect both personally identifiable information (PII) and non-personally identifiable information (non-PII):</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Personal Information:</h3>
                <p>Information you voluntarily provide, such as your name, email address, postal address, payment details, and any other data you submit when registering, making purchases, or subscribing to our services.</p>
              </div>
              
              <div>
                <h3 className="font-bold">Automatic Data Collection:</h3>
                <p>Data such as your device's IP address, browser type, device identifiers, and browsing activity may be collected to improve your experience and monitor traffic on our Site. This data may be gathered through cookies, web beacons, and similar technologies.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}