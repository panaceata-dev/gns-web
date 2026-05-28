'use client';

import { Fragment, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Check, Building2, User,
  FileText, CreditCard, Loader2, ExternalLink,
  CheckCircle2, AlertCircle, Lock,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from '@/components/Navbar';
import PaymentForm from '@/components/apply/PaymentForm';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? 'pk_test_placeholder'
);
const API_URL = process.env.NEXT_PUBLIC_PORTAL_API_URL ?? '';

// ── Constants ──────────────────────────────────────────────────────

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

const STEP_LABELS = ['Business', 'Contact', 'Review', 'Plan', 'Payment'];

const PLAN_FEATURES = [
  'Full daycare management dashboard',
  'Parent mobile app access',
  'Student & staff management',
  'Attendance & billing automation',
  'Dedicated cloud environment',
  'Email support',
];

// ── Types ──────────────────────────────────────────────────────────

interface FormData {
  business_name: string;
  tenant_identifier: string;
  ein: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zip: string;
  phone_code: string;
  phone_number: string;
  email: string;
  website: string;
  contact_name: string;
  contact_title: string;
  contact_phone_code: string;
  contact_phone_number: string;
  contact_email: string;
}

type NameCheckResult = {
  available: boolean;
  slug: string;
  url: string;
  suggestions?: { slug: string; url: string }[];
};

const EMPTY_FORM: FormData = {
  business_name: '', tenant_identifier: '', ein: '',
  address_line1: '', address_line2: '', city: '', state: '', zip: '',
  phone_code: '+1', phone_number: '',
  email: '', website: '',
  contact_name: '', contact_title: '',
  contact_phone_code: '+1', contact_phone_number: '',
  contact_email: '',
};

// ── Validation ─────────────────────────────────────────────────────

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate1(d: FormData): Record<string, string> {
  const e: Record<string, string> = {};
  if (!d.business_name.trim()) e.business_name = 'Required';
  if (!d.ein.trim()) e.ein = 'Required';
  if (!d.address_line1.trim()) e.address_line1 = 'Required';
  if (!d.city.trim()) e.city = 'Required';
  if (!d.zip.trim()) e.zip = 'Required';
  if (!d.state) e.state = 'Required';
  if (!d.phone_number.trim()) e.phone_number = 'Required';
  if (!d.email.trim()) e.email = 'Required';
  else if (!emailRe.test(d.email)) e.email = 'Invalid email address';
  if (!d.website.trim()) e.website = 'Required';
  else if (!/^https?:\/\/.+/.test(d.website.trim())) e.website = 'Must start with http:// or https://';
  return e;
}

function validate2(d: FormData): Record<string, string> {
  const e: Record<string, string> = {};
  if (!d.contact_name.trim()) e.contact_name = 'Required';
  if (!d.contact_title.trim()) e.contact_title = 'Required';
  if (!d.contact_phone_number.trim()) e.contact_phone_number = 'Required';
  if (!d.contact_email.trim()) e.contact_email = 'Required';
  else if (!emailRe.test(d.contact_email)) e.contact_email = 'Invalid email address';
  return e;
}

// ── UI primitives ──────────────────────────────────────────────────

function Field({
  label, value, onChange, type = 'text', placeholder = '', error,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm outline-none transition-colors ${
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
            : 'border-slate-200 focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/10'
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function PhoneField({
  label, codeKey, numberKey, formData, onChange, error,
}: {
  label: string;
  codeKey: keyof FormData;
  numberKey: keyof FormData;
  formData: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={formData[codeKey] as string}
          onChange={e => onChange(codeKey, e.target.value)}
          placeholder="+1"
          className="w-20 px-3 py-3 rounded-xl border border-slate-200 focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/10 outline-none text-slate-800 text-sm text-center"
        />
        <input
          type="tel"
          value={formData[numberKey] as string}
          onChange={e => onChange(numberKey, e.target.value.replace(/[^0-9\s\-()]/g, ''))}
          placeholder="555-555-5555"
          className={`flex-1 px-4 py-3 rounded-xl border text-slate-800 text-sm outline-none transition-colors ${
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
              : 'border-slate-200 focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/10'
          }`}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// ── Step Indicator ─────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center mb-10">
      {STEP_LABELS.map((label, i) => (
        <Fragment key={i}>
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              i + 1 < current
                ? 'bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white shadow-md shadow-[#F97066]/25'
                : i + 1 === current
                ? 'bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white shadow-lg shadow-[#F97066]/30 ring-4 ring-[#F97066]/15'
                : 'bg-slate-100 text-slate-400'
            }`}>
              {i + 1 < current ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${
              i + 1 <= current ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div className={`h-0.5 flex-1 mx-2 mb-5 rounded-full transition-all duration-500 ${
              i + 1 < current
                ? 'bg-gradient-to-r from-[#F97066] to-[#FB923C]'
                : 'bg-slate-200'
            }`} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

// ── Step card animation ────────────────────────────────────────────

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

function StepTitle({ icon: Icon, step, subtitle }: {
  icon: React.ElementType; step: number; subtitle: string;
}) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97066]/10 border border-[#F97066]/15 mb-4">
        <Icon className="w-4 h-4 text-[#F97066]" />
        <span className="text-xs font-semibold text-[#E85D53]">Step {step} of 5</span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900">{subtitle}</h2>
    </div>
  );
}

function NavButtons({
  onBack, onNext, loading, nextLabel = 'Next', disabled = false, showBack = true,
}: {
  onBack?: () => void; onNext?: () => void; loading?: boolean;
  nextLabel?: string; disabled?: boolean; showBack?: boolean;
}) {
  return (
    <div className={`mt-8 flex ${showBack ? 'justify-between' : 'justify-end'}`}>
      {showBack && onBack && (
        <button
          onClick={onBack}
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          disabled={disabled || loading}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full px-8 h-12 font-semibold shadow-lg shadow-[#F97066]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
          ) : (
            <>{nextLabel} <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      )}
    </div>
  );
}

// ── Step 1: Business Info ──────────────────────────────────────────

function Step1({
  formData, onChange, onNext, errors,
}: {
  formData: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  onNext: () => void;
  errors: Record<string, string>;
}) {
  const [nameCheck, setNameCheck] = useState<NameCheckResult | null>(null);
  const [nameChecking, setNameChecking] = useState(false);
  const [nameError, setNameError] = useState('');

  useEffect(() => {
    const name = formData.business_name.trim();
    if (name.length < 3) {
      setNameCheck(null);
      setNameError('');
      onChange('tenant_identifier', '');
      return;
    }
    setNameChecking(true);
    setNameCheck(null);
    const timer = setTimeout(async () => {
      try {
        const qs = new URLSearchParams({ name });
        if (formData.state) qs.set('state', formData.state);
        const res = await fetch(`${API_URL}/check-name?${qs}`);
        const data: NameCheckResult = await res.json();
        setNameCheck(data);
        onChange('tenant_identifier', data.available ? data.slug : '');
      } catch {
        setNameCheck(null);
      } finally {
        setNameChecking(false);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [formData.business_name]); // eslint-disable-line

  const selectSuggestion = (s: { slug: string; url: string }) => {
    onChange('tenant_identifier', s.slug);
    setNameCheck(prev => prev ? { ...prev, available: true, slug: s.slug, url: s.url } : prev);
    setNameError('');
  };

  const handleNext = () => {
    if (nameChecking) { setNameError('Please wait for name availability check'); return; }
    if (nameCheck && !nameCheck.available) { setNameError('Please select a suggested name below'); return; }
    setNameError('');
    onNext();
  };

  return (
    <>
      <StepTitle icon={Building2} step={1} subtitle="Tell us about your business" />
      <div className="space-y-5">

        {/* Business Name + availability check */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Name</label>
          <input
            type="text"
            value={formData.business_name}
            placeholder="Sunshine Daycare LLC"
            onChange={e => onChange('business_name', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm outline-none transition-colors ${
              errors.business_name || nameError
                ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
                : nameCheck?.available
                ? 'border-green-300 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                : 'border-slate-200 focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/10'
            }`}
          />
          {nameChecking && (
            <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400">
              <Loader2 className="w-3 h-3 animate-spin" /> Checking availability…
            </div>
          )}
          {nameCheck?.available && (
            <div className="flex items-center gap-1.5 mt-2 text-xs text-green-600">
              <CheckCircle2 className="w-3 h-3" />
              Your app URL: <span className="font-mono font-medium">gns-{nameCheck.slug}.aws.panaceata.com</span>
            </div>
          )}
          {nameCheck && !nameCheck.available && (
            <div className="mt-2">
              <p className="text-xs text-red-500 mb-2">This name is already taken. Pick a suggestion:</p>
              <div className="flex gap-2 flex-wrap">
                {nameCheck.suggestions?.map(s => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => selectSuggestion(s)}
                    className="px-3 py-1.5 rounded-full border border-[#F97066]/30 bg-[#F97066]/5 text-xs font-medium text-[#E85D53] hover:bg-[#F97066]/15 transition-colors"
                  >
                    {s.url}
                  </button>
                ))}
              </div>
            </div>
          )}
          {(errors.business_name || nameError) && (
            <p className="text-xs text-red-500 mt-1">{errors.business_name || nameError}</p>
          )}
        </div>

        <Field
          label="EIN (Tax ID)" value={formData.ein}
          onChange={v => onChange('ein', v)}
          placeholder="12-3456789" error={errors.ein}
        />
        <Field
          label="Address Line 1" value={formData.address_line1}
          onChange={v => onChange('address_line1', v)}
          placeholder="123 Main Street" error={errors.address_line1}
        />
        <Field
          label="Address Line 2 (optional)" value={formData.address_line2}
          onChange={v => onChange('address_line2', v)}
          placeholder="Suite 100, Apt 2B"
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="City" value={formData.city}
            onChange={v => onChange('city', v)}
            placeholder="Los Angeles" error={errors.city}
          />
          <Field
            label="ZIP Code" value={formData.zip}
            onChange={v => onChange('zip', v)}
            placeholder="90001" error={errors.zip}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
            <div className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-sm">
              🇺🇸 United States
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">State</label>
            <select
              value={formData.state}
              onChange={e => onChange('state', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm outline-none transition-colors bg-white ${
                errors.state
                  ? 'border-red-300 focus:border-red-400'
                  : 'border-slate-200 focus:border-[#F97066] focus:ring-2 focus:ring-[#F97066]/10'
              }`}
            >
              <option value="">Select state</option>
              {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
          </div>
        </div>
        <PhoneField
          label="Business Phone" codeKey="phone_code" numberKey="phone_number"
          formData={formData} onChange={onChange} error={errors.phone_number}
        />
        <Field
          label="Business Email" type="email" value={formData.email}
          onChange={v => onChange('email', v)}
          placeholder="hello@yourdaycare.com" error={errors.email}
        />
        <Field
          label="Website" value={formData.website}
          onChange={v => onChange('website', v)}
          placeholder="https://yourdaycare.com" error={errors.website}
        />
      </div>
      <NavButtons showBack={false} onNext={handleNext} nextLabel="Next" />
    </>
  );
}

// ── Step 2: Contact Person ─────────────────────────────────────────

function Step2({
  formData, onChange, onNext, onBack, errors,
}: {
  formData: FormData;
  onChange: (k: keyof FormData, v: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: Record<string, string>;
}) {
  return (
    <>
      <StepTitle icon={User} step={2} subtitle="Primary contact person" />
      <div className="space-y-5">
        <Field
          label="Full Name" value={formData.contact_name}
          onChange={v => onChange('contact_name', v)}
          placeholder="Jane Smith" error={errors.contact_name}
        />
        <Field
          label="Job Title" value={formData.contact_title}
          onChange={v => onChange('contact_title', v)}
          placeholder="Owner / Director" error={errors.contact_title}
        />
        <PhoneField
          label="Contact Phone" codeKey="contact_phone_code" numberKey="contact_phone_number"
          formData={formData} onChange={onChange} error={errors.contact_phone_number}
        />
        <Field
          label="Contact Email" type="email" value={formData.contact_email}
          onChange={v => onChange('contact_email', v)}
          placeholder="jane@yourdaycare.com" error={errors.contact_email}
        />
      </div>
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Next" />
    </>
  );
}

// ── Step 3: Review + CAPTCHA ───────────────────────────────────────

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-2.5 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-500 shrink-0 mr-4">{label}</span>
      <span className="text-sm font-medium text-slate-800 text-right">{value}</span>
    </div>
  );
}

function Step3({
  formData, captchaToken, onCaptcha, onSubmit, onBack, loading, error,
}: {
  formData: FormData;
  captchaToken: string | null;
  onCaptcha: (token: string | null) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading: boolean;
  error: string;
}) {
  return (
    <>
      <StepTitle icon={FileText} step={3} subtitle="Review your information" />
      <div className="space-y-4 mb-6">
        <div className="bg-slate-50 rounded-2xl p-5">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Business</h3>
          <ReviewRow label="Name" value={formData.business_name} />
          <ReviewRow label="App URL" value={formData.tenant_identifier ? `gns-${formData.tenant_identifier}.aws.panaceata.com` : '—'} />
          <ReviewRow label="EIN" value={formData.ein} />
          <ReviewRow label="Address" value={`${formData.address_line1}${formData.address_line2 ? `, ${formData.address_line2}` : ''}`} />
          <ReviewRow label="City" value={formData.city} />
          <ReviewRow label="State" value={formData.state} />
          <ReviewRow label="ZIP" value={formData.zip} />
          <ReviewRow label="Country" value="United States" />
          <ReviewRow label="Phone" value={`${formData.phone_code} ${formData.phone_number}`} />
          <ReviewRow label="Email" value={formData.email} />
          <ReviewRow label="Website" value={formData.website} />
        </div>
        <div className="bg-slate-50 rounded-2xl p-5">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Contact Person</h3>
          <ReviewRow label="Name" value={formData.contact_name} />
          <ReviewRow label="Title" value={formData.contact_title} />
          <ReviewRow label="Phone" value={`${formData.contact_phone_code} ${formData.contact_phone_number}`} />
          <ReviewRow label="Email" value={formData.contact_email} />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
          onChange={onCaptcha}
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 p-4 rounded-xl bg-red-50 border border-red-100 mb-4">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={loading}
          className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!captchaToken || loading}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97066] to-[#FB923C] hover:from-[#E85D53] hover:to-[#E8832A] text-white rounded-full px-8 h-12 font-semibold shadow-lg shadow-[#F97066]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
            : <>Submit Application <ArrowRight className="w-4 h-4" /></>
          }
        </button>
      </div>
    </>
  );
}

// ── Step 4: Plan Selection ─────────────────────────────────────────

function Step4({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <>
      <StepTitle icon={CreditCard} step={4} subtitle="Choose your plan" />
      <div className="mb-8">
        <div className="relative border-2 border-[#F97066] rounded-2xl p-6 bg-gradient-to-br from-[#FFF7ED] to-white">
          <div className="absolute -top-3 left-6">
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              RECOMMENDED
            </span>
          </div>
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Starter Plan</h3>
              <p className="text-sm text-slate-500 mt-1">Everything you need to get started</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-slate-900">
                $1<span className="text-base font-normal text-slate-400">.00</span>
              </div>
              <div className="text-xs text-slate-400">introductory offer</div>
            </div>
          </div>
          <ul className="space-y-2.5">
            {PLAN_FEATURES.map(f => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                <div className="w-5 h-5 rounded-full bg-[#F97066]/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#F97066]" />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Proceed to Payment" />
    </>
  );
}

// ── Step 5: Payment + Provisioning ────────────────────────────────

function Step5({
  clientSecret,
  registrationId,
  businessEmail,
  onBack,
}: {
  clientSecret: string;
  registrationId: number;
  businessEmail: string;
  onBack: () => void;
}) {
  type Phase = 'payment' | 'provisioning' | 'active' | 'failed';
  const [phase, setPhase] = useState<Phase>('payment');
  const [pollData, setPollData] = useState<{ status: string; web_url?: string; admin_email?: string; temp_password?: string } | null>(null);
  const [verifyError, setVerifyError] = useState('');

  const handlePaymentSuccess = useCallback(async (paymentIntentId: string) => {
    setPhase('provisioning');
    try {
      const res = await fetch(`${API_URL}/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registration_id: registrationId,
          payment_intent_id: paymentIntentId,
        }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message ?? 'Verification failed');
      }
    } catch (e: unknown) {
      setVerifyError(e instanceof Error ? e.message : 'Verification failed');
      setPhase('failed');
    }
  }, [registrationId]);

  useEffect(() => {
    if (phase !== 'provisioning') return;
    const id = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}/register/${registrationId}`);
        const data = await res.json();
        setPollData(data);
        if (data.status === 'active') { setPhase('active'); clearInterval(id); }
        if (data.status === 'failed') { setPhase('failed'); clearInterval(id); }
      } catch { /* keep polling on network glitch */ }
    }, 5000);
    return () => clearInterval(id);
  }, [phase, registrationId]);

  // Warn user before leaving the page during provisioning — payment already
  // captured, leaving now leaves them in a stuck state with no refund.
  useEffect(() => {
    if (phase !== 'provisioning') return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [phase]);

  if (phase === 'provisioning') {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F97066]/10 to-[#FB923C]/10 flex items-center justify-center mx-auto mb-6">
          <Loader2 className="w-9 h-9 text-[#F97066] animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Setting up your daycare</h2>
        <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
          We&apos;re provisioning your dedicated cloud environment. This usually takes 8–9 minutes — please keep this tab open.
        </p>
        {pollData && (
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-sm">
            Status: <span className="font-medium capitalize">{pollData.status}</span>
          </div>
        )}
      </div>
    );
  }

  if (phase === 'active') {
    const adminEmail = pollData?.admin_email || businessEmail;
    return (
      <div className="text-center py-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </motion.div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re all set!</h2>
        <p className="text-slate-500 mb-6 max-w-sm mx-auto">
          Your daycare management platform is ready.
        </p>

        <div className="bg-slate-50 rounded-2xl p-5 max-w-sm mx-auto mb-6 text-left border border-slate-100">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-3">Admin Login Details</p>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-400 mb-0.5">Email</p>
              <p className="text-sm font-semibold text-slate-800">{adminEmail}</p>
            </div>
            {pollData?.temp_password && (
              <div>
                <p className="text-xs text-slate-400 mb-0.5">Temporary Password</p>
                <p className="text-sm font-mono font-semibold text-slate-800 bg-white border border-slate-200 rounded-lg px-3 py-2">{pollData.temp_password}</p>
              </div>
            )}
          </div>
        </div>

        {pollData?.web_url && (
          <a
            href={pollData.web_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Open your app <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <p className="text-xs text-slate-400 mt-6">
          You will be asked to change your password on first login.
        </p>
      </div>
    );
  }

  if (phase === 'failed') {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Something went wrong</h2>
        <p className="text-slate-500 mb-4 max-w-sm mx-auto">
          {verifyError || 'Provisioning encountered an issue. Our team has been notified.'}
        </p>
        <p className="text-sm text-slate-400">
          Please contact{' '}
          <a href="mailto:support@giggleandshine.com" className="text-[#F97066] hover:underline">
            support@giggleandshine.com
          </a>
        </p>
      </div>
    );
  }

  // phase === 'payment'
  return (
    <>
      <StepTitle icon={Lock} step={5} subtitle="Complete your payment" />
      <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
        <span className="text-sm font-medium text-slate-600">Starter Plan</span>
        <span className="text-lg font-bold text-slate-900">$1.00</span>
      </div>

      <PaymentForm clientSecret={clientSecret} onPaymentSuccess={handlePaymentSuccess} />

      <div className="mt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </button>
      </div>
    </>
  );
}

// ── Main Page ──────────────────────────────────────────────────────

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [registrationId, setRegistrationId] = useState<number | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const update = (k: keyof FormData, v: string) => {
    setFormData(prev => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors(prev => { const n = { ...prev }; delete n[k]; return n; });
  };

  const go = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
    setErrors({});
    setSubmitError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextStep1 = () => {
    const e = validate1(formData);
    if (Object.keys(e).length) { setErrors(e); return; }
    go(2);
  };

  const nextStep2 = () => {
    const e = validate2(formData);
    if (Object.keys(e).length) { setErrors(e); return; }
    go(3);
  };

  const handleSubmit = async () => {
    if (!captchaToken) return;
    setLoading(true);
    setSubmitError('');

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: formData.business_name,
          tenant_identifier: formData.tenant_identifier,
          ein: formData.ein,
          address_line1: formData.address_line1,
          address_line2: formData.address_line2,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          phone: `${formData.phone_code} ${formData.phone_number}`,
          email: formData.email,
          website: formData.website,
          country: 'USA',
          contact_name: formData.contact_name,
          contact_title: formData.contact_title,
          contact_phone: `${formData.contact_phone_code} ${formData.contact_phone_number}`,
          contact_email: formData.contact_email,
          captcha_token: captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? 'Registration failed. Please try again.');
      setRegistrationId(data.registration_id);
      setClientSecret(data.client_secret);
      go(4);
    } catch (e: unknown) {
      setSubmitError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF1F0]">
      <Navbar />

      {/* Decorative blobs */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-[#F97066]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 pt-32 pb-20">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Start your{' '}
            <span className="bg-gradient-to-r from-[#F97066] to-[#FB923C] bg-clip-text text-transparent">
              free trial
            </span>
          </h1>
          <p className="text-slate-500">
            Get your daycare management platform ready in minutes.
          </p>
        </motion.div>

        <StepIndicator current={step} />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 md:p-10"
          >
            {step === 1 && (
              <Step1 formData={formData} onChange={update} onNext={nextStep1} errors={errors} />
            )}
            {step === 2 && (
              <Step2 formData={formData} onChange={update} onNext={nextStep2} onBack={() => go(1)} errors={errors} />
            )}
            {step === 3 && (
              <Step3
                formData={formData}
                captchaToken={captchaToken}
                onCaptcha={setCaptchaToken}
                onSubmit={handleSubmit}
                onBack={() => go(2)}
                loading={loading}
                error={submitError}
              />
            )}
            {step === 4 && (
              <Step4 onNext={() => go(5)} onBack={() => go(3)} />
            )}
            {step === 5 && clientSecret && registrationId !== null && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <Step5
                  clientSecret={clientSecret}
                  registrationId={registrationId}
                  businessEmail={formData.email}
                  onBack={() => go(4)}
                />
              </Elements>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
