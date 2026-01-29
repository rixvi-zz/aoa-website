import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - AOA FOODS PRIVATE LIMITED',
  description: 'Legal disclaimer for AOA FOODS PRIVATE LIMITED services, outlining limitations and responsibilities in international food trade operations.',
  keywords: ['Disclaimer', 'Legal notice', 'Service limitations', 'Food trade disclaimer', 'AOA Foods legal'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aoa-foods.com/disclaimer',
    languages: {
      'en-IN': 'https://aoa-foods.com/disclaimer',
      'en-US': 'https://aoa-foods.com/disclaimer',
      'en': 'https://aoa-foods.com/disclaimer',
    },
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the 
                fullest extent permitted by law, AOA FOODS PRIVATE LIMITED excludes all 
                representations, warranties, obligations, and liabilities arising out 
                of or in connection with the information provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Accuracy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information about 
                our food import & export services, market conditions, and trade regulations, we make no 
                representations or warranties about the accuracy, reliability, 
                completeness, or timeliness of this information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Trade Risks</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                International trade involves inherent risks including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Currency fluctuations and exchange rate risks</li>
                <li>Political and economic instability in target markets</li>
                <li>Changes in trade regulations, tariffs, and food safety standards</li>
                <li>Supply chain disruptions and logistics delays</li>
                <li>Quality variations and food product compliance issues</li>
                <li>Force majeure events and natural disasters</li>
                <li>Seasonal variations in food & agri products availability</li>
                <li>Perishability and shelf-life considerations for food products</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Regulatory Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While AOA FOODS PRIVATE LIMITED maintains IEC and GST registration and strives for 
                full regulatory compliance, clients are ultimately responsible for 
                ensuring their food trade transactions comply with all applicable laws and 
                regulations in their respective jurisdictions, including food safety standards,
                APEDA requirements, and customs regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or reference 
                third-party services. We do not endorse or assume responsibility for 
                the content, privacy policies, or practices of third-party sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Market Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Market information, pricing data, and food trade statistics provided are 
                for general guidance only and should not be relied upon for specific 
                business decisions without independent verification. Food prices and 
                availability can vary significantly due to seasonal and market factors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Professional Advice</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information provided does not constitute professional legal, 
                financial, or business advice. Clients should consult with qualified 
                professionals for specific advice related to their circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall AOA FOODS PRIVATE LIMITED be liable for any direct, indirect, 
                incidental, special, consequential, or exemplary damages arising from 
                the use of our services or reliance on information provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify this disclaimer at any time. Changes 
                will be effective immediately upon posting on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this disclaimer, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>AOA FOODS PRIVATE LIMITED</strong><br />
                  Email: ahmarabyadtrading@gmail.com<br />
                  Phone: +91 99714 09567<br />
                  Address: A-19, 4th Floor, Gali No. 1, Johri Farm,<br />
                  Noor Nagar Extension, Jamia Nagar,<br />
                  New Delhi, Delhi - 110025, India<br />
                  IEC: ABECA1554F | GSTIN: 07ABECA1554F1ZZ
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}