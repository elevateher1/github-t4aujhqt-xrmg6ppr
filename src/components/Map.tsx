import React from 'react';

export function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899107046084!2d36.7818!3d-1.3089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a6d7453bef%3A0x8b5a7e8f9bff2e89!2sKibera%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1710337257284!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Elevate Her Location"
      />
    </div>
  );
}