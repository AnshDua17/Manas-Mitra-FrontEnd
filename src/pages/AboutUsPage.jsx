import React from 'react';
import { Sprout, Heart, Lock, Wifi, HandHeart } from 'lucide-react';

const HeroSection = () => (
  // Added dark mode styles for the gradient
  <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative h-full flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          More Than a Platform, It's a Promise
        </h1>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          Learn about our mission to make mental well-being a priority for every student in India.
        </p>
      </div>
    </div>
  </section>
);

const OurStorySection = () => (
  // Added dark mode background and text colors
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
            Born from a Need, Built with Empathy
          </h2>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            Walking through college campuses, we witnessed a silent struggle. Students facing immense pressure, dealing with loneliness, yet hesitating to seek help due to stigma. We realized technology shouldn't replace human connection—it should make it more accessible, private, and immediate.
          </p>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-medium">
            Our mission is to empower students with the tools and support they need, fostering a campus culture where seeking help is a sign of strength.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            {/* Added dark mode styles for the gradients and backgrounds */}
            <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/50 dark:to-teal-900/50 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-60 h-60 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Sprout className="w-24 h-24 text-green-600 dark:text-green-500" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => {
    const teamMembers = [
      { name: "Himanshu Ranjan", role: "Founder & Lead Developer", image: "HR" },
      { name: "Moksh Kaushish", role: "Community Manager", image: "MK" },
      { name: "Parth Prakash", role: "Data & Privacy Specialist", image: "PP" },
      { name: "Ansh Dua", role: "Full Stack Developer", image: "AD" },
      { name: "Tanmay Chadha", role: "", image: "TC" },
      { name: "Navya Arora", role: "", image: "NA" }
    ];
  
    return (
      // Added dark mode background and text colors
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              The Team Behind the Mission
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              // Added dark mode styles for the team member cards
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-blue dark:text-accent-teal font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
  
const ValuesSection = () => {
    const values = [
      { icon: <Lock className="w-8 h-8 text-blue-600 dark:text-blue-400" />, title: "Confidentiality", description: "Your privacy is sacred. We are committed to creating a secure and anonymous space where you can feel safe to share." },
      { icon: <Wifi className="w-8 h-8 text-green-600 dark:text-green-500" />, title: "Accessibility", description: "We believe support should be for everyone. Our platform is free for students and available in multiple regional languages." },
      { icon: <HandHeart className="w-8 h-8 text-purple-600 dark:text-purple-400" />, title: "Empathy", description: "Every feature is designed with a deep understanding of the student experience. We listen, we care, and we build for you." }
    ];
  
    return (
      // Added dark mode background and text colors
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Guided by Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                {/* Added dark mode styles for the value icons */}
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border dark:bg-gray-800 dark:border-gray-700">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

// Main AboutUsPage component
const AboutUsPage = () => {
  return (
    // The main div doesn't need styles anymore as the sections handle their own backgrounds
    <>
      <HeroSection />
      <OurStorySection />
      <TeamSection />
      <ValuesSection />
    </>
  );
};

export default AboutUsPage;