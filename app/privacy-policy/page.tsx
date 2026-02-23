import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AOA FOODS PRIVATE LIMITED',
  description: 'Privacy policy for AOA Foods website and business services.',
  robots: 'noindex, nofollow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                AOA FOODS PRIVATE LIMITED collects information you provide directly to us, such as when you 
                contact us for business inquiries, request quotes, or use our services. This may include 
                your name, email address, phone number, company information, and business requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your business inquiries and provide quotes</li>
                <li>Process and fulfill your import/export service requests</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                trusted partners who assist us in operating our website and conducting business, provided 
                they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to 
                disable cookies through your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>AOA FOODS PRIVATE LIMITED</strong></p>
                <p>Email: Aoafoods.ind@gmail.com</p>
                <p>Phone: +91 99714 09567</p>
                <p>Address: A-19, Lane 1, Johri Farm, Noor Nagar Extension, Jamia Nagar, New Delhi - 110025, India</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2026
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This privacy policy may be updated from time to time. We will notify you of any changes 
                by posting the new policy on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}