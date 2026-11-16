import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Logo() {
  return <a className="logo" href="/" aria-label="MoPlay home"><Image className="logo-mark" src="/moplay-icon.png" alt="" width={39} height={39} /><span>MoPlay<span className="logo-dot">.</span></span></a>;
}
export function Header() {
  return <header className="header wrap"><Logo /><nav aria-label="Main navigation"><a href="/#how-it-works">How it works</a><a href="/#about">About MoPlay</a><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms of service</a></nav><a className="header-link" href="/contact">Get in touch <ArrowUpRight size={17} /></a></header>;
}
export function Footer() {
  return <footer className="footer"><div className="wrap footer-top"><div><Logo /><p>More play. More fun.<br />That’s the MoPlay way.</p></div><nav className="footer-nav" aria-label="Footer navigation"><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-service">Terms of service</a><a href="/delete-my-account">Delete my account</a><a href="/contact">Contact</a></nav><div className="footer-contact"><span>GOT SOMETHING TO SAY?</span><a href="mailto:office@moplayapp.com">office@moplayapp.com <ArrowUpRight size={19} /></a></div></div><div className="wrap footer-bottom"><span>© MOPLAY. ALL RIGHTS RESERVED.</span><span>MADE FOR PLAY ✦</span><a href="#top">BACK TO TOP ↑</a></div></footer>;
}
export function DocumentPage({ eyebrow, title, intro, children, showAside = true }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; showAside?: boolean }) {
  return <main id="top"><div className="document-header"><Header /><div className="wrap document-hero"><div className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</div><h1>{title}<span>.</span></h1><p>{intro}</p></div></div><div className="document-body wrap"><article className="document-content">{children}</article>{showAside && <aside className="document-aside"><span>NEED A HAND?</span><h2>We’re here<br />to help.</h2><p>Questions about MoPlay? Get in touch with our team.</p><a href="/contact">Contact us <ArrowUpRight size={17} /></a></aside>}</div><Footer /></main>;
}

