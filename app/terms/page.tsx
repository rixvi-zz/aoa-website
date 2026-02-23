import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - AOA FOODS PRIVATE LIMITED',
  description: 'Terms of service for AOA Foods import export business services.',
  robots: 'noindex, nofollow',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the services of AOA FOODS PRIVATE LIMITED, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not agree to abide 
                by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p>
                AOA FOODS PRIVATE LIMITED provides import and export services for food and agricultural 
                products, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Halaal meat export services</li>
                <li>Basmati rice and grain exports</li>
                <li>Pulses and cereals trading</li>
                <li>Animal feed and nutrition products</li>
                <li>Bulk agricultural commodities</li>
                <li>Global sourcing and logistics support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Terms</h2>
              <p>
                All business transactions are subject to separate commercial agreements. Pricing, 
                delivery terms, and payment conditions will be specified in individual contracts 
                or purchase orders. All transactions must comply with applicable import/export 
                regulations and trade laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance and Regulations</h2>
              <p>
                All parties must ensure compliance with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>APEDA (Agricultural and Processed Food Products Export Development Authority) regulations</li>
                <li>DGFT (Directorate General of Foreign Trade) guidelines</li>
                <li>GST and customs regulations</li>
                <li>International trade laws and destination country requirements</li>
                <li>Food safety and quality standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
              <p>
                We strive to maintain high quality standards for all products and services. However, 
                specific quality parameters, certifications, and testing requirements will be defined 
                in individual contracts. Buyers are responsible for verifying product specifications 
                meet their requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                AOA FOODS PRIVATE LIMITED shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performance under this agreement 
                which is due to fire, flood, earthquake, elements of nature, acts of God, acts of war, 
                terrorism, riots, civil disorders, rebellions, or other similar causes beyond our 
                reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                of the courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>
                For any questions regarding these terms of service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>AOA FOODS PRIVATE LIMITED</strong></p>
                <p>Email: Aoafoods.ind@gmail.com</p>
                <p>Phone: +91 99714 09567</p>
                <p>Address: A-19, Lane 1, Johri Farm, Noor Nagar Extension, Jamia Nagar, New Delhi - 110025, India</p>
                <p><strong>IEC:</strong> ABECA1554F | <strong>GSTIN:</strong> 07ABECA1554F1ZZ</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2026
              </p>
              <p className="text-sm text-gray-600 mt-2">
                These terms of service may be updated from time to time. Continued use of our services 
                after any such changes constitutes your consent to such changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}