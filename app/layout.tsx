import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tibetderebag.dev"),
  title: "Tibet Derebağ — Software Developer",
  description: "İzmir'de web deneyimleri, Java uygulamaları ve veritabanı odaklı sistemler geliştiren Tibet Derebağ'ın kişisel portföyü.",
  openGraph: {
    title: "Tibet Derebağ — Software Developer",
    description: "Fikirleri çalışan dijital ürünlere dönüştürüyorum.",
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Tibet Derebağ — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tibet Derebağ — Software Developer",
    description: "Fikirleri çalışan dijital ürünlere dönüştürüyorum.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
