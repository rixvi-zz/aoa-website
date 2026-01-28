import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - AOA Import & Export Solutions',
  description: 'Legal disclaimer for AOA Import Export services, outlining limitations and responsibilities in international trade operations.',
  keywords: ['Disclaimer', 'Legal notice', 'Service limitations', 'Trade disclaimer', 'AOA legal'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aoa-trade.com/disclaimer',
    languages: {
      'en-IN': 'https://aoa-trade.com/disclaimer',
      'en-US': 'https://aoa-trade.com/disclaimer',
      'en': 'https://aoa-trade.com/disclaimer',
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
                fullest extent permitted by law, AOA Import Export excludes all 
                representations, warranties, obligations, and liabilities arising out 
                of or in connection with the information provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Accuracy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information about 
                our services, market conditions, and trade regulations, we make no 
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
                <li>Changes in trade regulations and tariffs</li>
                <li>Supply chain disruptions and logistics delays</li>
                <li>Quality variations and product compliance issues</li>
                <li>Force majeure events and natural disasters</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Regulatory Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While AOA Import Export maintains MSME registration and strives for 
                full regulatory compliance, clients are ultimately responsible for 
                ensuring their transactions comply with all applicable laws and 
                regulations in their respective jurisdictions.
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
                Market information, pricing data, and trade statistics provided are 
                for general guidance only and should not be relied upon for specific 
                business decisions without independent verification.
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
                In no event shall AOA Import Export be liable for any direct, indirect, 
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
                  <strong>AOA Import Export</strong><br />
                  Email: legal@aoa-trade.com<br />
                  Phone: +91 98765 43210<br />
                  Address: Mumbai, Maharashtra, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}