import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "سبام | منصة ذكية لتصفية الرسائل غير المرغوب فيها",
  description:
    "منصة سبام تساعدك على كشف الرسائل غير المرغوب فيها باستخدام الذكاء الاصطناعي، مع لوحة تحكم فورية، تقارير مفصلة، وخيارات تكامل سهلة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
