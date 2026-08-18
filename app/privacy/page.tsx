import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Giggle N Shine",
  description:
    "Read the Giggle N Shine privacy policy covering child data, family information, analytics, security, and privacy rights.",
};

const sections = [
  { id: "relationship", label: "Our Relationship" },
  { id: "information-we-process", label: "Information We Process" },
  { id: "automatic-info", label: "Automatic Collection" },
  { id: "analytics", label: "Analytics" },
  { id: "how-we-use", label: "How We Use Information" },
  { id: "disclosure", label: "How We Disclose Information" },
  { id: "do-not-sell", label: "No Sale of Information" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Data Security" },
  { id: "push-notifications", label: "Push Notifications" },
  { id: "authentication", label: "Account Authentication" },
  { id: "support", label: "Support" },
  { id: "de-identified", label: "De-Identified Information" },
  { id: "rights", label: "Privacy Rights" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "us-services", label: "United States Services" },
  { id: "changes", label: "Policy Updates" },
  { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <Navbar />

      <div className="pt-32 pb-20">
        <section className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="px-6 py-10 md:px-10 md:py-12">
              <div className="mb-4 inline-block">
                <span className="inline-block rounded-full bg-[#F97066]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#F97066]">
                  Legal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Last Updated: August 16, 2026
              </p>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 md:px-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Overview
              </p>
              <p className="max-w-3xl text-base text-slate-600 leading-relaxed">
                This policy explains how Panaceata Inc. collects, uses, shares,
                and protects personal information in connection with the Giggle N
                Shine platform and related services.
              </p>
            </div>
          </div>

          <div className="mb-10 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contents
            </p>
            <div className="flex flex-wrap gap-2">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-200 hover:text-[#F97066]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section id="relationship" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                1. Our Relationship With Childcare Providers
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  <strong>Panaceata Inc.</strong> (&ldquo;Panaceata,&rdquo; "we," "us," or
                  "our") provides the Giggle N Shine childcare management platform and related
                  applications and services (collectively, the "Services").
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, disclose, and protect Personal
                  Information in connection with the Services, including the <strong>Giggle N Shine for
                  Families</strong> application and the <strong>Giggle N Shine – Staff</strong>
                  application.
                </p>
                <p>
                  Giggle N Shine is a software platform that enables childcare providers to manage
                  information relating to their childcare programs and communicate information to
                  parents and guardians. <strong>Panaceata is not a childcare provider.</strong>
                </p>
                <p>
                  This Privacy Policy applies to our Services offered in the United States.
                </p>
                <p>
                  Childcare providers use Giggle N Shine to manage their childcare programs and
                  information relating to children and families they serve. Much of the information
                  available through Giggle N Shine, including information about children, is entered,
                  maintained, and controlled by the childcare provider ("Provider Data"). Panaceata
                  processes Provider Data on behalf of childcare providers to provide the Services and
                  in accordance with our agreements with those providers.
                </p>
                <p>
                  Childcare providers determine the information they collect about children and families
                  and are responsible for their collection and use of that information, including
                  providing any notices and obtaining any permissions or consents required by
                  applicable law.
                </p>
                <p>
                  Panaceata does not sell Provider Data or use Provider Data for advertising or
                  independent marketing purposes.
                </p>
                <p>
                  Parents and guardians who have questions about information concerning their child
                  that was entered or maintained by a childcare provider should generally contact the
                  childcare provider directly. Panaceata will assist childcare providers in responding
                  to appropriate privacy requests as required by applicable law and our contractual
                  obligations.
                </p>
              </div>
            </section>

            <section id="information-we-process" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                2. Information We Process
              </h2>

              <div className="space-y-7 text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Information About Children</h3>
                  <p className="mb-3">
                    Childcare providers may enter and maintain information about children enrolled in
                    their programs. Depending on the provider&apos;s use of Giggle N Shine, this may
                    include:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Name and date of birth</li>
                    <li>Gender</li>
                    <li>Profile photographs</li>
                    <li>Parent and guardian information</li>
                    <li>Emergency contacts</li>
                    <li>Authorized pickup persons</li>
                    <li>Classroom and enrollment information</li>
                    <li>Attendance and check-in/check-out records</li>
                    <li>Meals and feeding information</li>
                    <li>Nap and sleep information</li>
                    <li>Diapering and toileting information</li>
                    <li>Activities and daily care information</li>
                    <li>Photographs and videos</li>
                    <li>Incident reports</li>
                    <li>Allergy information</li>
                    <li>Medical conditions and health-related information</li>
                    <li>Medication information</li>
                    <li>Immunization or vaccination information</li>
                    <li>Healthcare provider information</li>
                    <li>Developmental or learning observations</li>
                    <li>Documents and forms</li>
                    <li>Other information a childcare provider determines is appropriate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Parent and Guardian Information</h3>
                  <p className="mb-3">
                    Childcare providers may provide information about parents, guardians, family members,
                    emergency contacts, and authorized pickup persons, including:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Telephone number</li>
                    <li>Address</li>
                    <li>Relationship to the child</li>
                    <li>Profile information</li>
                    <li>Emergency contact information</li>
                    <li>Authorized pickup information</li>
                    <li>Other information maintained by the childcare provider</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Childcare Provider and Staff Information</h3>
                  <p>
                    We may process information about childcare provider personnel, including name,
                    email address, phone number, job role, childcare center affiliation, account
                    credentials, communications, and support request information.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Photos and Videos</h3>
                  <p>
                    Authorized childcare provider staff may upload photographs and videos through Giggle
                    N Shine and make them available to authorized parents and guardians. Parents and
                    guardians may view photographs and videos made available to them through the Family
                    application. Photographs and videos containing children are treated as Provider Data
                    and are processed to provide the Services on behalf of the applicable childcare provider.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Communications</h3>
                  <p>
                    Giggle N Shine enables childcare provider staff and families to communicate through
                    the Services. We process these communications as necessary to transmit, store,
                    display, and otherwise provide the communication functionality requested by childcare
                    providers and users.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Check-In and Check-Out Information</h3>
                  <p>
                    Giggle N Shine supports onsite child check-in and check-out using provider-operated
                    kiosks. Depending on the childcare provider&apos;s configuration, authorized individuals
                    may check a child in or out using a PIN or by scanning a dynamic QR code.
                  </p>
                  <p className="mt-3">
                    Giggle N Shine does <strong>not</strong> use GPS or other device location tracking
                    to verify child check-in or check-out. We do not collect biometric information such
                    as facial recognition data or fingerprints for this purpose.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">Payment Information</h3>
                  <p>
                    Giggle N Shine does not currently collect or process tuition payments, credit card
                    information, bank account information, or other payment information through the
                    Services.
                  </p>
                </div>
              </div>
            </section>

            <section id="automatic-info" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                3. Information Collected Automatically
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  When users access or use the Services, we may automatically collect certain technical
                  and usage information, such as IP address, device type, operating system, browser type,
                  application version, device identifiers, dates and times of access, application interactions,
                  performance information, diagnostic information, and crash and error information.
                </p>
                <p>
                  We use this information to operate, maintain, secure, troubleshoot, and understand the
                  performance and use of the Services. Where appropriate, we may aggregate or de-identify
                  usage information so that it does not reasonably identify an individual.
                </p>
              </div>
            </section>

            <section id="analytics" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                4. Analytics
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We use analytics technologies, including Google Analytics and Firebase Analytics, to
                  help us understand how our Services are used, identify technical issues, evaluate
                  application performance, and improve the functionality and reliability of Giggle N Shine.
                </p>
                <p>
                  We do not use analytics technologies for behavioral advertising or to build advertising
                  profiles of children or families. Giggle N Shine does not contain third-party advertising
                  trackers.
                </p>
              </div>
            </section>

            <section id="how-we-use" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                5. How We Use Information
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We use Personal Information and Provider Data as necessary to provide, maintain,
                  support, and secure the Services. This includes using information to provide the
                  Giggle N Shine platform, maintain authorized accounts, authenticate users, support
                  child attendance and communication, share updates with families, send notifications,
                  provide customer support, troubleshoot technical issues, maintain security, prevent
                  fraud and abuse, analyze performance, improve reliability and usability, comply with
                  legal obligations, and enforce our agreements.
                </p>
                <p>
                  Panaceata does not use Provider Data for unrelated commercial purposes.
                </p>
              </div>
            </section>

            <section id="disclosure" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                6. How We Disclose Information
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>We do not sell Personal Information or Provider Data.</p>
                <p>
                  We may disclose information to childcare providers, parents and guardians, service
                  providers, and in limited legal and safety circumstances. Our service providers include
                  cloud infrastructure vendors, analytics providers, notification services, authentication
                  providers, and security-related tools. Our infrastructure is hosted using Amazon Web
                  Services (AWS). We use Google Analytics, Firebase Analytics, Apple Push Notification
                  Service (APNs), Firebase Cloud Messaging (FCM), and may support authentication through
                  Google or Apple.
                </p>
                <p>
                  We may also disclose information if we reasonably believe disclosure is necessary to
                  comply with legal obligations, protect rights and safety, address fraud or security
                  incidents, or enforce agreements and policies. In business transactions, information
                  may also be transferred as part of a merger, acquisition, financing, or similar event.
                </p>
              </div>
            </section>

            <section id="do-not-sell" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                7. We Do Not Sell Personal Information
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Panaceata does <strong>not sell Personal Information or Provider Data</strong>,
                  including information concerning children.
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>We do not sell children&apos;s Personal Information.</li>
                  <li>We do not sell parent or guardian Personal Information.</li>
                  <li>We do not use children&apos;s Personal Information for targeted or behavioral advertising.</li>
                  <li>We do not disclose Provider Data to third parties for their independent advertising or marketing purposes.</li>
                  <li>We do not display third-party advertising within the Giggle N Shine applications.</li>
                </ul>
              </div>
            </section>

            <section id="childrens-privacy" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                8. Children&apos;s Privacy
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Giggle N Shine is designed for use by childcare providers, their staff, parents,
                  guardians, and other authorized adults. <strong>Children do not create Giggle N Shine
                  accounts and are not intended to directly use the Services.</strong>
                </p>
                <p>
                  Information concerning children is entered into and maintained through Giggle N Shine by
                  childcare providers and their authorized staff and is made available to authorized parents
                  and guardians as part of the childcare provider&apos;s use of the Services.
                </p>
                <p>
                  Panaceata processes such information to provide the Services to childcare providers and
                  families and does not use children&apos;s information for advertising or unrelated commercial
                  purposes.
                </p>
                <p>
                  Childcare providers are responsible for managing their relationships with parents and
                  guardians, including obtaining any authorizations or consents required for the provider&apos;s
                  collection and use of children&apos;s information.
                </p>
                <p>
                  Parents or guardians who wish to review, correct, or request deletion of information
                  concerning their child that was entered or maintained by a childcare provider should contact
                  the childcare provider directly. Panaceata will cooperate with childcare providers in
                  responding to such requests as appropriate and as required by applicable law.
                </p>
              </div>
            </section>

            <section id="retention" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                9. Data Retention
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We retain Personal Information for as long as necessary to provide the Giggle N Shine
                  Services and fulfill the purposes for which the information was collected, as described
                  in this Privacy Policy. We may also retain information as reasonably necessary to comply
                  with legal obligations, resolve disputes, maintain security, enforce agreements, and protect legal rights.
                </p>
                <p>
                  Information entered into Giggle N Shine by or on behalf of a childcare provider,
                  including information relating to children and families, is controlled by the applicable
                  childcare provider. Our retention and deletion of such information is subject to our
                  agreement with the childcare provider, the provider&apos;s instructions, and applicable law.
                </p>
                <p>
                  When information is no longer required for the purposes for which it was collected, we may
                  delete, de-identify, or aggregate it, subject to applicable legal and contractual
                  requirements. Information may remain for a limited period in backups and disaster-recovery
                  systems before being overwritten or deleted through our normal retention processes.
                </p>
              </div>
            </section>

            <section id="security" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                10. Data Security
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We maintain administrative, technical, and organizational safeguards designed to protect
                  information processed through Giggle N Shine against unauthorized access, disclosure,
                  alteration, loss, or misuse. Access to Provider Data is limited based on authorized roles
                  and the functionality necessary to provide and support the Services.
                </p>
                <p>
                  No method of transmitting or storing information is completely secure, however, and we
                  cannot guarantee absolute security. Childcare providers and users are responsible for
                  protecting their account credentials and should notify us or their childcare provider
                  promptly if they believe their account has been accessed without authorization.
                </p>
              </div>
            </section>

            <section id="push-notifications" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                11. Push Notifications
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Users may receive push notifications relating to childcare activities, communications,
                  announcements, or other Giggle N Shine functionality. We use services including Apple
                  Push Notification Service and Firebase Cloud Messaging to deliver these notifications.
                </p>
                <p>
                  Users may control push notification permissions through their mobile device settings.
                </p>
              </div>
            </section>

            <section id="authentication" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                12. Account Authentication
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Giggle N Shine may allow users to authenticate using credentials provided directly
                  through the Services or through third-party authentication providers, such as Google or Apple.
                </p>
                <p>
                  When a user chooses a third-party authentication provider, we may receive information
                  necessary to authenticate the user&apos;s account, such as the user&apos;s name, email
                  address, or account identifier, depending on the user&apos;s settings and the authentication
                  provider.
                </p>
              </div>
            </section>

            <section id="support" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                13. Support
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Childcare provider staff may submit support requests to Panaceata. We operate an
                  internally developed support system to manage these requests. We may process contact
                  information, account information, communications, technical information, and other
                  information submitted in connection with a support request as necessary to investigate
                  and resolve the issue.
                </p>
                <p>
                  Users should avoid including unnecessary sensitive information in support requests.
                </p>
              </div>
            </section>

            <section id="de-identified" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                14. De-Identified and Aggregated Information
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We may create and use aggregated or de-identified information that cannot reasonably be
                  used to identify a particular child, parent, guardian, staff member, or other individual.
                </p>
                <p>
                  We may use such information to understand how Giggle N Shine is used, measure performance,
                  improve our Services, troubleshoot issues, enhance security, and develop application
                  functionality. We do not attempt to re-identify information that has been de-identified
                  except as permitted by applicable law, such as when necessary to determine whether our
                  de-identification processes are effective.
                </p>
              </div>
            </section>

            <section id="rights" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                15. Privacy Rights and Choices
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Depending on where an individual resides and applicable law, individuals may have rights
                  regarding their Personal Information, which may include rights to request access,
                  correction, deletion, or information regarding how Personal Information is processed.
                </p>
                <p>
                  These rights may be subject to exceptions and limitations under applicable law.
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">Provider-Controlled Information</h3>
                <p>
                  If your request concerns information about a child or family that was entered or maintained
                  by a childcare provider, please contact that childcare provider directly. The childcare
                  provider controls that information and is generally best positioned to authenticate the
                  request and determine how the information should be handled.
                </p>
                <p>
                  Panaceata will reasonably assist childcare providers in responding to valid privacy
                  requests where appropriate and as required by applicable law.
                </p>

                <h3 className="mt-4 text-xl font-bold text-slate-900">Information Controlled by Panaceata</h3>
                <p>
                  For Personal Information controlled directly by Panaceata, you may contact us at <a href="mailto:info@gigglenshine.com" className="text-[#F97066] hover:text-[#E85D53] underline transition-colors">info@gigglenshine.com</a>.
                </p>
                <p>
                  We may need to verify your identity before completing certain requests.
                </p>
              </div>
            </section>

            <section id="rights-state" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                16. U.S. State Privacy Rights
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Certain U.S. state privacy laws may provide residents with additional rights regarding
                  their Personal Information. Where such laws apply to Panaceata&apos;s processing of Personal
                  Information, we will honor applicable rights and requirements.
                </p>
                <p>
                  When Panaceata processes Provider Data on behalf of a childcare provider, Panaceata
                  generally acts as a service provider, processor, or similar role as defined under
                  applicable privacy laws and processes such information in accordance with the childcare
                  provider&apos;s instructions, our contractual obligations, and applicable law.
                </p>
                <p>
                  We do not sell Personal Information or process Personal Information for targeted
                  advertising through Giggle N Shine.
                </p>
              </div>
            </section>

            <section id="third-party-services" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                17. Third-Party Services
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  The Services may interact with or rely upon third-party services, including infrastructure,
                  analytics, authentication, and notification providers. Those third parties may have their
                  own privacy policies governing information they independently process.
                </p>
                <p>
                  Panaceata is not responsible for the privacy practices of third-party websites or services
                  that are not controlled by Panaceata.
                </p>
              </div>
            </section>

            <section id="us-services" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                18. United States Services
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  Giggle N Shine is currently intended for childcare providers and families in the United
                  States. Our Services and infrastructure may process and store information in the United States.
                </p>
                <p>
                  If the Services are made available in additional countries or jurisdictions in the future,
                  we may update this Privacy Policy and our privacy practices as appropriate.
                </p>
              </div>
            </section>

            <section id="changes" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                19. Changes to This Privacy Policy
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically to reflect changes to our Services,
                  privacy practices, technology, or legal requirements. When we make changes, we will update
                  the "Last Updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  If we make material changes, we may provide additional notice through the Services, by email,
                  on our website, or through other appropriate means. We encourage users to review this
                  Privacy Policy periodically.
                </p>
              </div>
            </section>

            <section id="contact-us" className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-slate-900">
                20. Contact Us
              </h2>
              <div className="space-y-5 text-base text-slate-600 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy or Panaceata&apos;s privacy practices,
                  you may contact us at:
                </p>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">Panaceata Inc.</p>
                  <p>Connecticut, United States</p>
                  <p className="mt-2">
                    Email: <a href="mailto:info@gigglenshine.com" className="text-[#F97066] hover:text-[#E85D53] underline transition-colors">info@gigglenshine.com</a>
                  </p>
                  <p>
                    Website: <Link href="/" className="text-[#F97066] hover:text-[#E85D53] underline transition-colors">www.gigglenshine.com</Link>
                  </p>
                </div>
                <p>
                  If your request concerns information about a child that is maintained by your childcare
                  provider through Giggle N Shine, please contact the childcare provider first.
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
