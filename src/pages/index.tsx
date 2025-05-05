// Full Page with Header, Hero, Features, FAQ, Contact, and Footer
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DocumentTextIcon,
  BeakerIcon,
  FolderOpenIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  type FAQ = {
    question: string;
    answer: string;
    icon: JSX.Element;
  };

  const faqs: FAQ[] = [
    {
      question: "What is Requify and how does it work?",
      answer:
        "Requify is a secure platform that replaces paper and fax-based requisitions with a fully digital workflow. Clinics can submit, track, and manage lab requisitions from a single dashboard; with no IT installation required.",
      icon: <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "Do I need to train my clinic staff?",
      answer:
        "Not extensively. Requify is designed for ease of use with minimal learning curve. Most clinic staff are up and running after a short 15-minute onboarding session.",
      icon: <UserGroupIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "How fast can we go live?",
      answer:
        "Clinics are typically onboarded within 24–48 hours. We handle all setup, and provide a personalized walkthrough to ensure a smooth launch.",
      icon: <ClockIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "Does Requify work with my current lab partners?",
      answer:
        "Yes. Requify is compatible with most major labs in Canada and allows easy communication regardless of the lab's internal systems.",
      icon: <BeakerIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "Is Requify secure and compliant with Canadian privacy laws?",
      answer:
        "Absolutely. Requify follows PHIPA and PIPEDA compliance standards. All data is encrypted in transit and at rest.",
      icon: <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "Will this replace our EMR/EHR?",
      answer:
        "No. Requify is a complementary tool that works alongside your EMR. It handles requisitions and lab communication, not patient charting.",
      icon: <ComputerDesktopIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "What support do we get after setup?",
      answer:
        "You’ll have access to responsive support via email and phone. We also provide help center guides and in-dashboard tips to help your team troubleshoot anything in real-time.",
      icon: <ArrowPathIcon className="h-6 w-6 text-blue-600" />
    },
    {
      question: "Can we test it before committing?",
      answer:
        "Yes. We offer a no-risk pilot for eligible clinics so you can experience Requify firsthand before rolling it out across your team.",
      icon: <CheckCircleIcon className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <>
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
            <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
            <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
            <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link
              href="/schedule-demo"
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Schedule Demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="min-h-screen bg-[#F8FAFF] text-gray-900">
        <section id="home" className="relative flex flex-col-reverse md:flex-row items-stretch px-6 md:px-12 lg:px-24 pt-24 pb-0">
          <div className="md:w-1/2 flex flex-col justify-center py-12">
            <p className="uppercase text-sm text-blue-600 font-semibold mb-2 tracking-wider">
              Built for Primary Care, Walk-In, and Specialist Clinics
            </p>
            <h1 className="text-5xl font-bold tracking-tight leading-[1.15] mb-6 text-gray-900">
              Digitize Medical Requisitions
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-xl text-gray-700">
              Streamline requisitions, eliminate delays, and get lab results faster; <br />all from one secure dashboard.
            </p>
            <div className="mb-8 space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                <span>Reduce admin time by 40%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                <span>No more missed lab reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                <span>Get set up in under 48 hours</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/schedule-demo" className="px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition">
                Schedule a Demo
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No obligations — see how Requify works in under 15 minutes.
            </p>
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
            <p className="text-lg text-gray-600 mb-12">Streamline every step. From form to follow-up.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />,
                  title: "Submit Digitally",
                  desc: "Start in seconds; no printing, scanning, or faxing needed."
                },
                {
                  icon: <BeakerIcon className="h-6 w-6 text-blue-600" />,
                  title: "Labs Receive Instantly",
                  desc: "Auto-filled templates sent in real time, reducing back-and-forth."
                },
                {
                  icon: <FolderOpenIcon className="h-6 w-6 text-blue-600" />,
                  title: "Track & Access Reports",
                  desc: "Know where every requisition stands and never lose a report again."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#F8FAFF] rounded-xl p-6 shadow-sm hover:shadow-md transform hover:scale-[1.02] transition duration-200 ease-in-out text-center"
                >
                  <div className="bg-blue-50 rounded-full p-3 w-fit mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#F8FAFF] py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12">Everything you need to know about using Requify.</p>
            <div className="space-y-6 text-left">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                    <span className="ml-2 text-blue-600">{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-600 text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-24 px-6 md:px-12 lg:px-24">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">We’re here to help your clinic run smoother</h2>
    <p className="text-lg text-gray-600 mb-6">
      Have questions, feedback, or want to get started with Requify?
      <br className="hidden md:block" />
      You’ll hear back from a real human within 24 hours.
    </p>
    <a
      href="mailto:hello@requifyhealth.com"
      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
    >
      📬 Email Us at hello@requifyhealth.com
    </a>
    <p className="text-sm text-gray-600 mt-4">
    </p>
  </div>
</section>


        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          <div className="container mx-auto px-4">
            &copy; {new Date().getFullYear()} Requify Health. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
