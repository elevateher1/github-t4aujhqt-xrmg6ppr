import React, { useState } from 'react';
import { Handshake, Mail } from 'lucide-react';
import { Button } from '../shared/Button';
import { EmailComposer } from './EmailComposer';

export function BecomePartner() {
  const [isEmailComposerOpen, setIsEmailComposerOpen] = useState(false);

  return (
    <>
      <div className="mt-12 bg-purple-50 p-8 rounded-lg">
        <div className="flex items-center gap-4 mb-6">
          <Handshake className="h-8 w-8 text-purple-600" />
          <h3 className="text-2xl font-semibold text-purple-900">Become a Partner</h3>
        </div>
        
        <div className="max-w-2xl">
          <p className="text-gray-600 mb-6">
            Join us in our mission to empower women and girls with disabilities. Together, we can create
            lasting change and build more inclusive communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              className="flex items-center justify-center gap-2"
              onClick={() => setIsEmailComposerOpen(true)}
            >
              <Mail className="h-5 w-5" />
              Contact Us Now
            </Button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>We value your privacy and will only use your contact information for partnership communications.</p>
          </div>
        </div>
      </div>

      <EmailComposer 
        isOpen={isEmailComposerOpen}
        onClose={() => setIsEmailComposerOpen(false)}
      />
    </>
  );
}