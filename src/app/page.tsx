import Hero from '@/components/Hero'
import AboutIryna from '@/components/AboutIryna'
import Tokenomics from '@/components/Tokenomics'
import DonationTracker from '@/components/DonationTracker'
import Community from '@/components/Community'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Hero />
      <AboutIryna />
      <Tokenomics />
      <DonationTracker />
      <Community />
      <Footer />
    </main>
  )
}