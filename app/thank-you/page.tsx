export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF1F0]">
      <div className="text-center px-6">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Thank You!</h1>
        <p className="text-slate-500 text-lg mb-8">
          We&apos;ll get back to you within 24 hours.
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-gradient-to-r from-[#F97066] to-[#FB923C] text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}