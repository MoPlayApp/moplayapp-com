"use client";

import Image from "next/image";
import { History, Info, ChevronRight } from "lucide-react";
import { useState } from "react";
import "./app.css";

const assets = "/app-assets/";
type Screen = "Home" | "Rewards" | "Challenges" | "Profile" | "Settings";
const shortcuts = [
  { icon: "dollar-symbol.png", label: "Withdrawal Methods", lines: ["Withdrawal", "Methods"] },
  { icon: "Crown Star.png", label: "Withdrawal History", lines: ["Withdrawal", "History"] },
  { icon: "swords.png", label: "Daily Challenges", lines: ["Daily", "Challenges"] },
  { icon: "User.png", label: "Profile", lines: ["Profile", "\u00a0"] },
];
const navigation = [
  { icon: "Home1.png", label: "Home" },
  { icon: "dollar-symbol.png", label: "Rewards" },
  { icon: "swords.png", label: "Challenges" },
] as const;
const methods = [
  { name: "PayPal", logo: "paypal.png", color: "paypal" },
  { name: "Binance", logo: "binance.png", color: "binance" },
  { name: "Coinbase", logo: "coinbase.png", color: "coinbase" },
];

export default function AppHome() {
  const [screen, setScreen] = useState<Screen>("Home");
  const [previousScreen, setPreviousScreen] = useState<Screen>("Home");
  const [rewardTab, setRewardTab] = useState<"methods" | "history">("methods");
  const [drawer, setDrawer] = useState(false);
  const [name, setName] = useState("");
  const [vibration, setVibration] = useState(true);
  const openMobileApp = () => { window.location.href = "https://play.google.com/store/apps/details?id=com.moplayapp.app"; };
  const go = (next: Screen) => { if (next === "Profile" || next === "Settings") setPreviousScreen(screen); setScreen(next); setDrawer(false); window.scrollTo(0, 0); };
  const shortcut = (index: number) => {
    if (index < 2) { setRewardTab(index === 0 ? "methods" : "history"); go("Rewards"); }
    else go(index === 2 ? "Challenges" : "Profile");
  };
  const nested = screen === "Profile" || screen === "Settings";

  return (
    <main className="mobile-app"><div className="app-screen">
      <header className={`app-header ${nested ? "nested-header" : ""}`}>
        {nested ? <><button className="back-button" type="button" aria-label="Go back" onClick={() => go(previousScreen)}><Image src={`${assets}left-arrow.png`} alt="" width={22} height={22} /></button><span className="header-title">{screen}</span></> : <>
          <div className="app-brand"><Image src={`${assets}${screen === "Home" ? "Bolt.png" : screen === "Rewards" ? "dollar-symbol.png" : "swords.png"}`} alt="" width={screen === "Home" ? 32 : 26} height={screen === "Home" ? 32 : 26} /><span>{screen === "Home" ? "MoPlay" : screen === "Challenges" ? "Daily Challenges" : "Rewards"}</span></div>
          {screen === "Home" && <button className="app-menu" type="button" aria-label="Open menu" onClick={() => setDrawer(true)}><Image src={`${assets}menu.png`} alt="" width={24} height={24} /></button>}
        </>}
      </header>

      {screen === "Home" && <div className="app-content">
        <section className="loyalty-card" aria-label="Loyalty card, 0 points, approximately 0 US dollars, cardholder Your Name">
          <Image className="card-background" src={`${assets}card.png`} alt="" fill sizes="(max-width: 500px) 100vw, 460px" priority />
          <span className="card-label">LOYALTY COINS</span><span className="card-points">0 <small>pts</small></span><span className="card-value">≈ $0.000 USD</span><span className="card-holder-label">CARDHOLDER</span><span className="card-holder">YOUR NAME</span><Image className="card-coin" src={`${assets}coin.png`} alt="" width={410} height={410} />
        </section>
        <section className="app-section quick-section" aria-labelledby="quick-heading"><h2 id="quick-heading">Quick Access</h2><div className="quick-grid">{shortcuts.map((item, index) => <button className="quick-tile" key={item.label} type="button" onClick={() => shortcut(index)}><span className="quick-icon"><Image src={`${assets}${item.icon}`} alt="" width={22} height={22} /></span><span className="quick-label">{item.lines[0]}<br />{item.lines[1]}</span></button>)}</div></section>
        <section className="app-section games-section" aria-labelledby="games-heading"><h2 id="games-heading">Loyalty Games:</h2><button className="game-card" type="button" onClick={openMobileApp}><Image src={`${assets}helix-banner.png`} alt="" fill sizes="(max-width: 500px) 100vw, 460px" /><span>Helix Ball Smash</span></button></section>
      </div>}

      {screen === "Rewards" && <div className="rewards-content"><div className="reward-tabs" role="tablist" aria-label="Rewards"><button type="button" role="tab" aria-selected={rewardTab === "methods"} onClick={() => setRewardTab("methods")}>Withdrawal Methods</button><button type="button" role="tab" aria-selected={rewardTab === "history"} onClick={() => setRewardTab("history")}>History</button></div>
        {rewardTab === "methods" ? <div className="methods-content"><div className="methods-grid">{methods.map((method) => <button className="method-card" key={method.name} type="button" onClick={openMobileApp}><span className={`method-logo ${method.color}`}><Image src={`${assets}${method.logo}`} alt="" width={65} height={65} /></span><span className="method-details"><strong>{method.name}</strong><span>Min 5,000 pts</span><span className="method-progress" /><small>5,000 pts more</small></span></button>)}</div><div className="info-note"><Info size={18} /><span>Withdrawal requests are reviewed before processing</span></div></div> : <div className="history-empty"><History size={52} strokeWidth={2} /><span>No withdrawals yet</span></div>}
      </div>}

      {screen === "Challenges" && <div className="challenge-content"><p>A fresh challenge every day. Resets at midnight UTC.</p><article className="challenge-card"><div className="challenge-title"><Image src={`${assets}helix-icon.png`} alt="" width={52} height={52} /><h2>Play Helix Ball Smash</h2></div><p>Install Helix Ball Smash if needed, then open it from MoPlay today.</p><div className="challenge-action"><span>Not completed yet</span><button type="button" onClick={openMobileApp}>Open game</button></div></article></div>}

      {screen === "Profile" && <div className="profile-content"><label htmlFor="cardholder">CARDHOLDER NAME</label><input id="cardholder" value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder="e.g. Alex Johnson" /><p>You can change this name only once.</p><button className="save-button" type="button" onClick={openMobileApp}>Save Changes</button></div>}
      {screen === "Settings" && <div className="settings-content"><h2>PREFERENCES</h2><button className="setting-card" type="button" role="switch" aria-checked={vibration} onClick={() => setVibration(!vibration)}><span className={`setting-icon ${vibration ? "enabled" : ""}`}><Image src={`${assets}${vibration ? "vibration-on.png" : "vibration-off.png"}`} alt="" width={24} height={24} /></span><span className="setting-copy"><strong>Vibration</strong><small>Haptic feedback on interactions</small></span><span className={`setting-switch ${vibration ? "enabled" : ""}`}><span /></span></button></div>}

      {!nested && !drawer && <nav className="app-nav" aria-label="App navigation">{navigation.map((item) => <button type="button" key={item.label} aria-label={item.label} aria-current={screen === item.label ? "page" : undefined} onClick={() => go(item.label)}><span className={`nav-icon ${screen === item.label ? "active" : ""}`} style={{ maskImage: `url("${assets}${item.icon}")` }} /><span className={screen === item.label ? "nav-indicator active" : "nav-indicator"} /></button>)}</nav>}
      {drawer && <div className="drawer-layer"><button className="drawer-scrim" type="button" aria-label="Close menu" onClick={() => setDrawer(false)} /><aside className="app-drawer" aria-label="Account menu"><div className="drawer-header"><strong>Your Name</strong><div><Image src={`${assets}coin.png`} alt="" width={45} height={45} /><span>0 pts<small>≈ $0.000 USD</small></span></div></div><div className="drawer-body"><h2>ACCOUNT</h2><button type="button" onClick={() => go("Profile")}><Image src={`${assets}User.png`} alt="" width={22} height={22} />Profile<ChevronRight size={18} /></button><button type="button" onClick={() => go("Settings")}><Image src={`${assets}Settings.png`} alt="" width={22} height={22} />Settings<ChevronRight size={18} /></button><hr /><h2>LEGAL</h2><a href="/privacy-policy"><Image src={`${assets}privacy.png`} alt="" width={22} height={22} />Privacy Policy<ChevronRight size={18} /></a></div><footer>MoPlay</footer></aside></div>}
    </div></main>
  );
}
