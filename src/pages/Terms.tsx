import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Header />
    <main className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-extrabold text-foreground">Terms of Service</h1>
          <p className="mb-6 text-sm text-muted-foreground">Last updated: February 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p>By accessing or using the Advertza website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services. These terms apply to all visitors, clients, and users of our website and digital marketing services.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">2. Our Services</h2>
              <p className="mb-3">Advertza provides digital marketing services including but not limited to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Pay-per-click advertising management (Google Ads, Meta Ads, TikTok Ads, Amazon Ads)</li>
                <li>Marketplace advertising and optimisation</li>
                <li>eCommerce platform marketing (Shopify, WooCommerce, BigCommerce, Magento)</li>
                <li>Conversion Rate Optimisation (CRO)</li>
                <li>Email and SMS marketing</li>
                <li>Creative services and content production</li>
                <li>Analytics, reporting, and data strategy</li>
                <li>Influencer marketing management</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">3. Client Obligations</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide accurate and complete information necessary for campaign management</li>
                <li>Grant timely access to advertising accounts, analytics platforms, and other required tools</li>
                <li>Respond to requests for approvals, feedback, and creative sign-offs in a timely manner</li>
                <li>Ensure that all products, services, and content promoted comply with applicable laws and advertising regulations</li>
                <li>Maintain valid payment methods and settle invoices according to agreed terms</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">4. Fees & Payment</h2>
              <p>Our service fees are outlined in individual client proposals and service agreements. Management fees are separate from advertising spend, which is billed directly by advertising platforms. Payment terms are Net 15 unless otherwise agreed. Late payments may incur a 1.5% monthly interest charge.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">5. Advertising Spend & Results</h2>
              <p>While we employ data-driven strategies and industry best practices, we cannot guarantee specific results, rankings, or return on ad spend. Advertising performance depends on multiple factors including market conditions, competition, product quality, website experience, and budget allocation. We provide transparent reporting on all campaign metrics.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">6. Intellectual Property</h2>
              <p>All content on the Advertza website — including text, graphics, logos, and design — is the property of Advertza and protected by intellectual property laws. Campaign creatives, strategies, and reports created during a service engagement are the client's property upon full payment. Our proprietary tools, processes, and methodologies remain the property of Advertza.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">7. Confidentiality</h2>
              <p>Both parties agree to maintain the confidentiality of proprietary information shared during the engagement, including campaign strategies, performance data, business metrics, and trade secrets. This obligation survives the termination of the service agreement for a period of 24 months.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">8. Termination</h2>
              <p>Either party may terminate the service agreement with 30 days' written notice. Upon termination, Advertza will provide a final performance report and transfer all account access and assets to the client. Fees for services rendered up to the termination date remain payable.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">9. Limitation of Liability</h2>
              <p>Advertza shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the 3 months preceding the claim. We are not responsible for actions taken by third-party advertising platforms, including account suspensions, policy changes, or algorithm updates.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">10. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of India for our India operations and the laws of England and Wales for our UK operations. Any disputes shall be resolved through negotiation first, followed by arbitration if necessary.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">11. Changes to Terms</h2>
              <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">12. Contact</h2>
              <p>For questions regarding these Terms of Service, please contact us:</p>
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

export default Terms;
