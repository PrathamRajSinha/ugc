import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', category: 'general' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon!</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
        <p className="text-gray-600">Let's discuss your next project</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          >
            <option value="general">General Inquiry</option>
            <option value="food">Food & Lifestyle</option>
            <option value="travel">Travel & Hotels</option>
            <option value="tech">Tech & Grooming</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}