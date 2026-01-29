import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - AOA FOODS PRIVATE LIMITED',
  description: 'Terms of service for AOA FOODS PRIVATE LIMITED, outlining the terms and conditions for using our international food import & export services and website.',
  keywords: ['Terms of service', 'Terms and conditions', 'Service agreement', 'Legal terms', 'AOA Foods terms'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aoa-foods.com/terms',
    languages: {
      'en-IN': 'https://aoa-foods.com/terms',
      'en-US': 'https://aoa-foods.com/terms',
      'en': 'https://aoa-foods.com/terms',
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
                By accessing and using AOA FOODS PRIVATE LIMITED's website and services, you accept 
                and agree to be bound by the terms and provision of this agreement. If you 
                do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Company Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AOA FOODS PRIVATE LIMITED is an IEC and GST registered company based in India, specializing 
                in international food & agri products trade services including import, export, global sourcing, 
                and logistics support.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  <strong>Legal Name:</strong> AOA FOODS PRIVATE LIMITED<br />
                  <strong>Business Type:</strong> Private Limited Company<br />
                  <strong>Nature of Business:</strong> Importer & Exporter (Food & Agri Products)<br />
                  <strong>IEC:</strong> ABECA1554F (Issued: 08/01/2026)<br />
                  <strong>GSTIN:</strong> 07ABECA1554F1ZZ (Registered: 17/12/2025)<br />
                  <strong>Authority:</strong> Directorate General of Foreign Trade (DGFT)<br />
                  <strong>Status:</strong> Active | <strong>Verified:</strong> Yes (System Generated Certificate)
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Food import and export facilitation</li>
                <li>Global food & agri products sourcing and supplier identification</li>
                <li>Trade documentation and compliance (APEDA, FSSAI, customs)</li>
                <li>Logistics and supply chain management for food products</li>
                <li>B2B partnership facilitation in food trade</li>
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
                  <strong>AOA FOODS PRIVATE LIMITED</strong><br />
                  Email: ahmarabyadtrading@gmail.com<br />
                  Phone: +91 99714 09567<br />
                  Address: A-19, 4th Floor, Gali No. 1, Johri Farm,<br />
                  Noor Nagar Extension, Jamia Nagar,<br />
                  New Delhi, Delhi - 110025, India<br />
                  IEC: ABECA1554F | GSTIN: 07ABECA1554F1ZZ<br />
                  Authorized Signatories: Masood Ul Hasan Rizvi, Saifur Rehman Khan
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}