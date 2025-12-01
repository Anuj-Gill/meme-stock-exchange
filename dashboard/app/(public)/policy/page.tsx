"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, FaceValueBrandText } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 text-sm mb-8">
            Last updated: December 1, 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Face Value (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our stock trading simulation platform.
              Please read this privacy policy carefully. By using Face Value, you agree to the collection and use
              of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Account information (name, email address) when you sign in with Google OAuth</li>
              <li>Profile information from your Google account</li>
              <li>Trading activity and order history within the platform</li>
              <li>Suggestions and votes for new CEO stocks</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Automatically Collected</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>IP address and approximate location</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>To provide and maintain our trading simulation service</li>
              <li>To authenticate your identity and manage your account</li>
              <li>To process your simulated trades and maintain your portfolio</li>
              <li>To display leaderboards and trading statistics</li>
              <li>To improve and optimize our platform</li>
              <li>To communicate with you about updates and features</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong className="text-white">Service Providers:</strong> We use Supabase for authentication and database services, and Upstash for caching</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-white">Public Information:</strong> Your trading activity may be visible on public leaderboards (username only)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              We use industry-standard encryption and secure authentication through Google OAuth and Supabase.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at the email provided below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to maintain your session, remember your preferences,
              and analyze how our platform is used. You can control cookies through your browser settings,
              but disabling them may affect your ability to use certain features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Our platform integrates with third-party services including Google (for OAuth authentication),
              Supabase (for database and authentication), and Upstash (for Redis caching). These services
              have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Face Value is not intended for users under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected information
              from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              Your continued use of the platform after any changes constitutes acceptance of the new policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-orange-500 mt-2">
              Mail: {" "}

              <a
                href="mailto:anujgill212@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                anujgill212@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <FaceValueBrandText />
    </div>
  );
}
