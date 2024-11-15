import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "Astra - AI Powered Website Builder",
    template: "%s | Astra",
  },
  description:
    "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get Started for FREE!",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Astra - AI Powered Website Builder",
    description:
      "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get Started for FREE!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MeeLuxPhotos",
    title: "Astra - AI Powered Website Builder",
    description:
      "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get Started for FREE!",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://astra-mocha.vercel.app/"),
};
