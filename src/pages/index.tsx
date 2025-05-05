// Full Page with Header, Hero, Features, FAQ, and Contact
import { useState } from "react";
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
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="w-full px-4 md:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo - hard left */}
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 ml-auto">
            <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
            <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
            <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link
              href="#"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Schedule Demo
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-[#F8FAFF] text-gray-900">
        {/* Hero Section */}
        <section id="home" className="relative flex flex-col-reverse md:flex-row items-stretch px-6 md:px-12 lg:px-24 pt-24 pb-0">
          <div className="md:w-1/2 flex flex-col justify-center py-12">
            <p className="uppercase text-sm text-blue-600 font-semibold mb-2 tracking-wider">
              Built for Clinics & Labs
            </p>
            <h1 className="text-5xl font-bold tracking-tight leading-[1.15] mb-6 text-gray-900">
              Digitize Medical Requisitions. <br /> Save Time, Improve Care.
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-xl text-gray-700">
              Say goodbye to faxes, lost forms, and manual follow-ups. Requify helps clinics and labs manage referrals, requisitions, and results — all in one modern platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition">
                Schedule a Demo
              </a>
              <a href="#" className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition">
                Join the Beta
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex items-end justify-end relative">
            <Image
              src="/doctor-labtech.png"
              alt="Doctor and lab technician"
              width={1000}
              height={1000}
              className="object-contain w-auto h-auto max-h-[740px] md:translate-y-0"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">How Requify Works</h2>
            <p className="text-lg text-gray-600 mb-12">Modern workflows — no paper, no hassle.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <DocumentTextIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Submit Digitally</h3>
                <p className="text-gray-600 text-sm">No more printing, faxing, or scanning. Start in seconds.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BeakerIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Labs Receive Instantly</h3>
                <p className="text-gray-600 text-sm">Auto-filled patient info & requisition templates sent instantly.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FolderOpenIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Track & Access Reports</h3>
                <p className="text-gray-600 text-sm">Clear requisition status and report access for all referrals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#F8FAFF] py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12">Everything you need to know about using Requify.</p>
            <div className="space-y-6 text-left">
              {faqs.map((faq, index: number) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                  >
                    {faq.question}
                    <span className="ml-2 text-blue-600">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-base transition-all duration-300 ease-in-out">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s Connect</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have questions, feedback, or want to get started with Requify?
              <br className="hidden md:block" />
              We’d love to hear from you.
            </p>
            <a
              href="mailto:hello@requifyhealth.com"
              className="inline-flex items-center justify-center px-6 py-3 text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              📬 hello@requifyhealth.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
