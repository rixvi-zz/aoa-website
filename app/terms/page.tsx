import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - AOA Import & Export Solutions',
  description: 'Terms of service for AOA Import Export, outlining the terms and conditions for using our international trade services and website.',
  keywords: ['Terms of service', 'Terms and conditions', 'Service agreement', 'Legal terms', 'AOA terms'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aoa-trade.com/terms',
    languages: {
      'en-IN': 'https://aoa-trade.com/terms',
      'en-US': 'https://aoa-trade.com/terms',
      'en': 'https://aoa-trade.com/terms',
    },
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using AOA Import Export's website and services, you accept 
                and agree to be bound by the terms and provision of this agreement. If you 
                do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Company Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AOA Import Export is an MSME-registered company based in India, specializing 
                in international trade services including import, export, global sourcing, 
                and logistics support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Import and export facilitation</li>
                <li>Global sourcing and supplier identification</li>
                <li>Trade documentation and compliance</li>
                <li>Logistics and supply chain management</li>
                <li>B2B partnership facilitation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain confidentiality of sensitive business information</li>
                <li>Use our services for legitimate business purposes only</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide excellent service, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Successful completion of all trade transactions</li>
                <li>Specific delivery timelines due to external factors</li>
                <li>Availability of specific products or suppliers</li>
                <li>Immunity from regulatory changes or trade restrictions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms will be specified in individual service agreements. 
                Generally, payments are due as per agreed terms, and late payments 
                may incur additional charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AOA Import Export shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are 
                and will remain the exclusive property of AOA Import Export and its licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms shall be interpreted and governed in accordance with the 
                laws of India, and any disputes shall be subject to the jurisdiction 
                of Indian courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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