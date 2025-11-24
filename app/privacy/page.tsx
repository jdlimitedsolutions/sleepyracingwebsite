export default function PrivacyPage() {
  return (
    <div className="min-h-screen section-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 tracking-wider">PRIVACY POLICY</h1>
        <p className="text-neutral-400 mb-4">Last Updated: November 17, 2024</p>
        <p className="text-neutral-400 mb-12">Effective Date: November 17, 2024</p>

        <div className="mb-12 p-6 bg-neutral-900/50 border border-neutral-800">
          <p className="text-neutral-300 leading-relaxed">
            This Privacy Policy describes how SLEEPY ("we," "us," or "our") collects, uses, shares, and protects your personal information when you use our website, mobile application, and services (collectively, the "Services").
          </p>
        </div>

        <div className="space-y-12 text-neutral-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">TABLE OF CONTENTS</h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><a href="#collection" className="hover:text-white">Information We Collect</a></li>
              <li><a href="#use" className="hover:text-white">How We Use Your Information</a></li>
              <li><a href="#sharing" className="hover:text-white">How We Share Your Information</a></li>
              <li><a href="#cookies" className="hover:text-white">Cookies and Tracking Technologies</a></li>
              <li><a href="#security" className="hover:text-white">Data Security</a></li>
              <li><a href="#retention" className="hover:text-white">Data Retention</a></li>
              <li><a href="#rights" className="hover:text-white">Your Rights and Choices</a></li>
              <li><a href="#children" className="hover:text-white">Children's Privacy</a></li>
              <li><a href="#international" className="hover:text-white">International Transfers</a></li>
              <li><a href="#california" className="hover:text-white">California Privacy Rights</a></li>
              <li><a href="#other-states" className="hover:text-white">Other U.S. State Privacy Rights</a></li>
              <li><a href="#changes" className="hover:text-white">Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </section>

          <section id="collection">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">1. INFORMATION WE COLLECT</h2>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-sleepy-neonBlue">1.1 Information You Provide Directly</h3>
              <p className="mb-4">We collect information you provide when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Create an account:</strong> Name, email address, password, username</li>
                <li><strong>Make a purchase:</strong> Billing and shipping address, payment information, phone number</li>
                <li><strong>Contact support:</strong> Name, email, order number, message content</li>
                <li><strong>Apply for affiliates:</strong> Name, email, social media handles, audience demographics</li>
                <li><strong>Submit content:</strong> Photos, videos, vehicle information, testimonials</li>
                <li><strong>Participate in surveys or promotions:</strong> Responses, preferences, feedback</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3 text-sleepy-neonBlue">1.2 Information Collected Automatically</h3>
              <p className="mb-4">When you use our Services, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage data:</strong> Pages viewed, links clicked, time spent, referral sources</li>
                <li><strong>Location data:</strong> General geographic location based on IP address</li>
                <li><strong>Shopping behavior:</strong> Cart contents, product views, purchase history</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-sleepy-neonBlue">1.3 Information from Third Parties</h3>
              <p className="mb-4">We may receive information from:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Payment processors:</strong> Transaction confirmations, payment status</li>
                <li><strong>Social media:</strong> If you connect social accounts or interact with our social content</li>
                <li><strong>Analytics providers:</strong> Aggregated usage statistics and demographics</li>
                <li><strong>Marketing partners:</strong> Campaign performance data</li>
              </ul>
            </div>
          </section>

          <section id="use">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">2. HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-4">We use collected information for the following purposes:</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">2.1 Service Delivery</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Process and fulfill orders</li>
                  <li>Manage your account and preferences</li>
                  <li>Provide customer support</li>
                  <li>Send transactional communications (order confirmations, shipping updates)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">2.2 Business Operations</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Improve and optimize the Services</li>
                  <li>Develop new products and features</li>
                  <li>Conduct research and analytics</li>
                  <li>Monitor and analyze usage patterns</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">2.3 Marketing and Communications</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Send promotional emails and updates (with your consent)</li>
                  <li>Display personalized advertisements</li>
                  <li>Conduct surveys and request feedback</li>
                  <li>Run contests and promotions</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">2.4 Legal and Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prevent fraud and unauthorized access</li>
                  <li>Comply with legal obligations</li>
                  <li>Enforce our Terms of Service</li>
                  <li>Protect our rights and property</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="sharing">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">3. HOW WE SHARE YOUR INFORMATION</h2>
            <p className="mb-4 font-bold text-white">We do not sell your personal information.</p>
            <p className="mb-4">We may share your information with:</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">3.1 Service Providers</h3>
                <p className="mb-2">Third-party vendors who perform services on our behalf:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Payment processors:</strong> Stripe for secure payment processing</li>
                  <li><strong>Shipping carriers:</strong> To fulfill and deliver orders</li>
                  <li><strong>Email services:</strong> To send transactional and marketing emails</li>
                  <li><strong>Analytics providers:</strong> To understand usage patterns</li>
                  <li><strong>Cloud hosting:</strong> For data storage and Services operation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">3.2 Business Transfers</h3>
                <p>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">3.3 Legal Requirements</h3>
                <p className="mb-2">We may disclose information when required by law or to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Comply with legal process or government requests</li>
                  <li>Enforce our Terms of Service</li>
                  <li>Protect the rights, property, or safety of SLEEPY, users, or others</li>
                  <li>Prevent fraud or security threats</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">3.4 With Your Consent</h3>
                <p>We may share information for other purposes with your explicit consent.</p>
              </div>
            </div>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">4. COOKIES AND TRACKING TECHNOLOGIES</h2>
            <p className="mb-4">
              We use cookies, web beacons, and similar technologies to collect information and improve the Services.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">4.1 Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential cookies:</strong> Required for Services to function (e.g., shopping cart)</li>
                  <li><strong>Analytics cookies:</strong> Help us understand how you use the Services</li>
                  <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">4.2 Cookie Management</h3>
                <p className="mb-2">
                  You can control cookies through your browser settings. Note that disabling cookies may affect Services functionality. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View what cookies are stored</li>
                  <li>Delete some or all cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all third-party cookies</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="security">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">5. DATA SECURITY</h2>
            <p className="mb-4">
              We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="font-bold text-white">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section id="retention">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">6. DATA RETENTION</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Provide the Services and fulfill transactions</li>
              <li>Comply with legal, tax, and accounting obligations (typically 7 years)</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Maintain business records</li>
            </ul>
            <p>
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section id="rights">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">7. YOUR RIGHTS AND CHOICES</h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">7.1 Access and Portability</h3>
                <p>Request a copy of your personal information in a portable format.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">7.2 Correction</h3>
                <p>Request correction of inaccurate or incomplete information.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">7.3 Deletion</h3>
                <p>Request deletion of your personal information (subject to certain exceptions).</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">7.4 Opt-Out of Marketing</h3>
                <p className="mb-2">You can opt out of marketing communications by:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Clicking "unsubscribe" in our emails</li>
                  <li>Contacting us at privacy@sleepyracing.com</li>
                  <li>Updating your account preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">7.5 Do Not Track</h3>
                <p>We do not currently respond to "Do Not Track" browser signals.</p>
              </div>
            </div>

            <p className="mt-6 font-bold text-white">
              To exercise these rights, contact us at privacy@sleepyracing.com. We will respond within 30 days.
            </p>
          </section>

          <section id="children">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">8. CHILDREN'S PRIVACY</h2>
            <p className="mb-4">
              The Services are not intended for children under 13 years of age (or 16 in the European Economic Area). We do not knowingly collect personal information from children.
            </p>
            <p>
              If you are a parent or guardian and believe we have collected information from your child, please contact us immediately at privacy@sleepyracing.com and we will delete it.
            </p>
          </section>

          <section id="international">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">9. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in the United States or other countries where our service providers operate. These countries may have data protection laws different from your country of residence.
            </p>
            <p>
              By using the Services, you consent to the transfer of your information to countries outside your country of residence, including the United States.
            </p>
          </section>

          <section id="california">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">10. CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA)</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white mb-2">10.1 Right to Know</h3>
                <p>You have the right to request:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Categories of personal information collected</li>
                  <li>Sources from which information was collected</li>
                  <li>Business or commercial purpose for collection</li>
                  <li>Categories of third parties with whom we share information</li>
                  <li>Specific pieces of personal information collected</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">10.2 Right to Delete</h3>
                <p>Request deletion of your personal information, subject to certain exceptions.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">10.3 Right to Opt-Out of Sale</h3>
                <p className="font-bold">We do not sell your personal information.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">10.4 Right to Non-Discrimination</h3>
                <p>We will not discriminate against you for exercising your CCPA rights.</p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-2">10.5 Authorized Agents</h3>
                <p>You may designate an authorized agent to make requests on your behalf. We may require proof of authorization.</p>
              </div>
            </div>

            <p className="mt-6">
              To exercise these rights, email privacy@sleepyracing.com or call [Phone Number]. We will verify your identity and respond within 45 days.
            </p>
          </section>

          <section id="other-states">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">11. OTHER U.S. STATE PRIVACY RIGHTS</h2>
            <p className="mb-4">
              If you are a resident of Colorado, Connecticut, Utah, Virginia, or other states with privacy laws, you may have rights similar to those described for California residents, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Right to access your personal information</li>
              <li>Right to delete your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to opt out of targeted advertising</li>
              <li>Right to opt out of sale of personal information</li>
            </ul>
            <p>
              To exercise these rights, contact us at privacy@sleepyracing.com with "State Privacy Rights Request" in the subject line.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">12. CHANGES TO THIS POLICY</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Material changes will be notified by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Posting the updated policy with a new "Last Updated" date</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on the Services</li>
            </ul>
            <p>
              Your continued use of the Services after the effective date constitutes acceptance of the updated policy.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-bold mb-4 tracking-wider text-white">13. CONTACT US</h2>
            <p className="mb-4">
              For questions, concerns, or requests regarding this Privacy Policy or your personal information, contact us:
            </p>
            <div className="bg-neutral-900/50 border border-neutral-800 p-6">
              <p className="mb-2"><strong>Email:</strong> privacy@sleepyracing.com</p>
              <p className="mb-2"><strong>Legal:</strong> legal@sleepyracing.com</p>
              <p className="mb-2"><strong>Support:</strong> Via our Support page</p>
              <p><strong>Mail:</strong> [Your Business Address]</p>
            </div>
          </section>

          <div className="border-t border-neutral-800 pt-8 mt-12">
            <p className="text-sm text-neutral-500 leading-relaxed">
              BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY AND CONSENT TO THE COLLECTION, USE, AND SHARING OF YOUR INFORMATION AS DESCRIBED HEREIN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
