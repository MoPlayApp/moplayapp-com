import type { Metadata } from "next";
import { DocumentPage } from "../site-chrome";
export const metadata: Metadata = { title: "Contact | MoPlay", description: "Get in touch with the MoPlay team." };
export default function Contact() { return <DocumentPage eyebrow="LET’S TALK" title="Say hello" intro="Have a question, an idea, or need a little help? We’d love to hear from you.">
<section><h2>Get in touch</h2><p>For general questions, support, privacy requests, or feedback, email our team at:</p><p className="contact-address"><a href="mailto:office@moplayapp.com">office@moplayapp.com ↗</a></p><p>Please include any details that will help us understand your question. For your security, do not include passwords in your message.</p></section>
<section><h2>Account deletion</h2><p>Looking to delete your MoPlay account? Visit our <a href="/delete-my-account">account deletion page</a> for instructions.</p></section>
</DocumentPage>; }
