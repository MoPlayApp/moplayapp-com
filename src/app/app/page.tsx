import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YayScore",
};

export default function AppPage() {
  return (
    <main style={{ minHeight: "100dvh", background: "#f5f5f7" }}>
      <iframe
        title="YayScore"
        src="https://yayscore.com/"
        style={{ display: "block", width: "100%", maxWidth: 500, height: "100dvh", margin: "0 auto", border: 0 }}
      />
    </main>
  );
}
