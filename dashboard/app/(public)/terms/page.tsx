"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer, FaceValueBrandText } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
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
          <h1 className="text-xl font-semibold">Terms of Service</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 text-sm mb-8">
            Last updated: December 1, 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Face Value (&quot;the Platform&quot;), you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use the Platform. We reserve the
              right to modify these terms at any time, and your continued use of
              the Platform constitutes acceptance of any modifications.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Face Value is a stock trading simulation platform that allows
              users to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Trade virtual CEO-themed stocks using simulated currency</li>
              <li>
                Experience real-time market dynamics through our custom matching
                engine
              </li>
              <li>Track portfolio performance with virtual coins</li>
              <li>Participate in community voting for new stock additions</li>
              <li>Compete against automated trading bots</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              <strong className="text-orange-500">Important:</strong> This is a
              simulation platform for educational and entertainment purposes
              only. No real money is involved, and no actual securities are
              traded.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. User Accounts
            </h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              3.1 Account Creation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To use Face Value, you must sign in using your Google account
              through our OAuth integration. You are responsible for maintaining
              the security of your Google account credentials.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              3.2 Account Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You must provide accurate information during sign-up</li>
              <li>You are responsible for all activity under your account</li>
              <li>You must notify us immediately of any unauthorized access</li>
              <li>You may not share your account with others</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              3.3 Account Termination
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate your account at any
              time for violation of these terms or for any other reason at our
              sole discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Virtual Currency and Trading
            </h2>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              4.1 Virtual Coins
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Users receive virtual coins for trading on the platform. These
              coins have no real-world value and cannot be exchanged for real
              currency, goods, or services.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              4.2 Simulated Trading
            </h3>
            <p className="text-gray-300 leading-relaxed">
              All trades on Face Value are simulated. The platform uses a custom
              matching engine that mimics real exchange behavior, but no actual
              securities are bought or sold.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">
              4.3 No Financial Advice
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Face Value does not provide financial, investment, or trading
              advice. The platform is for educational and entertainment purposes
              only. Any strategies or patterns observed on the platform should
              not be applied to real-world trading.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Prohibited Conduct
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Use automated scripts or bots (except official platform bots) to
                interact with the Platform
              </li>
              <li>Attempt to manipulate the matching engine or exploit bugs</li>
              <li>
                Interfere with or disrupt the Platform&apos;s infrastructure
              </li>
              <li>
                Attempt to gain unauthorized access to other users&apos;
                accounts
              </li>
              <li>Use the Platform for any illegal purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Reverse engineer or decompile any part of the Platform</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All content on Face Value, including but not limited to the
              matching engine, user interface, graphics, logos, and software, is
              the property of Face Value or its licensors and is protected by
              intellectual property laws. You may not copy, modify, distribute,
              or create derivative works without our explicit permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              7. User Content
            </h2>
            <p className="text-gray-300 leading-relaxed">
              When you submit suggestions for new CEO stocks or participate in
              voting, you grant us a non-exclusive, royalty-free license to use,
              display, and modify that content for the operation of the
              Platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE
              UNINTERRUPTED, SECURE, OR ERROR-FREE. WE MAKE NO REPRESENTATIONS
              ABOUT THE ACCURACY OR COMPLETENESS OF ANY CONTENT ON THE PLATFORM.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FACE VALUE AND ITS
              DEVELOPERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR
              RELATED TO YOUR USE OF THE PLATFORM.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless Face Value and its
              developers from any claims, damages, losses, or expenses arising
              from your use of the Platform or violation of these Terms of
              Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Modifications to Service
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the
              Platform at any time without notice. We may also reset virtual
              balances, trading history, or other data at our discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service shall be governed by and construed in
              accordance with applicable laws, without regard to conflict of law
              principles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-orange-500 mt-2">
              Mail:{" "}
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
