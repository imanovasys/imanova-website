"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inquiryTypes = [
  "Health Systems Audit",
  "Custom Health Information Systems",
  "DHIS2 Integration & Interoperability",
  "Data Collection Platforms",
  "Data Analytics & Visualization",
  "Health Research & Statistical Support",
  "Capacity Building",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: inquiryTypes[7],
    message: "",
    "bot-field": "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `Request failed: ${res.status}`);
      }
      setStatus("success");
      setValues({
        name: "",
        email: "",
        organization: "",
        inquiry: inquiryTypes[7],
        message: "",
        "bot-field": "",
      });
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">
            check_circle
          </span>
        </div>
        <h3 className="font-display text-2xl text-on-surface mb-3">
          Message sent
        </h3>
        <p className="font-body text-on-surface-variant leading-relaxed">
          Thank you for reaching out. Our team will get back to you at the
          email address you provided as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot: hidden from real users, bots tend to fill every field */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input
            name="bot-field"
            value={values["bot-field"]}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="jane@organization.org"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="organization"
            className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block"
          >
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={values.organization}
            onChange={handleChange}
            className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Ministry of Health, University, NGO..."
          />
        </div>
        <div>
          <label
            htmlFor="inquiry"
            className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block"
          >
            I&apos;m interested in
          </label>
          <select
            id="inquiry"
            name="inquiry"
            value={values.inquiry}
            onChange={handleChange}
            className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 block"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={handleChange}
          className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-y"
          placeholder="Tell us about your project or question..."
        />
      </div>

      {status === "error" && (
        <p className="text-error font-body text-sm">
          {errorMessage || "Something went wrong sending your message."} You
          can also email us directly at{" "}
          <a className="underline" href="mailto:info@imanovasys.com">
            info@imanovasys.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
