import React from 'react';
import Layout from '../components/Layout';

export default function References() {
  const references = [
    {
      title: "Beta-Hydroxybutyrate: Its Role in Fat Metabolism and Weight Loss",
      authors: "Cahill GF Jr.",
      journal: "Metabolic Studies",
      year: "2017"
    },
    {
      title: "Ketogenic Diets and Their Effectiveness in Promoting Weight Loss",
      authors: "Paoli A, et al.",
      journal: "Nutrition & Metabolism",
      year: "2014"
    },
    {
      title: "Exogenous Ketones and Fat Burning: Insights into Weight Loss",
      authors: "Stubbs BJ, et al.",
      journal: "Obesity Research & Clinical Practice",
      year: "2018"
    },
    // ... mais referências
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Scientific References</h1>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {references.map((ref, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <p className="text-lg mb-2">
                  {index + 1}. "{ref.title}"
                </p>
                <p className="text-gray-600">
                  {ref.authors} - {ref.journal} ({ref.year})
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}