import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink/10 bg-paper py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-ink" />
              <span className="font-serif text-2xl font-bold text-ink">EquineElite</span>
            </Link>
            <p className="text-sm leading-relaxed text-ink/60">
              The world's premier digital platform for horse breeds, pedigree tracking, and elite marketplace listings.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-5 w-5 cursor-pointer text-ink/60 hover:text-ink" />
              <Twitter className="h-5 w-5 cursor-pointer text-ink/60 hover:text-ink" />
              <Facebook className="h-5 w-5 cursor-pointer text-ink/60 hover:text-ink" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink">Platform</h3>
            <ul className="space-y-2 text-sm text-ink/60">
              <li><Link to="/breeds" className="hover:text-ink">Breed Directory</Link></li>
              <li><Link to="/marketplace" className="hover:text-ink">Marketplace</Link></li>
              <li><Link to="/pedigree" className="hover:text-ink">Pedigree System</Link></li>
              <li><Link to="/valuation" className="hover:text-ink">Market Valuation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink">Company</h3>
            <ul className="space-y-2 text-sm text-ink/60">
              <li><Link to="/about" className="hover:text-ink">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-ink">Knowledge Hub</Link></li>
              <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-ink">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink">Contact</h3>
            <ul className="space-y-3 text-sm text-ink/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>concierge@equineelite.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Global Headquarters, London</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink/5 pt-8 text-center text-xs text-ink/40">
          © {new Date().getFullYear()} EquineElite Digital Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
