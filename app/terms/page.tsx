import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Giggle N Shine",
  description:
    "Read the Giggle N Shine terms and conditions covering accounts, subscriptions, parent payments, acceptable use, children’s information, and dispute resolution.",
};

const linkClass =
  "text-[#F97066] hover:text-[#E85D53] underline transition-colors";

const sections = [
  { id: "agreement", label: "Agreement" },
  { id: "definitions", label: "Definitions" },
  { id: "eligibility", label: "Who May Use" },
  { id: "accounts", label: "Accounts & Security" },
  { id: "center-responsibilities", label: "Center Responsibilities" },
  { id: "subscriptions", label: "Subscriptions & Billing" },
  { id: "parent-payments", label: "Parent Payments" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "customer-data", label: "Customer Data & Privacy" },
  { id: "communications", label: "Communications" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "availability", label: "Availability & Safe Use" },
  { id: "warranties", label: "Disclaimer of Warranties" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "disputes", label: "Dispute Resolution" },
  { id: "general", label: "General Provisions" },
  { id: "contact-us", label: "Contact Us" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="mb-4 text-[1.375rem] md:text-[1.75rem] font-bold text-slate-900">
        {title}
      </h2>
      <div className="space-y-5 text-base text-slate-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Mail({ to }: { to: string }) {
  return (
    <a href={`mailto:${to}`} className={linkClass}>
      {to}
    </a>
  );
}

const PrivacyLink = () => (
  <Link href="/privacy" className={linkClass}>
    Privacy Policy
  </Link>
);

export default function TermsPage() {
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
              <h1 className="text-[2rem] md:text-[2.625rem] font-bold text-slate-900 leading-tight">
                Terms and Conditions
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Last Updated: November 19, 2026
              </p>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 md:px-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Overview
              </p>
              <p className="max-w-3xl text-base text-slate-600 leading-relaxed">
                These Terms govern your access to and use of the Giggle N Shine
                child care management platform offered by Panaceata Inc.,
                including our website, web application, and mobile apps.
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
            <Section id="agreement" title="1. Agreement to These Terms">
              <p>
                These Terms and Conditions (“Terms”) govern your access to and
                use of Giggle N Shine, the child care management platform
                offered by <strong>Panaceata Inc.</strong>, a Delaware
                corporation (“Panaceata,” “Giggle N Shine,” “we,” “us,” or
                “our”). The platform includes the website at
                www.gigglenshine.com, the Giggle N Shine web application, the
                Giggle N Shine mobile apps for iOS and Android, and all related
                features and support (together, the “Services”).
              </p>
              <p>
                The Services are a business tool for child care centers. They
                are used only by a center’s authorized staff and by the parents
                or legal guardians of children enrolled at that center.
                Children do not use the Services.
              </p>
              <p>
                By creating an account, accepting an invitation, clicking “I
                agree,” or otherwise using the Services, you agree to these
                Terms and to our <PrivacyLink />. If you accept these Terms on
                behalf of a child care center, you confirm that you have
                authority to bind that center, and “you” includes the center.
                If you do not agree, do not use the Services.
              </p>
              <p>
                If a center has signed a separate subscription agreement or
                order form with us, that document controls where it conflicts
                with these Terms.
              </p>
              <p className="rounded-2xl border border-[#F97066]/20 bg-[#F97066]/5 p-5 font-bold text-slate-900">
                PLEASE READ SECTION 18 CAREFULLY. IT REQUIRES MOST DISPUTES TO
                BE RESOLVED THROUGH INDIVIDUAL BINDING ARBITRATION AND WAIVES
                YOUR RIGHT TO A JURY TRIAL OR CLASS ACTION.
              </p>
            </Section>

            <Section id="definitions" title="2. Definitions">
              <p>Capitalized words in these Terms have the meanings below.</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>“Center”</strong> means a child care center, daycare,
                  preschool, licensed home-based child care provider, or similar
                  program that subscribes to the Services.
                </li>
                <li>
                  <strong>“Center Administrator”</strong> means the owner,
                  director, or other person a Center designates to manage its
                  account, users, settings, and billing.
                </li>
                <li>
                  <strong>“Staff User”</strong> means an employee or contractor
                  of a Center whom the Center has authorized to use the Services
                  to perform their job duties.
                </li>
                <li>
                  <strong>“Parent User”</strong> means a parent or legal
                  guardian of an Enrolled Child whom the Center has invited to
                  use the Services.
                </li>
                <li>
                  <strong>“Authorized User”</strong> means a Staff User or a
                  Parent User. Center Administrators are also Staff Users.
                </li>
                <li>
                  <strong>“Enrolled Child”</strong> means a child enrolled at a
                  Center whose information is entered into the Services.
                </li>
                <li>
                  <strong>“Customer Data”</strong> means all information and
                  content submitted to the Services by or for a Center or its
                  Authorized Users. This includes family and staff profiles,
                  attendance, billing and payment records, messages, lesson and
                  meal plans, activity and incident reports, documents, photos,
                  and videos.
                </li>
                <li>
                  <strong>“Child Data”</strong> means Customer Data that
                  identifies or relates to an Enrolled Child, including name,
                  date of birth, photos, attendance, health, allergy,
                  medication, immunization, dietary, developmental, and incident
                  records.
                </li>
                <li>
                  <strong>“Subscription”</strong> means the Giggle N Shine plan
                  a Center purchases, as described on our website, in the app,
                  or in an order form.
                </li>
                <li>
                  <strong>“Parent Payments”</strong> means tuition, fees, and
                  other amounts a Parent User pays to a Center through the
                  Services.
                </li>
              </ul>
            </Section>

            <Section id="eligibility" title="3. Who May Use the Services">
              <p>
                The Services are only for adults connected to a Center as staff
                or as a parent or guardian. You may use the Services only if all
                of the following are true:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  You are at least 18 years old (or the age of majority where
                  you live) and can form a binding contract.
                </li>
                <li>
                  You are a Staff User or Parent User whom a Center has invited
                  or approved.
                </li>
                <li>Applicable law does not prohibit your use of the Services.</li>
              </ul>
              <p>
                <strong>Children may not use the Services.</strong> The Services
                are not designed for or directed to children, and children may
                not create accounts. Information about Enrolled Children is
                entered by Centers and, where a Center allows it, by their
                parents or guardians. We do not knowingly collect personal
                information directly from a child. If we learn that a child has
                created an account, we will close it.
              </p>
              <p>
                <strong>Access is set by the Center.</strong> Each Center decides
                who receives access and what each person can see. A Parent User
                may see only information about their own Enrolled Child or
                Children and the communications the Center shares with them. A
                Staff User may see only what their Center Administrator’s
                permission settings allow.
              </p>
              <p>
                <strong>Custody and access questions.</strong> Centers decide
                which parents or guardians may access a child’s information,
                including when a court order or custody arrangement applies.
                Parents and guardians should raise access questions with the
                Center. We do not decide or mediate custody or access disputes.
              </p>
              <p>
                <strong>Permitted purpose.</strong> Staff Users may use the
                Services only to perform their work for their Center. Parent
                Users may use the Services only for personal, non-commercial
                purposes related to their child’s care at the Center.
              </p>
            </Section>

            <Section id="accounts" title="4. Accounts and Security">
              <p>
                You must provide accurate, current, and complete information
                when you create an account, and keep it up to date.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>One person per account.</strong> Each login belongs to
                  one individual. Do not share your credentials or let anyone
                  else use your account. Centers must give each staff member
                  their own login.
                </li>
                <li>
                  <strong>Shared devices.</strong> If a Center uses a shared
                  tablet or check-in device, it must use the access controls the
                  Services provide (such as PINs or kiosk mode). The Center is
                  responsible for all activity on its shared devices.
                </li>
                <li>
                  <strong>Keep credentials safe.</strong> Keep your password
                  confidential and use multi-factor authentication when it is
                  available. Log out of shared or public devices.
                </li>
                <li>
                  <strong>Report problems promptly.</strong> Tell us right away
                  at <Mail to="support@panaceata.com" /> if you suspect
                  unauthorized access to your account or any Customer Data.
                </li>
                <li>
                  <strong>Responsibility.</strong> You are responsible for
                  activity under your account. Each Center is responsible for
                  the activity of its Authorized Users.
                </li>
              </ul>
              <p>
                We may require a password reset, refuse a username, or
                temporarily lock an account if we reasonably believe it is
                needed to protect the Services, a Center, a family, or a child.
              </p>
            </Section>

            <Section id="center-responsibilities" title="5. Center Responsibilities">
              <p>
                Giggle N Shine is a software provider. We are not a child care
                provider, we do not supervise children, and we are not a party
                to any agreement between a Center and its families or staff.
                Each Center agrees to the following:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Licensing and legal compliance.</strong> The Center
                  remains solely responsible for complying with child care
                  licensing, staff-to-child ratio, recordkeeping, health and
                  safety, employment, and other laws that apply to it. Using the
                  Services does not by itself satisfy those obligations.
                </li>
                <li>
                  <strong>Notices and consents.</strong> Before entering
                  information about a child, family member, or staff member, the
                  Center will give any notices and obtain any consents the law
                  requires. This includes consent to capture and share photos
                  and videos of children, to record health information, and to
                  send text messages.
                </li>
                <li>
                  <strong>Accurate records.</strong> The Center is responsible
                  for the accuracy of its Customer Data, including allergy,
                  medication, and dietary information, authorized pickup lists,
                  attendance, incident reports, and billing records.
                </li>
                <li>
                  <strong>User management.</strong> The Center will assign
                  appropriate permissions and promptly remove access for
                  departed staff and for any adult who is no longer authorized
                  to access a child’s information.
                </li>
                <li>
                  <strong>Family agreements.</strong> The Center’s enrollment
                  terms, tuition and fee policies, refund policies, and
                  late-pickup rules are between the Center and its families.
                </li>
                <li>
                  <strong>Its Authorized Users.</strong> The Center will make
                  sure its Staff Users follow these Terms and is responsible for
                  any breach by them.
                </li>
              </ul>
            </Section>

            <Section id="subscriptions" title="6. Subscriptions, Fees, and Billing">
              <p>
                Centers pay for the Services through a Subscription. Parent
                Users and Staff Users do not pay us to use the Services, except
                for any payment processing fees described in Section 7.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Pricing.</strong> Fees are as quoted on our website, in
                  the app, or in an order form, and are stated in U.S. dollars.
                </li>
                <li>
                  <strong>Recurring billing.</strong> When a Center adds a
                  payment method, it authorizes us and our payment processor to
                  charge the Subscription fee at the start of each monthly or
                  annual billing period until the Subscription is canceled.
                </li>
                <li>
                  <strong>Automatic renewal.</strong> Subscriptions renew
                  automatically for the same billing period unless the Center
                  cancels before the renewal date, either in its account
                  settings or by emailing <Mail to="billing@gigglenshine.com" />.
                </li>
                <li>
                  <strong>Free trials.</strong> If we offer a free trial, it
                  converts to a paid Subscription at the end of the trial unless
                  the Center cancels first. We may delete data entered during a
                  trial 30 days after the trial ends if no paid Subscription
                  starts.
                </li>
                <li>
                  <strong>Price changes.</strong> We will give at least 30
                  days’ notice of a price increase. The new price takes effect
                  at the Center’s next renewal. A Center that does not accept
                  the change may cancel before then.
                </li>
                <li>
                  <strong>Taxes.</strong> Fees do not include taxes. The Center
                  is responsible for applicable sales, use, and similar taxes,
                  other than taxes on our income.
                </li>
                <li>
                  <strong>Late payment.</strong> If a payment fails or is
                  overdue, we will notify the Center. If it remains unpaid 10
                  days after notice, we may suspend access until the account is
                  current.
                </li>
                <li>
                  <strong>Billing disputes.</strong> A Center must tell us about
                  a billing error within 60 days of the charge so we can
                  investigate and correct it.
                </li>
                <li>
                  <strong>Refunds.</strong> Cancellation takes effect at the end
                  of the current billing period, and the Center keeps access
                  until then. Except where required by law or stated in these
                  Terms, fees already paid are non-refundable and we do not give
                  partial refunds for unused time.
                </li>
              </ul>
            </Section>

            <Section id="parent-payments" title="7. Parent Payments">
              <p>
                The Services let Centers send invoices and, where enabled, let
                Parent Users pay tuition and fees online. Parent Payments are
                processed by our third-party payment processor, Stripe, Inc. We
                are not a bank or money transmitter, and we are not a party to
                the payment arrangement between a Center and its families.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Amounts are set by the Center.</strong> The Center
                  sets tuition, fees, due dates, late fees, discounts, and
                  refund rules. Questions or disputes about an invoice amount
                  should go to the Center.
                </li>
                <li>
                  <strong>Processor terms.</strong> A Center that accepts Parent
                  Payments must accept the processor’s terms (such as the{" "}
                  <a
                    href="https://stripe.com/connect/account-terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Stripe Connected Account Agreement
                  </a>
                  ) and complete any identity and business verification the
                  processor requires.
                </li>
                <li>
                  <strong>Authorization.</strong> When a Parent User makes a
                  payment, they authorize the charge to their chosen payment
                  method. If they turn on autopay, they authorize recurring
                  charges for amounts the Center invoices until they turn
                  autopay off in the app at least 3 business days before the
                  next charge.
                </li>
                <li>
                  <strong>Processing fees.</strong> Card or bank processing fees
                  may be charged to the Center, the Parent User, or both, as
                  disclosed before payment.
                </li>
                <li>
                  <strong>Refunds and chargebacks.</strong> Refunds are issued
                  only when the Center approves them. The Center is responsible
                  for chargebacks, reversals, and related fees, and we may
                  deduct these from the Center’s future payouts.
                </li>
                <li>
                  <strong>Payouts.</strong> Payout timing depends on the
                  processor. We or the processor may delay or hold payouts if we
                  reasonably suspect fraud, a legal violation, or a high risk of
                  chargebacks.
                </li>
                <li>
                  <strong>Card data.</strong> Full card and bank account numbers
                  are handled by the processor. We do not store them on our
                  servers.
                </li>
                <li>
                  <strong>Bank fees.</strong> We are not responsible for
                  overdraft or insufficient-funds fees charged by a Parent
                  User’s bank.
                </li>
              </ul>
            </Section>

            <Section id="acceptable-use" title="8. Acceptable Use">
              <p>
                You will not, and will not help or allow anyone else to:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>
                  Access, or try to access, information about any child or
                  family you are not authorized to see.
                </li>
                <li>
                  Use information from the Services to locate, contact, follow,
                  or monitor a child or family outside your role with the
                  Center.
                </li>
                <li>
                  Copy, download, forward, or post photos, videos, or
                  information about another family’s child outside the Services
                  without that child’s parent’s or guardian’s permission.
                </li>
                <li>
                  Upload content that is unlawful, threatening, harassing,
                  defamatory, obscene, discriminatory, or that exploits or
                  endangers a child in any way.
                </li>
                <li>
                  Impersonate anyone or misrepresent your role or relationship
                  to a child or Center.
                </li>
                <li>
                  Share your login or let an unauthorized person use your
                  account.
                </li>
                <li>
                  Upload viruses or harmful code, or probe, scan, or test the
                  vulnerability of the Services, or bypass any security or
                  access control.
                </li>
                <li>
                  Scrape, crawl, or harvest data from the Services using bots,
                  scripts, AI agents, or other automated tools.
                </li>
                <li>
                  Copy, modify, reverse engineer, or decompile the Services, or
                  use them to build a competing product.
                </li>
                <li>
                  Sell, resell, rent, sublicense, or provide the Services to
                  anyone outside your Center.
                </li>
                <li>
                  Send spam, advertising, or political messages through the
                  Services’ messaging features, or send messages that violate
                  anti-spam or telemarketing laws.
                </li>
                <li>
                  Interfere with or place an unreasonable load on the Services,
                  or use them for any illegal purpose.
                </li>
              </ol>
              <p>
                We may remove content and suspend or close accounts that violate
                this Section.
              </p>
              <p>
                <strong>Child safety concerns.</strong> If you believe a child is
                in immediate danger, call 911. Report suspected child abuse or
                neglect to your state’s child protective services agency. You
                may also report misuse of the Services to us at{" "}
                <Mail to="support@panaceata.com" />.
              </p>
            </Section>

            <Section
              id="customer-data"
              title="9. Customer Data, Children’s Information, and Privacy"
            >
              <p>
                The Center owns its Customer Data, and we use it only to provide
                the Services to that Center.
              </p>
              <p>
                <strong>Ownership.</strong> As between us and a Center, the
                Center owns all Customer Data, including Child Data. Content a
                Parent User or Staff User submits becomes part of the Center’s
                records and is controlled by the Center.
              </p>
              <p>
                <strong>Our role.</strong> We process Customer Data on the
                Center’s behalf and under its instructions, as its service
                provider. The Center decides what information is collected and
                who can see it. Requests from parents or guardians to access,
                correct, or delete a child’s records should go to the Center. If
                we receive one, we will refer it to the Center and help the
                Center respond.
              </p>
              <div>
                <p className="mb-3">
                  <strong>License to us.</strong> Each Center grants us a
                  limited, non-exclusive, royalty-free license to host, store,
                  copy, transmit, display, and process Customer Data only to:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>provide, secure, support, and maintain the Services;</li>
                  <li>prevent fraud and abuse;</li>
                  <li>comply with law; and</li>
                  <li>carry out the Center’s instructions.</li>
                </ul>
              </div>
              <p>
                This license ends when the Customer Data is deleted under
                Section 17.
              </p>
              <p>
                <strong>What we will not do.</strong> We do not sell Customer
                Data or Child Data. We do not use Child Data for advertising or
                to build marketing profiles of children or families. We do not
                use Customer Data to train artificial intelligence models.
              </p>
              <p>
                <strong>De-identified data.</strong> We may create aggregated
                statistics that do not identify any child, family, staff member,
                or Center, and use them to operate and improve the Services. We
                will not try to re-identify that data.
              </p>
              <p>
                <strong>Children’s information.</strong> Because children do not
                use the Services, we do not collect personal information
                directly from children. Each Center represents that it has the
                authority and any parental consent required by law to provide
                Child Data to us.
              </p>
              <p>
                <strong>Photos and videos.</strong> Centers must honor each
                family’s photo and video preferences. Parent Users may use photos
                and videos shared with them only for personal, non-commercial
                purposes. They must not repost images that show other children
                without those children’s parents’ or guardians’ permission.
              </p>
              <p>
                <strong>Education records (FERPA).</strong> If a Center is
                subject to the Family Educational Rights and Privacy Act, we act
                as a “school official” with a legitimate educational interest.
                We remain under the Center’s direct control for the use of
                education records and use them only to provide the Services.
              </p>
              <p>
                <strong>Health information.</strong> Centers may record allergy,
                medication, immunization, and other health information needed to
                care for children. The Services are not a medical records
                system. Unless we sign a separate written agreement, we do not
                act as a HIPAA business associate. Centers should enter only the
                health information needed for care.
              </p>
              <p>
                <strong>Security.</strong> We use reasonable administrative,
                technical, and physical safeguards to protect Customer Data,
                including encryption in transit and at rest. No system is
                perfectly secure. If we confirm that Customer Data was accessed
                without authorization, we will notify the affected Center
                without undue delay and as required by law.
              </p>
              <p>
                <strong>Legal requests.</strong> We may disclose Customer Data if
                required by law, subpoena, or court order. Where the law allows,
                we will notify the Center first so it can seek protection.
              </p>
              <p>
                <strong>Privacy Policy.</strong> Our <PrivacyLink /> explains how
                we handle personal information about account holders and website
                visitors. If the Privacy Policy and this Section conflict on
                Customer Data, this Section controls.
              </p>
            </Section>

            <Section id="communications" title="10. Communications and Text Messages">
              <p>
                <strong>Service messages.</strong> By creating an account, you
                agree to receive emails, push notifications, and in-app messages
                about your account, security, billing, and your Center’s
                updates. You cannot opt out of essential account and security
                messages while your account is active. You can turn off
                non-essential notifications in your settings.
              </p>
              <p>
                <strong>Center messages.</strong> Messages a Center sends through
                the Services, including announcements, daily reports, and chat,
                are the Center’s messages. The Center is responsible for their
                content and for complying with laws that apply to them.
              </p>
              <div>
                <p className="mb-3">
                  <strong>Text messages (SMS).</strong> If you give us your
                  mobile number and opt in, you agree to receive text messages
                  sent through the Services. These may include verification
                  codes, check-in and check-out alerts, reminders, and billing
                  notices.
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Message frequency varies with the features you and your Center use.</li>
                  <li>Message and data rates may apply.</li>
                  <li>
                    Reply <strong>STOP</strong> to opt out or{" "}
                    <strong>HELP</strong> for help.
                  </li>
                  <li>Carriers are not liable for delayed or undelivered messages.</li>
                  <li>Consent to text messages is not a condition of any purchase.</li>
                </ul>
              </div>
              <p>
                <strong>Marketing emails.</strong> We may send Center
                Administrators product news and offers. You can unsubscribe at
                any time using the link in the email.
              </p>
              <p>
                <strong>Not for emergencies.</strong> Messages and alerts in the
                Services are not monitored in real time and may be delayed. Do
                not use them to report an emergency.
              </p>
              <p>
                <strong>Electronic notices.</strong> You agree that notices,
                agreements, and other communications we provide electronically
                satisfy any legal requirement that they be in writing.
              </p>
            </Section>

            <Section id="intellectual-property" title="11. Intellectual Property and Licenses">
              <p>
                <strong>Our property.</strong> We and our licensors own the
                Services, including the software, apps, design, text, graphics,
                and the Giggle N Shine and Panaceata names and logos. These
                Terms do not transfer any ownership to you. We reserve all
                rights not expressly granted.
              </p>
              <div>
                <p className="mb-3">
                  <strong>Your license.</strong> While a Center’s Subscription is
                  active and you follow these Terms, we grant you a limited,
                  non-exclusive, non-transferable, non-sublicensable, revocable
                  right to use the Services:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>for Staff Users, only for their Center’s internal operations; and</li>
                  <li>
                    for Parent Users, only for personal, non-commercial purposes
                    related to their child’s care.
                  </li>
                </ul>
              </div>
              <p>
                <strong>Mobile apps.</strong> You may install our mobile apps on
                devices you own or control, only to use the Services as allowed
                by these Terms.
              </p>
              <p>
                <strong>Apple App Store.</strong> If you download an app from the
                Apple App Store, these Terms are between you and us, not Apple.
                Apple has no obligation to provide maintenance or support for
                the app. Apple is not responsible for any claims relating to the
                app, including product liability, legal compliance, or
                intellectual property claims. To the extent a warranty applies
                and the app fails to conform to it, you may notify Apple for a
                refund of any purchase price. Apple and its subsidiaries are
                third-party beneficiaries of these Terms and may enforce them
                against you. Google Play and other app store terms also apply to
                apps obtained from those stores.
              </p>
              <p>
                <strong>Feedback.</strong> If you send us ideas or suggestions,
                we may use them without any obligation to you.
              </p>
              <p>
                <strong>Copyright complaints.</strong> If you believe content in
                the Services infringes your copyright, send a notice under the
                Digital Millennium Copyright Act to{" "}
                <Mail to="legal@gigglenshine.com" />. We may remove infringing
                content and close the accounts of repeat infringers.
              </p>
            </Section>

            <Section id="third-party" title="12. Third-Party Services">
              <p>
                The Services may connect to or link to products we do not
                control, such as payment processors, app stores, accounting
                software, and calendar or storage tools. Those products are
                governed by their own terms and privacy policies, and we are not
                responsible for them. If a Center turns on an integration, it
                authorizes us to exchange the relevant Customer Data with that
                product.
              </p>
              <p>
                We use trusted service providers, such as cloud hosting, email,
                and text-message vendors, to run the Services. They may process
                Customer Data only to help us provide the Services and must
                protect it under written confidentiality and security
                obligations.
              </p>
            </Section>

            <Section id="availability" title="13. Service Availability and Safe Use">
              <p>
                <strong>Availability.</strong> We work to keep the Services
                available but do not guarantee uninterrupted service. We may
                need downtime for maintenance and will try to schedule it
                outside typical child care hours and announce it in advance.
              </p>
              <p>
                <strong>Changes to the Services.</strong> We may add, change, or
                remove features. We will not materially reduce the core
                features of a paid Subscription during its current billing
                period.
              </p>
              <p>
                <strong>Support.</strong> We provide support by email at{" "}
                <Mail to="support@panaceata.com" /> during business hours,
                Eastern Time.
              </p>
              <div>
                <p className="mb-3">
                  <strong>Not a substitute for supervision or judgment.</strong>{" "}
                  The Services help Centers keep records and communicate with
                  families. They do not replace:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    direct supervision of children, physical headcounts, or
                    ratio checks;
                  </li>
                  <li>
                    a Center’s procedures for verifying a person’s identity at
                    pickup;
                  </li>
                  <li>
                    emergency plans, or medical judgment about allergies,
                    medications, or illness; or
                  </li>
                  <li>
                    the paper or offline records that state licensing rules may
                    require.
                  </li>
                </ul>
              </div>
              <p>
                Notifications, check-in alerts, and messages can be delayed or
                fail. In an emergency, call 911 and contact the child’s parent
                or guardian directly.
              </p>
              <p>
                <strong>Keep your own copies.</strong> Centers should regularly
                export records they are legally required to keep.
              </p>
            </Section>

            <Section id="warranties" title="14. Disclaimer of Warranties">
              <p className="uppercase">
                To the fullest extent permitted by law, the Services are
                provided “as is” and “as available,” without warranties of any
                kind, whether express, implied, or statutory. We disclaim all
                implied warranties, including warranties of merchantability,
                fitness for a particular purpose, title, and non-infringement.
              </p>
              <p className="uppercase">
                We do not warrant that the Services will be uninterrupted,
                error-free, or completely secure, that notifications will be
                delivered on time, or that the Services will meet any Center’s
                licensing or regulatory requirements. We are not responsible for
                the accuracy of information entered by Centers or users, or for
                the care any Center provides.
              </p>
              <p>
                Some states do not allow the exclusion of implied warranties, so
                some of these exclusions may not apply to you.
              </p>
            </Section>

            <Section id="liability" title="15. Limitation of Liability">
              <p className="uppercase">To the fullest extent permitted by law:</p>
              <ol className="ml-6 list-decimal space-y-2 uppercase">
                <li>
                  We and our affiliates, officers, employees, agents, and
                  suppliers will not be liable for any indirect, incidental,
                  special, consequential, exemplary, or punitive damages, or for
                  lost profits, revenue, data, or goodwill, arising out of or
                  relating to these Terms or the Services.
                </li>
                <li>
                  Our total liability for all claims arising out of or relating
                  to these Terms or the Services will not exceed the greater of
                  (a) the amounts the Center paid us for the Services in the 12
                  months before the event giving rise to the claim, or (b) one
                  hundred U.S. dollars ($100).
                </li>
                <li>
                  These limits apply to any theory of liability, whether in
                  contract, tort (including negligence), strict liability, or
                  otherwise, even if we were told such damages were possible.
                </li>
              </ol>
              <p>
                These limits do not apply to liability that cannot be limited by
                law, such as liability for fraud or for gross negligence or
                willful misconduct where the law prohibits limiting it.
              </p>
              <p>
                Any claim against us must be brought within one year after it
                arises, unless applicable law requires a longer period.
              </p>
            </Section>

            <Section id="indemnification" title="16. Indemnification">
              <p>
                To the extent permitted by law, each Center will defend,
                indemnify, and hold harmless Panaceata and its affiliates,
                officers, employees, and agents from third-party claims, losses,
                and expenses (including reasonable attorneys’ fees) arising
                from:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  the Center’s Customer Data, including any claim that the
                  Center lacked required notices or consents;
                </li>
                <li>
                  the care, supervision, and services the Center provides to
                  children and families;
                </li>
                <li>
                  disputes between the Center and its families or staff,
                  including over tuition, refunds, and chargebacks; and
                </li>
                <li>
                  the Center’s or its Staff Users’ breach of these Terms or
                  violation of law.
                </li>
              </ul>
              <p>
                Each individual user will likewise indemnify us for claims
                arising from their own breach of these Terms or misuse of the
                Services. We will notify the indemnifying party of any claim
                promptly and cooperate reasonably in its defense.
              </p>
            </Section>

            <Section id="termination" title="17. Term, Suspension, and Termination">
              <p>These Terms apply for as long as you use the Services.</p>
              <p>
                <strong>Cancellation by a Center.</strong> A Center may cancel
                its Subscription at any time. Cancellation takes effect at the
                end of the current billing period.
              </p>
              <p>
                <strong>Ending user access.</strong> A Staff User’s or Parent
                User’s access ends when their Center removes it or when the
                Center’s Subscription ends. You may also ask us to close your
                account at <Mail to="support@panaceata.com" />.
              </p>
              <div>
                <p className="mb-3">
                  <strong>Suspension or termination by us.</strong> We may
                  suspend or end access to the Services if:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    you or your Center materially breach these Terms, including
                    non-payment;
                  </li>
                  <li>
                    we reasonably believe it is needed to protect the security
                    of the Services or the safety of a child; or
                  </li>
                  <li>the law requires it.</li>
                </ul>
              </div>
              <p>
                We will give notice when practical and, for curable breaches by
                a Center, a reasonable chance to fix the problem.
              </p>
              <p>
                <strong>Effect of termination.</strong> When a Subscription ends,
                access to the Services ends and any unpaid fees become due.
                Sections that by their nature should survive will survive,
                including those on fees owed, data, intellectual property,
                disclaimers, limitation of liability, indemnification, and
                dispute resolution.
              </p>
              <p>
                <strong>Data export and deletion.</strong> For 30 days after a
                Subscription ends, the Center may export its Customer Data using
                the Services’ export tools or by asking us. After that period,
                we will delete Customer Data from our active systems within 90
                days. Backup copies are deleted on our normal backup schedule.
                We may keep data where the law requires it.
              </p>
              <p>
                <strong>Parent Users.</strong> Records about an Enrolled Child
                belong to the Center. Parents and guardians who want copies
                should request them from the Center before leaving it.
              </p>
            </Section>

            <Section id="disputes" title="18. Governing Law and Dispute Resolution">
              <p>
                <strong>Governing law.</strong> These Terms are governed by the
                laws of the State of Connecticut, without regard to
                conflict-of-law rules. The Federal Arbitration Act governs the
                arbitration provisions below.
              </p>
              <p>
                <strong>Try to resolve it informally first.</strong> Before
                starting arbitration or a lawsuit, the party with a dispute must
                send a written description of it to the other party. Send
                notices to us at <Mail to="legal@gigglenshine.com" />. Both
                parties will try in good faith to resolve the dispute within 30
                days.
              </p>
              <p>
                <strong>Binding individual arbitration.</strong> If the dispute
                is not resolved, it will be decided by binding arbitration
                administered by the American Arbitration Association (AAA). The
                AAA Consumer Arbitration Rules apply to individuals using the
                Services for personal purposes. The AAA Commercial Arbitration
                Rules apply to Centers. The arbitration will take place by video
                conference or in Hartford County, Connecticut, unless the
                parties agree otherwise. For individual consumers, we will pay
                AAA filing, administration, and arbitrator fees beyond what the
                consumer would pay to file in court, unless the arbitrator finds
                the claim frivolous.
              </p>
              <p>
                <strong>Exceptions.</strong> Either party may bring an individual
                claim in small claims court. Either party may ask a court for an
                injunction to protect its intellectual property or to stop
                unauthorized access to the Services.
              </p>
              <p>
                <strong>Class action and jury waiver.</strong> You and we may
                bring claims only individually, not as a plaintiff or class
                member in any class, collective, or representative proceeding.
                You and we each waive the right to a jury trial. If this class
                action waiver is found unenforceable, the arbitration agreement
                in this Section does not apply to that dispute.
              </p>
              <p>
                <strong>Right to opt out.</strong> You may opt out of this
                arbitration agreement by emailing{" "}
                <Mail to="legal@gigglenshine.com" /> within 30 days after you
                first accept these Terms. Include your name, your Center’s name,
                and a clear statement that you are opting out.
              </p>
              <p>
                <strong>Courts.</strong> Any dispute not subject to arbitration
                will be heard only in the state or federal courts located in
                Hartford County, Connecticut, and both parties consent to their
                jurisdiction.
              </p>
            </Section>

            <Section
              id="general"
              title="19. Changes to These Terms and General Provisions"
            >
              <p>
                <strong>Changes.</strong> We may update these Terms from time to
                time. We will post the new version on this page and change the
                “Last updated” date. For material changes, we will give at least
                30 days’ notice by email or in the app before they take effect.
                If you keep using the Services after the effective date, you
                accept the updated Terms. Changes will not apply to disputes
                that arose before the change.
              </p>
              <p>
                <strong>Entire agreement.</strong> These Terms, our Privacy
                Policy, and any signed order form are the entire agreement
                between you and us about the Services.
              </p>
              <p>
                <strong>Assignment.</strong> You may not transfer these Terms
                without our written consent. We may transfer them in connection
                with a merger, acquisition, or sale of assets, with notice to
                Centers.
              </p>
              <p>
                <strong>Severability and waiver.</strong> If any part of these
                Terms is unenforceable, the rest stays in effect. Our failure to
                enforce a provision is not a waiver of it.
              </p>
              <p>
                <strong>Force majeure.</strong> Neither party is liable for
                delays caused by events beyond its reasonable control, such as
                natural disasters, internet or utility outages, or government
                action. This does not excuse payment obligations.
              </p>
              <p>
                <strong>Relationship.</strong> The parties are independent
                contractors. These Terms do not create a partnership, joint
                venture, employment, or agency relationship.
              </p>
              <p>
                <strong>No third-party beneficiaries.</strong> Except as stated
                in Section 11 for Apple, no one other than you and us has rights
                under these Terms.
              </p>
              <p>
                <strong>Export laws.</strong> You may not use the Services in
                violation of U.S. export control or sanctions laws.
              </p>
              <p>
                <strong>Customer references.</strong> We may name a Center as a
                customer in our marketing unless the Center asks us not to by
                emailing <Mail to="info@panaceata.com" />. We will never publish
                Child Data or photos of children for marketing.
              </p>
              <p>
                <strong>Notices.</strong> We send notices to the email address on
                your account. You can send notices to us at the address in
                Section 20.
              </p>
            </Section>

            <Section id="contact-us" title="20. Contact Us">
              <p>Questions about these Terms can be sent to:</p>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="font-semibold text-slate-900">
                  Giggle N Shine by Panaceata Inc.
                </p>
                <p>
                  Address: 5 Senator Buck Court, South Glastonbury, CT 06073,
                  USA
                </p>
                <p className="mt-2">
                  Email: <Mail to="info@panaceata.com" />
                </p>
                <p>
                  Website:{" "}
                  <Link href="/" className={linkClass}>
                    www.gigglenshine.com
                  </Link>
                </p>
              </div>
              <p>
                Parents and guardians with questions about their child’s
                records, invoices, or account access should contact their Center
                first.
              </p>
            </Section>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
