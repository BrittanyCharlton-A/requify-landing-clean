"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ScheduleDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#F8FAFF] text-gray-900">
        <section className="text-center px-6 md:px-12 lg:px-24 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Demo</h1>
          <p className="text-lg text-gray-600 mb-12">
            Book a 15-minute walkthrough to see how Requify can streamline requisitions and lab workflows at your clinic.
          </p>
          <div className="max-w-4xl mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hello-requifyhealth/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <noscript>
              <p className="text-center text-gray-500 mt-4">
                Please enable JavaScript to view the scheduling widget, or visit{" "}
                <a
                  href="https://calendly.com/hello-requifyhealth/30min"
                  className="text-blue-600 underline"
                >
                  Calendly directly
                </a>.
              </p>
            </noscript>
            <div className="text-center mt-8">
              <Link href="/" className="text-blue-600 hover:underline">
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <div className="container mx-auto px-4">
            &copy; {new Date().getFullYear()} Requify Health. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
