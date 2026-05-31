import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Database,
  Settings,
  HelpCircle,
  Copy,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Transition from "../components/Transition.jsx";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [localSubmission, setLocalSubmission] = useState(null);

  const budgetOptions = [
    { value: "< PKR 50,000", label: "Starter Range" },
    { value: "PKR 50,000 - PKR 200,000", label: "Professional Suite" },
    { value: "PKR 200,000 - PKR 400,000", label: "Premium Scale" },
    { value: "> PKR 400,000", label: "Custom Architecture" },
  ];

  const projectTypeOptions = [
    { value: "MERN Stack E-commerce", label: "Commerce Solutions" },
    { value: "Custom IoT Analytics Cockpit", label: "Telemetry Dashboards" },
    { value: "Interactive Brand Portfolio", label: "Dynamic Portfolios" },
    {
      value: "Full-Stack Software Architecture",
      label: "Custom Core Platforms",
    },
  ];

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwGY_b8Hpq7Ie5HzLZhlmd2okciS0wxMTRr-L40eisOGOeoUxw-bHopLVWpA8FHN0L4/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setLocalSubmission(data);
        reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyScriptToClipboard = () => {
    const scriptsCode = `
// Google Apps Script code to connect this form to a Google Sheet of your choice:
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(), 
    data.name, 
    data.email, 
    data.budget, 
    data.projectType, 
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "200 Success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
    `.trim();

    navigator.clipboard.writeText(scriptsCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <Transition>
      <div className="relative pb-24 ambient-bg-grid overflow-hidden">
        {/* Ambient background light fields */}
        <div className="absolute top-[10%] left-[2%] w-[450px] h-[450px] bg-gold-400/8 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[3%] w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* ================= LEFT BRIEFING DETAILS ================= */}
            <div className="lg:col-span-5">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-500 border border-gold-500/20 px-2.5 py-1 rounded bg-zinc-900/40">
                INITIATE INTERACTION
              </span>
              <h1 className="font-display font-medium text-4xl sm:text-5xl text-zinc-100 uppercase tracking-tight mt-5 leading-none">
                Get In Touch
              </h1>
              <p className="font-sans text-xs text-zinc-400 mt-5 leading-relaxed">
                Connect directly with Salar's software engineering studio.
                Whether you want to hire him, suggest a full-stack venture, or
                request a complete price list review, script your brief below.
              </p>

              <div className="mt-10 flex flex-col gap-6 font-sans text-xs">
                <div className="p-4 rounded-xl border border-gold-500/15 bg-zinc-900/30 backdrop-blur flex items-start gap-4">
                  <Database className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-display font-medium text-zinc-200 uppercase tracking-wide">
                      Active Inboxes
                    </h5>
                    <p className="text-zinc-500 mt-1">salarmehfooz@gmail.com</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-gold-500/15 bg-zinc-900/30 backdrop-blur flex items-start gap-4">
                  <Settings className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-display font-medium text-zinc-200 uppercase tracking-wide">
                      GitHub Handle
                    </h5>
                    <a
                      href="https://github.com/salarmehfooz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-gold-400 transition-colors mt-1 block"
                    >
                      github.com/salarmehfooz
                    </a>
                  </div>
                </div>
              </div>

              {/* Secure note */}
              <div className="mt-10 p-5 border border-dashed border-zinc-900 rounded-xl">
                <p className="font-mono text-[9.5px] text-zinc-650 uppercase leading-relaxed">
                  🔒 LOCKING PARAMETER: All messages are securely cached locally
                  within your client sandbox environment.
                </p>
              </div>
            </div>

            {/* ================= RIGHT FORM OR SUCCESS WINDOW ================= */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  /* THE PREMIUM VALIDATED CONTACT FORM */
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(handleFormSubmit)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-2xl border border-gold-500/20 bg-zinc-900/30 backdrop-blur-md flex flex-col gap-6 shadow-2xl glass-panel"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                          NAME / ENTITY *
                        </label>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is needed for references.",
                          })}
                          placeholder="Your full name"
                          className={`w-full bg-zinc-900/60 border px-4 py-3 pb-3 text-xs tracking-wide text-zinc-200 placeholder-zinc-700 rounded outline-none transition-colors ${
                            errors.name
                              ? "border-rose-500/50 focus:border-rose-500"
                              : "border-gold-500/15 focus:border-gold-500/40"
                          }`}
                        />
                        {errors.name && (
                          <span className="font-mono text-[8px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                          EMAIL FOR TRANSIT *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Contact email is vital.",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email formula.",
                            },
                          })}
                          placeholder="entity@domain.com"
                          className={`w-full bg-zinc-900/60 border px-4 py-3 pb-3 text-xs tracking-wide text-zinc-200 placeholder-zinc-700 rounded outline-none transition-colors ${
                            errors.email
                              ? "border-rose-500/50 focus:border-rose-500"
                              : "border-gold-500/15 focus:border-gold-500/40"
                          }`}
                        />
                        {errors.email && (
                          <span className="font-mono text-[8px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Budget Selector */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                          BUDGET RANGE *
                        </label>
                        <select
                          {...register("budget", {
                            required: "Please approximate a budget range.",
                          })}
                          className="w-full bg-zinc-900/60 border border-gold-500/15 focus:border-gold-500/40 px-4 py-3 select-indicator text-xs tracking-wide text-zinc-200 rounded outline-none transition-colors"
                        >
                          <option value="">Choose Scale</option>
                          {budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.value} ({opt.label})
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <span className="font-mono text-[8px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.budget.message}
                          </span>
                        )}
                      </div>

                      {/* Project Type */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                          PROJECT COOPERATIVE TYPE *
                        </label>
                        <select
                          {...register("projectType", {
                            required: "Please select an archetype.",
                          })}
                          className="w-full bg-zinc-900/60 border border-gold-500/15 focus:border-gold-500/40 px-4 py-3 select-indicator text-xs tracking-wide text-zinc-200 rounded outline-none transition-colors"
                        >
                          <option value="">Choose Archetype</option>
                          {projectTypeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <span className="font-mono text-[8px] text-rose-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.projectType.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">
                        BRIEFING DETAILS *
                      </label>
                      <textarea
                        rows={5}
                        {...register("message", {
                          required: "Brief content details are required.",
                        })}
                        placeholder="State your technical specifications, timescales, or recruitment criteria..."
                        className={`w-full bg-zinc-900/60 border px-4 py-3 text-xs tracking-wide text-zinc-200 placeholder-zinc-700 rounded outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-rose-500/50 focus:border-rose-500"
                            : "border-gold-500/15 focus:border-gold-500/40"
                        }`}
                      />
                      {errors.message && (
                        <span className="font-mono text-[8px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Form submit button */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="font-mono text-[8px] text-zinc-650 uppercase tracking-widest text-center sm:text-left">
                        * Indicates essential transaction inputs.
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-gold-500 text-neutral-950 px-8 py-3.5 rounded font-display font-semibold text-xs uppercase tracking-widest transition-all shadow-md shadow-gold-500/5 hover:shadow-gold-500/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCwIcon />
                            <span>TRANSMITTING DATA...</span>
                          </>
                        ) : (
                          <>
                            <span>DISPATCH BRIEF</span>
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* EXQUISITE SUCCESS CONFIRMATION & GOOGLE SHEETS CONNECTOR WIZARD */
                  <motion.div
                    key="success-display"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 rounded-2xl border border-emerald-500/20 bg-zinc-950/70 backdrop-blur-md flex flex-col gap-8 shadow-2xl"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 shrink-0" />
                      <div>
                        <h3 className="font-display font-bold text-lg uppercase text-zinc-100 tracking-wider">
                          Message Delivered Successfully
                        </h3>
                        <p className="font-sans text-xs text-zinc-400 mt-1 leading-normal">
                          Thank you, {localSubmission?.name}. Your message has
                          been received and is now being reviewed. You can
                          expect a response shortly via your provided email.
                        </p>
                      </div>
                    </div>

                    {/* Simple confirmation card */}
                    <div className="p-5 rounded-xl border border-emerald-500/10 bg-zinc-900/40">
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        ✔ Submission recorded successfully
                        <br />
                        ✔ Secure transmission completed
                        <br />✔ No further action is required from your side
                      </p>
                    </div>

                    {/* Reset button */}
                    <div className="flex gap-4 border-t border-zinc-900 pt-5">
                      <button
                        onClick={() => {
                          setSubmitSuccess(false);
                          setLocalSubmission(null);
                        }}
                        className="flex-1 bg-zinc-900 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/10 hover:border-transparent font-display font-semibold text-[10px] uppercase tracking-widest py-3 rounded text-center transition-all cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

// Custom spinning loader icon
function RefreshCwIcon() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-4.5 w-4.5 text-neutral-950"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
