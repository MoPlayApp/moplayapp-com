import Image from "next/image";
import { Header, Footer } from "./site-chrome";
import { ArrowDown, ArrowUpRight, Gamepad2, Gift, Sparkles, Zap } from "lucide-react";

const steps = [
  { number: "01", title: "Find your fun", text: "Discover games that make you want to play just one more round.", icon: Gamepad2 },
  { number: "02", title: "Play your way", text: "Jump in, enjoy the moment, and make every little break more playful.", icon: Zap },
  { number: "03", title: "Enjoy the rewards", text: "Because a little playtime should come with a little something extra.", icon: Gift },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <Header />
        <div className="hero-content wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A LITTLE MORE PLAY, EVERY DAY</div>
            <h1>Make playtime<br /><span>pay off.</span></h1>
            <p>More fun. More little wins. Meet MoPlay, where your everyday playtime gets a little more rewarding.</p>
            <div className="hero-actions"><a className="button button-dark" href="#how-it-works">Let’s play <ArrowDown size={19} /></a><span>GOOD VIBES ONLY <span className="tiny-star">✳</span></span></div>
          </div>
          <div className="hero-art" aria-label="MoPlay app preview">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-star star-one">✦</div><div className="art-star star-two">✳</div><div className="art-star star-three">✦</div>
            <div className="floating-pill pill-top"><Sparkles size={18} fill="currentColor" /> MORE FUN</div>
            <div className="floating-pill pill-bottom"><span>✦</span> LITTLE WINS</div>
            <Image className="phone-mockup" src="/moplay-phone.png" alt="MoPlay app home screen showing loyalty coins and games" width={512} height={640} priority />
            <div className="round-badge"><span>PLAY MORE ✦ SMILE MORE ✦ </span><b>☺</b></div>
          </div>
        </div>
        <div className="hero-bottom wrap"><span>SCROLL TO EXPLORE</span><ArrowDown size={17} /><span>MADE FOR YOUR PLAYTIME ✦</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><div>MORE PLAY <span>✦</span> MORE FUN <span>✦</span> MORE YOU <span>✦</span> MORE PLAY <span>✦</span> MORE FUN <span>✦</span> MORE YOU <span>✦</span></div></div>
      <section className="intro wrap" id="about"><div className="section-label"><span>01 / THE GOOD STUFF</span><span>✳</span></div><div className="intro-grid"><h2>A little play<br />goes a <em>long way.</em></h2><div><p>Life’s better with a little more play in it.</p><p>MoPlay brings together the fun of discovering games and the joy of being rewarded for the time you spend playing. Easy to love, hard to put down.</p><a className="text-link" href="#how-it-works">HERE’S HOW IT WORKS <ArrowDown size={17} /></a></div></div></section>
      <section className="how" id="how-it-works"><div className="wrap"><div className="section-label"><span>02 / HOW IT WORKS</span><span>✳</span></div><div className="section-heading"><div><div className="mini-label">SIMPLE AS PLAYING</div><h2>Ready, set,<br /><em>MoPlay.</em></h2></div><p>Good things come to those who play. Here’s the idea in three little steps.</p></div><div className="steps">{steps.map(({ number, title, text, icon: Icon }) => <article className="step" key={number}><div className="step-top"><span>{number} / 03</span><ArrowUpRight size={20} /></div><div className="step-icon"><Icon size={42} strokeWidth={1.8} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="cta wrap"><div className="cta-star">✳</div><div className="mini-label">A LITTLE MORE JOY IS CALLING</div><h2>Let’s make<br /><em>more play.</em></h2><p>Questions, ideas, or just want to say hello? We’d love to hear from you.</p><a className="button button-light" href="mailto:office@moplayapp.com">Say hello <ArrowUpRight size={19} /></a><div className="cta-doodle">✦</div></section>
      <Footer />
    </main>
  );
}




