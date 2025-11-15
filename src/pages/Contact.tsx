import { useState } from 'react';
import Checkbox from '../components/Checkbox';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryTypes: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (inquiryType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      inquiryTypes: checked
        ? [...prev.inquiryTypes, inquiryType]
        : prev.inquiryTypes.filter(type => type !== inquiryType)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'abdelillah.chikh@email.com', href: 'mailto:abdelillah.chikh@email.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/abdelillah-chikh', href: 'https://linkedin.com/in/abdelillah-chikh' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/abdelillah-chikh', href: 'https://github.com/abdelillah-chikh' },
    { icon: '🐦', label: 'Twitter', value: '@your_handle', href: 'https://twitter.com/your_handle' },
  ];

  const inquiryTypes = [
    'Project Collaboration',
    'Freelance Work',
    'General Inquiry',
    'Just Saying Hi!'
  ];

  return (
    <main className="flex-1">
      <div className="@container">
        <div className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl text-text-light dark:text-text-dark mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                Have a project in mind or just want to say hello? I'd love to hear from you.
                Let's create something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-light dark:text-text-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark resize-vertical"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-text-light dark:text-text-dark mb-3">
                        What type of inquiry is this? (Optional)
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {inquiryTypes.map((type) => (
                          <Checkbox
                            key={type}
                            id={type.toLowerCase().replace(' ', '-')}
                            label={type}
                            checked={formData.inquiryTypes.includes(type)}
                            onChange={(checked) => handleCheckboxChange(type, checked)}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 font-bold leading-normal tracking-[0.015em] transition-all duration-300 hover:scale-105 bg-primary text-white hover:bg-primary/80 dark:hover:bg-primary/80 w-full sm:w-auto"
                    >
                      <span className="truncate">Send Message</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-2xl">{info.icon}</span>
                        <div>
                          <p className="font-medium text-text-light dark:text-text-dark">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-text-secondary-light dark:text-text-secondary-dark">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-16 text-center">
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto">
                You can also find me on social media. I'm active on Twitter and LinkedIn, where
                I share insights about web development, coding tips, and project updates.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com/in/abdelillah-chikh"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/abdelillah-chikh"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/your_handle"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.816.302 4.14.552c-.726.275-1.34.639-1.95 1.25-.61.61-.975 1.224-1.25 1.95C.802 4.816.62 5.584.567 6.79.514 7.996.5 8.396.5 12.017s.014 4.021.067 5.227c.053 1.206.235 1.974.485 2.65.275.726.639 1.34 1.25 1.95.61.61 1.224.975 1.95 1.25.676.25 1.444.432 2.65.485 1.206.053 1.606.067 5.227.067s4.021-.014 5.227-.067c1.206-.053 1.974-.235 2.65-.485.726-.275 1.34-.639 1.95-1.25.61-.61.975-1.224 1.25-1.95.25-.676.432-1.444.485-2.65.053-1.206.067-1.606.067-5.227s-.014-4.021-.067-5.227c-.053-1.206-.235-1.974-.485-2.65-.275-.726-.639-1.34-1.25-1.95-.61-.61-1.224-.975-1.95-1.25-.676-.25-1.444-.432-2.65-.485C16.021.014 15.621 0 12.017 0zM12 2.163c3.532 0 3.958.013 5.357.066 1.306.05 2.027.22 2.51.37.57.174 1.006.383 1.446.823.44.44.649.876.823 1.446.15.483.32 1.204.37 2.51.053 1.399.066 1.825.066 5.357s-.013 3.958-.066 5.357c-.05 1.306-.22 2.027-.37 2.51-.174.57-.383 1.006-.823 1.446-.44.44-.876.649-1.446.823-.483.15-1.204.32-2.51.37-1.399.053-1.825.066-5.357.066s-3.958-.013-5.357-.066c-1.306-.05-2.027-.22-2.51-.37-.57-.174-1.006-.383-1.446-.823-.44-.44-.649-.876-.823-1.446-.15-.483-.32-1.204-.37-2.51-.053-1.399-.066-1.825-.066-5.357s.013-3.958.066-5.357c.05-1.306.22-2.027.37-2.51.174-.57.383-1.006.823-1.446.44-.44.876-.649 1.446-.823.483-.15 1.204-.32 2.51-.37 1.399-.053 1.825-.066 5.357-.066zm0 3.897a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 2.163a4 4 0 110 8 4 4 0 010-8zm6.406-2.39a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;