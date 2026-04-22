import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - AOA FOODS PRIVATE LIMITED',
  description: 'Legal disclaimer for AOA Foods import export services and business information.',
  robots: 'noindex, nofollow',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
              <p>
                The information contained on this website is for general information purposes only. 
                AOA FOODS PRIVATE LIMITED provides this information in good faith, however we make no 
                representation or warranty of any kind, express or implied, regarding the accuracy, 
                adequacy, validity, reliability, availability or completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
              <p>
                While we strive to keep the information up to date and correct, we make no representations 
                or warranties about the completeness, accuracy, reliability, suitability or availability 
                with respect to the website or the information, products, services, or related graphics 
                contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trade & Export Information</h2>
              <p>
                All trade regulations, export procedures, and compliance requirements mentioned on this 
                website are subject to change based on government policies and international trade laws. 
                Users are advised to verify current regulations with relevant authorities before making 
                any business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information</h2>
              <p>
                Product specifications, availability, and pricing information displayed on this website 
                are indicative and subject to change without notice. Final terms and conditions will 
                be confirmed through direct business communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained 
                by AOA FOODS PRIVATE LIMITED. We do not guarantee the accuracy, relevance, timeliness, 
                or completeness of any information on these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                In no event will AOA FOODS PRIVATE LIMITED be liable for any loss or damage including 
                without limitation, indirect or consequential loss or damage, or any loss or damage 
                whatsoever arising from loss of data or profits arising out of, or in connection with, 
                the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p>
                For any questions regarding this disclaimer or our services, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>AOA FOODS PRIVATE LIMITED</strong></p>
                <p>Email: aoafoodsind@gmail.com</p>
                <p>Phone: +91 99714 09567</p>
                <p>Address: 84 MAIN ROAD ZAKIR NAGAR, Okhla, New Delhi, Delhi 110025, India</p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2026
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This disclaimer is subject to change without notice. Please review this page periodically 
                for any updates.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}