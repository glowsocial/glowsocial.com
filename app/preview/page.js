import PreviewClient from './PreviewClient'
import './[slug]/preview.css'

export const metadata = {
  title: 'See Your Posts Before You Pay',
  description:
    'Enter your website and email to see posts ready to approve for your business. Free preview, no login or social account connection required.',
  alternates: {
    canonical: '/preview',
  },
  openGraph: {
    title: 'See Your Posts Before You Pay',
    description:
      'Drop your website URL and see posts ready to approve for your actual business. Free, no login required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Social Media Preview | Glow Social',
    description:
      'See posts ready to approve from your website — free, no login required.',
  },
}

const previewSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Free Social Media Preview by Glow Social",
      "alternateName": "Glow Social Preview Tool",
      "description": "Enter your website and email address to see posts ready to approve for your business.",
      "url": "https://glowsocial.com/preview",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "creator": {
        "@type": "Organization",
        "name": "Glow Social",
        "url": "https://glowsocial.com"
      },
      "featureList": [
        "Posts ready to approve",
        "Custom images for each post",
        "Website-based brand voice analysis",
        "No content calendar or prompts required",
        "No login or social account connection required"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Glow Social preview tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Glow Social preview tool creates posts with images from your business website. It is designed for business owners who want to see posts ready to approve before subscribing to a done-for-you social media service."
          }
        },
        {
          "@type": "Question",
          "name": "Is the social media preview free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You enter your website and email address, and Glow Social creates a free preview of posts with images. No login or credit card is required."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to connect my social accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The preview only needs your website and email address. You connect social accounts later if you decide to use Glow Social to publish approved posts."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the preview posts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The preview is meant to show what Glow Social can create for your business. If you subscribe, Glow Social can continue creating posts every month and publishing what you approve."
          }
        }
      ]
    }
  ]
}

export default function PreviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(previewSchema) }}
      />
      <PreviewClient />
    </>
  )
}
