"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { contactEmail } from "@/lib/data";
import { socials } from "@/lib/socials";
import Reveal from "@/components/Reveal";

type FormState = {
  name: string;
  username: string;
  email: string;
  message: string;
};

const emptyForm: FormState = { name: "", username: "", email: "", message: "" };

const fieldClass =
  "mt-1 w-full rounded-xl border border-line bg-night/60 px-4 py-3 placeholder:text-muted/70";
const formSubmitUrl = "https://formsubmit.co/ajax/auxiliatshuma11@gmail.com";

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          username: form.username,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("Your message has been sent successfully. I will get back to you soon.");
      setForm(emptyForm);
    } catch (error) {
      console.error("Form submission failed", error);
      setStatus("Something went wrong while sending your message. Please email me directly at auxiliatshuma11@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-line/60 py-16">
      <Reveal className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
            I am always open to discussing new projects and opportunities.
            Let&rsquo;s create something amazing together.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-6 flex items-center gap-3 text-sm text-muted hover:text-ink sm:text-base"
          >
            <FaEnvelope aria-hidden="true" className="text-iris" />
            {contactEmail}
          </a>
          <ul className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-iris hover:text-iris"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-line bg-panel/70 p-5 backdrop-blur sm:p-6"
        >
          <div>
            <label htmlFor="name" className="font-semibold">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Tshuma Auxilia"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={form.username}
              onChange={update("username")}
              placeholder="@Auxilia"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">
              Leave a message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Write your message here"
              className={fieldClass}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-iris-gradient px-7 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          <p role="status" className="min-h-6 font-semibold text-iris">
            {status}
          </p>
        </form>
      </Reveal>
    </section>
  );
}