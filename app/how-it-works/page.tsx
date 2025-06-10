import HowItWorksHero from '@/components/HowItWorksHero';
import TechnologyStack from '@/components/TechnologyStack';
import UserJourney from '@/components/UserJourney';
import AccessMethods from '@/components/AccessMethods';
import AICapabilities from '@/components/AICapabilities';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'How It Works - GRDN AI',
  description: 'Discover how GRDN AI revolutionizes agriculture through advanced AI technology, voice interaction, and multi-platform accessibility.',
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <HowItWorksHero />
      <TechnologyStack />
      <UserJourney />
      <AccessMethods />
      <AICapabilities />
      <Footer />
    </main>
  );
}