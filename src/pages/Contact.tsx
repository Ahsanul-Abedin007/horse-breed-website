import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SEO } from '@/lib/seo';

const Contact: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen py-24">
      <SEO 
        title="Contact EquineElite | Concierge Service" 
        description="Get in touch with our equine experts for marketplace inquiries, breed listing assistance, or pedigree verification."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info */}
          <div>
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-ink/40">
              Get In Touch
            </span>
            <h1 className="mb-8 font-serif text-6xl font-light text-ink">Elite Concierge</h1>
            <p className="mb-12 text-lg leading-relaxed text-ink/60">
              Whether you are looking to acquire a champion or list your elite stock, our team of experts is here to assist you with every step of the process.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-ink/5">
                  <Mail className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink">Email</h3>
                  <p className="text-ink/60">concierge@equineelite.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-ink/5">
                  <Phone className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink">Phone</h3>
                  <p className="text-ink/60">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-ink/5">
                  <MapPin className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink">Headquarters</h3>
                  <p className="text-ink/60">Mayfair, London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border border-ink/10 bg-white p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">First Name</label>
                  <Input placeholder="John" className="border-ink/10 focus-visible:ring-ink" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Last Name</label>
                  <Input placeholder="Doe" className="border-ink/10 focus-visible:ring-ink" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Email Address</label>
                <Input type="email" placeholder="john@example.com" className="border-ink/10 focus-visible:ring-ink" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Subject</label>
                <Input placeholder="Marketplace Inquiry" className="border-ink/10 focus-visible:ring-ink" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Message</label>
                <textarea 
                  className="min-h-[150px] w-full border border-ink/10 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink"
                  placeholder="How can we help you?"
                />
              </div>
              <Button className="w-full bg-ink text-paper hover:bg-ink/90 py-6 uppercase tracking-widest">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
