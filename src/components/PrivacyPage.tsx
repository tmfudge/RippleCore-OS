import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-black mb-8">Privacy & Legal</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Company Information</h2>
              <p className="text-gray-600 leading-relaxed">
                RippleCoreOS is a product and service offered by <strong>Roman Grace, Inc.</strong>, 
                a corporation dedicated to building intelligent infrastructure for high-functioning professionals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Privacy Policy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At RippleCoreOS, we understand that your personal and professional information 
                  is sensitive and valuable. We are committed to protecting your privacy and 
                  maintaining the confidentiality of all data shared with us.
                </p>
                
                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information provided during application and onboarding</li>
                  <li>Professional background and organizational context</li>
                  <li>Information you choose to store within your RippleCoreOS system</li>
                  <li>Usage data to improve system performance and user experience</li>
                </ul>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">How We Use Your Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To design and build your personalized RippleCoreOS system</li>
                  <li>To provide ongoing support and system optimization</li>
                  <li>To communicate about your build progress and system updates</li>
                  <li>To improve our services and methodologies</li>
                </ul>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Data Security</h3>
                <p>
                  We implement enterprise-grade security measures to protect your information. 
                  Your data is encrypted in transit and at rest, and access is strictly limited 
                  to authorized personnel working directly on your build.
                </p>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Data Sharing</h3>
                <p>
                  We do not sell, rent, or share your personal information with third parties 
                  except as necessary to provide our services or as required by law.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Terms of Service</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Service Description</h3>
                <p>
                  RippleCoreOS provides custom-built personal knowledge management systems 
                  designed for high-functioning professionals. Our service includes consultation, 
                  system design, implementation, and ongoing support.
                </p>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service fee: $3,000 per month</li>
                  <li>Minimum commitment: 4 months ($12,000 total)</li>
                  <li>Payment due monthly in advance</li>
                  <li>Refunds considered on a case-by-case basis</li>
                </ul>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Client Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Participate actively in discovery and design sessions</li>
                  <li>Provide timely feedback during the build process</li>
                  <li>Maintain confidentiality of proprietary methodologies</li>
                  <li>Use the system in accordance with agreed-upon guidelines</li>
                </ul>

                <h3 className="text-lg font-semibold text-black mt-6 mb-2">Intellectual Property</h3>
                <p>
                  While the specific content and structure of your RippleCoreOS system belongs 
                  to you, Roman Grace, Inc. retains ownership of the underlying methodologies, 
                  frameworks, and processes used in system creation.
                </p>
              </div>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};