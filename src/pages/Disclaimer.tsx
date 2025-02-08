import React from 'react';
import Layout from '../components/Layout';

export default function Disclaimer() {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Disclaimer</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <p>
              The statements made on this website have not been evaluated by the Food and Drug Administration. 
              Products are not intended to diagnose, treat, cure or prevent any disease.
            </p>
            
            <p>
              If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
            </p>
            
            <p>
              The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. 
              You should do your own research and confirm the information with other sources when searching for information regarding health issues 
              and always review the information carefully with your professional health care provider before using any of the protocols presented on this 
              website and/or in the product sold here.
            </p>
            
            <p>
              Neither ClickBank nor the author are engaged in rendering medical or similar professional services or advice via this website or in the product, 
              and the information provided is not intended to replace medical advice offered by a physician or other licensed healthcare provider.
            </p>
            
            <p>
              You should not construe ClickBank's sale of this product as an endorsement by ClickBank of the views expressed herein, or any warranty 
              or guarantee of any strategy, recommendation, treatment, action, or application of advice made by the author of the product.
            </p>
            
            <p>
              Individual results may vary. Testimonials are not claimed to represent typical results. All testimonials are real, and may not reflect 
              the typical purchaser's experience, and are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Important Notice</h2>
              <p>
                The information provided on this site is intended for your general knowledge only and is not a substitute for professional medical advice 
                or treatment for specific medical conditions. Always seek the advice of your physician or other qualified health care provider with any 
                questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}