import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      e.target.reset();
    }
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-12 mt-24">
        <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
        <p className="text-xl text-orange-400 mt-4">We'd Love to Hear From You!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-600"
                placeholder="Your Name"
                required
                disabled={disabled}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-600"
                placeholder="Your Email"
                required
                disabled={disabled}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-600"
                placeholder="Subject"
                required
                disabled={disabled}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-600"
                placeholder="Your Message"
                rows="5"
                required
                disabled={disabled}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              disabled={disabled}
            >
              {disabled ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
              <span className="material-icons">facebook</span>
            </a>
            <a href="https://twitter.com" className="text-blue-600 hover:text-blue-800">
              <span className="material-icons">twitter</span>
            </a>
            <a href="https://instagram.com" className="text-blue-600 hover:text-blue-800">
              <span className="material-icons">instagram</span>
            </a>
            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800">
              <span className="material-icons">linkedin</span>
            </a>
          </div>
        </div>
      </div>

      {/* Alert Message */}
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Find Us Here</h2>
        <div className="w-full h-64">
          <iframe
            title="Imagica Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509315!2d144.9537353156805!3d-37.81720974202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43cfb1d6df%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1613013459946!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
