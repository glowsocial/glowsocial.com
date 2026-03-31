import PreviewClient from './PreviewClient'
import './[slug]/preview.css'

export const metadata = {
  title: 'Free Social Media Preview — See 12 Posts Written for Your Business | Glow Social',
  description:
    'Enter your website and see 12 social media posts written in your voice, for your business. Custom captions and AI images — ready to copy and post today. Free, no login required.',
  alternates: {
    canonical: '/preview',
  },
  openGraph: {
    title: 'Free Social Media Preview — See 12 Posts Written for Your Business | Glow Social',
    description:
      'Drop your website URL and get a full month of done-for-you social media content in 60 seconds. Free, no login required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Social Media Preview | Glow Social',
    description:
      'See 12 social media posts written for your business — free, no login required.',
  },
}

export default function PreviewPage() {
  return <PreviewClient />
}
