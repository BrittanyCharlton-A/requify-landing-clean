// Full Page with Header, Hero, Features, FAQ, and Contact
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  DocumentTextIcon,
  BeakerIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "What is Requify?",
      answer:
        "Requify is a digital requisition platform that eliminates paper forms, faxing, and manual tracking—helping clinics and labs modernize their workflow."
    },
    {
      question: "How does Requify help my clinic?",
      answer:
        "Clinics can submit requisitions digitally, track lab results in real time, and avoid delays caused by manual handoffs or communication errors."
    },
    {
      question: "Do labs need special software to use Requify?",
      answer:
        "No. Labs receive structured data through Requify's web portal and can view, manage, and respond to requisitions without needing custom software."
    },
    {
      question: "Is patient data secure?",
      answer:
        "Yes. Requify uses end-to-end encryption and follows healthcare data security best practices to keep information safe and compliant."
    },
    {
      question: "How long does setup take?",
      answer:
        "Most clinics and labs can get started within 1–2 days. We’ll walk you through onboarding and ensure everything is ready to go."
    }
  ];

  return (
    <>
      <Head>
        <title>Schedule a Demo | Requify Health</title>
        <meta name="description" content="Book a quick demo of Requify and discover how your clinic can ditch paper forms and streamline lab requisitions." />
        <meta property="og:title" content="Schedule a Demo | Requify Health" />
        <meta property="og:description" content="Discover how Requify can digitize requisitions, streamline clinic workflows, and improve lab turnaround." />
        <meta property="og:image" content="/requify-logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-4 md:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/requify-logo.png"
                alt="Requify Logo"
                width={160}
                height={80}
                className="h-30 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 ml-auto">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/schedule-demo" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Schedule Demo
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-[#F8FAFF] text-gray-900">
        <section className="text-center px-6 md:px-12 lg:px-24 py-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Demo</h1>
          <p className="text-lg text-gray-600 mb-12">
            Book a 30-minute walkthrough to see how Requify can streamline requisitions and lab workflows at your clinic.
          </p>
          <div className="max-w-4xl mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hello-requifyhealth/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <noscript>
              <p className="text-center text-gray-500 mt-4">
                Please enable JavaScript to view the scheduling widget, or visit <a href="https://calendly.com/hello-requifyhealth/30min" className="text-blue-600 underline">Calendly directly</a>.
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
