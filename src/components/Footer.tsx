import React from 'react';
import { Container } from './shared/Container';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SocialLinks } from './social/SocialLinks';

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-purple-100">
              Elevate Her is dedicated to empowering women and girls with disabilities through sports, advocacy, and community support.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-purple-100 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-purple-100 hover:text-white transition">About Us</a></li>
              <li><a href="#programs" className="text-purple-100 hover:text-white transition">Programs</a></li>
              <li><a href="#blog" className="text-purple-100 hover:text-white transition">Blog</a></li>
              <li><a href="#contact" className="text-purple-100 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254-733-942-954</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@elevateher1.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Koyaro Center, Kibera</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
            <p className="text-purple-100">
              Monday - Friday<br />
              8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p>&copy; 2024 Elevate Her. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}