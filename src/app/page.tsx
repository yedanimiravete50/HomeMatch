import { Hero } from '@/components/pages/landing/hero';
import { HowItWorks } from '@/components/pages/landing/how-it-works';
import { Benefits } from '@/components/pages/landing/benefits';
import { Testimonials } from '@/components/pages/landing/testimonials';
import { Faq } from '@/components/pages/landing/faq';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Faq />
    </div>
  );
}
