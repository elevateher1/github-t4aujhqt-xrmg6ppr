import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Container } from './shared/Container';
import { SectionTitle } from './shared/SectionTitle';
import { Button } from './shared/Button';
import { Map } from './Map';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    try {
      const response = await fetch('https://formspree.io/f/myzgajqb', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-purple-50">
      <Container>
        <SectionTitle
          title="Contact Us"
          description="Have questions, comments or just want to say hello? We'd love to hear from you!"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                ></textarea>
              </div>
              <div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth
                >
                  Send Message
                </Button>
                {status === 'success' && (
                  <p className="mt-2 text-sm text-green-600">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-2 text-sm text-red-600">Failed to send message. Please try again.</p>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">info@elevateher1.org</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600">+254-733-942-954</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-600">Mon - Fri 08:00 am - 5:00pm</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-gray-600">
                  Koyaro Center, Kibera<br />
                  Third Floor<br />
                  P.O Box 1479-00200<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
}