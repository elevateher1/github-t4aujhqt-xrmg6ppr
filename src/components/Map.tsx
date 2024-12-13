

export function Map() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d592.9348421360955!2d36.774197090984785!3d-1.3107869967206598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b004ba3142f%3A0x4cd7ea6b96d18c99!2sKoyaro%20Centre%20Supermarket!5e0!3m2!1sen!2ske!4v1734098647508!5m2!1sen!2ske"
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
