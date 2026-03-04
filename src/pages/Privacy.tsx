import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Header />
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="mb-6 text-sm text-muted-foreground">Last updated: February 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">1. Introduction</h2>
              <p>Advertza ("we", "our", "us") is a digital marketing agency with offices in India and the United Kingdom. We are committed to protecting your privacy and handling your personal data transparently. This Privacy Policy explains how we collect, use, store, and share your information when you visit our website or engage our services.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, company name, and job title when you fill out a contact form, request an audit, or subscribe to our communications.</li>
                <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and click patterns collected automatically through cookies and analytics tools.</li>
                <li><strong className="text-foreground">Marketing Data:</strong> Campaign performance data, advertising account access (with your permission), and conversion tracking data necessary to deliver our services.</li>
                <li><strong className="text-foreground">Communication Data:</strong> Records of correspondence when you contact us via email, phone, WhatsApp, or our contact form.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">3. How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To provide and manage our digital marketing services</li>
                <li>To respond to your enquiries and provide customer support</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyse website traffic and marketing campaign performance</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">4. Cookies & Tracking Technologies</h2>
              <p>We use cookies, pixels, and similar tracking technologies to enhance your browsing experience, analyse site traffic, and measure the effectiveness of our marketing campaigns. These include Google Analytics 4, Meta Pixel, TikTok Pixel, and other advertising platform tracking codes. You can manage cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">5. Data Sharing & Third Parties</h2>
              <p className="mb-3">We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Advertising platforms (Google, Meta, TikTok, Amazon) to manage your campaigns</li>
                <li>Analytics and CRM tools necessary to deliver our services</li>
                <li>Email marketing providers for communications you have opted into</li>
                <li>Legal authorities if required by law or to protect our legal rights</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">6. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encrypted connections (SSL/TLS), access controls, and regular security assessments.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">7. Data Retention</h2>
              <p>We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 24 months. Client data is retained for the duration of the service agreement plus 12 months.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">8. Your Rights</h2>
              <p className="mb-3">Under applicable data protection laws (including GDPR and India's DPDP Act), you have the right to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">9. International Transfers</h2>
              <p>As we operate in both India and the United Kingdom, your data may be transferred between these jurisdictions. We ensure appropriate safeguards are in place for all international data transfers in compliance with applicable laws.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <p className="mt-2">
                <strong className="text-foreground">Email:</strong> hello@advertza.com<br />
                <strong className="text-foreground">Phone:</strong> +91 886 656 7359<br />
                <strong className="text-foreground">Address:</strong> 16, Sai Baba Society, Pandesara, Surat, India
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;
