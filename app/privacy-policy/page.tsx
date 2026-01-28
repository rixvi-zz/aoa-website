import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AOA Import & Export Solutions',
  description: 'Privacy policy for AOA Import Export, detailing how we collect, use, and protect your personal information in compliance with international data protection laws.',
  keywords: ['Privacy policy', 'Data protection', 'GDPR compliance', 'Personal information', 'AOA privacy'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aoa-trade.com/privacy-policy',
    languages: {
      'en-IN': 'https://aoa-trade.com/privacy-policy',
      'en-US': 'https://aoa-trade.com/privacy-policy',
      'en': 'https://aoa-trade.com/privacy-policy',
    },
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AOA Import Export ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information and business details</li>
                <li>Trade requirements and preferences</li>
                <li>Communication records and correspondence</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Technical Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and improve our import/export services</li>
                <li>Respond to inquiries and communicate with you</li>
                <li>Process transactions and manage business relationships</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Send relevant business communications and updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>With trusted service providers who assist our operations</li>
                <li>In connection with business transfers or mergers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, 
                or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As an international trade company, we may transfer your information across 
                borders to facilitate our services. We ensure appropriate safeguards are 
                in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>AOA Import Export</strong><br />
                  Email: privacy@aoa-trade.com<br />
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