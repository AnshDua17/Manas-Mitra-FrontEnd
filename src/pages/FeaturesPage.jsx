import React from 'react';
import { 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  Heart,
  Shield,
  Clock,
  Brain,
  Lock,
  UserCheck,
  BookMarked,
  Languages,
  Headphones,
  UserPlus,
  MessageSquare,
  Eye
} from 'lucide-react';

// --- Section Components for the Features Page ---

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 py-20">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">
        Tools for Your Well-being Journey
      </h1>
      <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover the powerful, confidential, and supportive features designed to help you navigate college life with confidence.
      </p>
    </div>
  </section>
);

const AICompanionSection = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
            Your 24/7 AI Friend
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            Feeling overwhelmed at 2 AM? Our AI Companion is a safe, non-judgmental chatbot available anytime. It's trained to offer evidence-based coping techniques like guided breathing, mindfulness exercises, and cognitive reframing.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3"><Clock className="w-6 h-6 text-green-600 dark:text-green-500" /> <span className="text-slate-700 dark:text-gray-200 font-medium">Instant Support: Get help the moment you need it.</span></div>
            <div className="flex items-center space-x-3"><Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" /> <span className="text-slate-700 dark:text-gray-200 font-medium">CBT Techniques: Learn practical skills to manage stress.</span></div>
            <div className="flex items-center space-x-3"><Lock className="w-6 h-6 text-purple-600 dark:text-purple-400" /> <span className="text-slate-700 dark:text-gray-200 font-medium">Completely Private: Your conversations are confidential.</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-100 dark:bg-black/20 rounded-3xl p-8 w-80">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-600 text-white p-4 flex items-center space-x-3"><div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><MessageCircle className="w-5 h-5" /></div><span className="font-medium">AI Companion</span></div>
              <div className="p-4 space-y-4 h-64"><div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 max-w-xs"><p className="text-sm">Hi! I'm feeling really anxious about my upcoming exam.</p></div><div className="bg-blue-100 dark:bg-blue-900/50 rounded-lg p-3 ml-4"><p className="text-sm dark:text-blue-200">I understand. Let's try a quick breathing exercise. Breathe in for 4 counts...</p></div></div>
              <div className="p-4 border-t dark:border-gray-700"><div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400">Type your message...</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
 
const CounsellorBookingSection = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-96">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Available Counsellors</h3>
              <div className="border dark:border-gray-700 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"><div className="flex items-center space-x-3 mb-3"><div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AS</div><div><h4 className="font-medium text-slate-800 dark:text-white">Dr. Anjali Sharma</h4><p className="text-sm text-slate-600 dark:text-gray-300">Anxiety & Stress</p></div></div><div className="flex items-center justify-between"><span className="text-sm text-green-600 dark:text-green-500">Available Today</span><button className="text-blue-600 dark:text-blue-400 text-sm font-medium">Book Now</button></div></div>
              <div className="border dark:border-gray-700 rounded-lg p-4 hover:bg-teal-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"><div className="flex items-center space-x-3 mb-3"><div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">RK</div><div><h4 className="font-medium text-slate-800 dark:text-white">Dr. Rajesh Kumar</h4><p className="text-sm text-slate-600 dark:text-gray-300">Relationships</p></div></div><div className="flex items-center justify-between"><span className="text-sm text-orange-600 dark:text-orange-500">Next: Tomorrow</span><button className="text-blue-600 dark:text-blue-400 text-sm font-medium">View Profile</button></div></div>
            </div>
          </div>
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Connect with Professionals</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            Browse profiles of certified on-campus counsellors and book a session in just a few clicks. Choose between in-person, video, or chat-based appointments—whatever makes you most comfortable.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3"><Calendar className="w-6 h-6 text-green-600 dark:text-green-500" /><span className="text-slate-700 dark:text-gray-200 font-medium">Simple Scheduling: Find a time that works for you.</span></div>
            <div className="flex items-center space-x-3"><Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Discreet Process: Book sessions privately.</span></div>
            <div className="flex items-center space-x-3"><UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Find the Right Fit: Choose a counsellor you trust.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ResourceHubSection = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Your Personal Wellness Library</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            Knowledge is power. Our Resource Hub is a curated library of articles, expert-led videos, and calming audio guides, available in English and multiple regional languages.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3"><BookMarked className="w-6 h-6 text-blue-600 dark:text-blue-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Expert Content: Evidence-based guides you can trust.</span></div>
            <div className="flex items-center space-x-3"><Languages className="w-6 h-6 text-green-600 dark:text-green-500" /><span className="text-slate-700 dark:text-gray-200 font-medium">Multilingual: Access resources in your preferred language.</span></div>
            <div className="flex items-center space-x-3"><Headphones className="w-6 h-6 text-purple-600 dark:text-purple-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Diverse Formats: Read, watch, or listen.</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-96"><h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Featured Resources</h3><div className="space-y-4"><div className="border dark:border-gray-700 rounded-lg p-4 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer"><div className="flex items-center space-x-3"><div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center"><BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" /></div><div><h4 className="font-medium text-slate-800 dark:text-white text-sm">Managing Exam Stress</h4><p className="text-xs text-slate-600 dark:text-gray-300">5 min read</p></div></div></div><div className="border dark:border-gray-700 rounded-lg p-4 hover:bg-green-50 dark:hover:bg-gray-700 cursor-pointer"><div className="flex items-center space-x-3"><div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center"><Headphones className="w-5 h-5 text-green-600 dark:text-green-500" /></div><div><h4 className="font-medium text-slate-800 dark:text-white text-sm">Sleep Better Audio Guide</h4><p className="text-xs text-slate-600 dark:text-gray-300">15 min audio</p></div></div></div><div className="border dark:border-gray-700 rounded-lg p-4 hover:bg-purple-50 dark:hover:bg-gray-700 cursor-pointer"><div className="flex items-center space-x-3"><div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center"><Heart className="w-5 h-5 text-purple-600 dark:text-purple-400" /></div><div><h4 className="font-medium text-slate-800 dark:text-white text-sm">Building Healthy Relationships</h4><p className="text-xs text-slate-600 dark:text-gray-300">12 min video</p></div></div></div></div></div>
        </div>
      </div>
    </div>
  </section>
);

const PeerSupportSection = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-96"><h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Community Pulse</h3><div className="space-y-4"><div className="border-l-4 border-blue-500 pl-4 py-2"><p className="text-sm text-slate-700 dark:text-gray-200 mb-2">"Anyone else feeling overwhelmed with placement prep?"</p><div className="flex items-center justify-between"><span className="text-xs text-slate-500 dark:text-gray-400">Anonymous • 2h ago</span><div className="flex space-x-2"><span className="text-xs text-blue-600 dark:text-blue-400">5 replies</span><span className="text-xs text-green-600 dark:text-green-500">❤️ 12</span></div></div></div><div className="border-l-4 border-green-500 pl-4 py-2"><p className="text-sm text-slate-700 dark:text-gray-200 mb-2">"Just wanted to share - talking to the counsellor really helped!"</p><div className="flex items-center justify-between"><span className="text-xs text-slate-500 dark:text-gray-400">Anonymous • 5h ago</span><div className="flex space-x-2"><span className="text-xs text-blue-600 dark:text-blue-400">8 replies</span><span className="text-xs text-green-600 dark:text-green-500">❤️ 24</span></div></div></div></div><button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Share Your Thoughts</button></div>
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white">You Are Not Alone</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            Our peer forum is a safe, anonymous, and moderated space to share your experiences with other students. Ask for advice, offer encouragement, and discover a community that understands.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3"><UserPlus className="w-6 h-6 text-blue-600 dark:text-blue-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Shared Experience: Connect with others who get it.</span></div>
            <div className="flex items-center space-x-3"><Shield className="w-6 h-6 text-green-600 dark:text-green-500" /><span className="text-slate-700 dark:text-gray-200 font-medium">Safe & Moderated: We ensure a positive environment.</span></div>
            <div className="flex items-center space-x-3"><MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" /><span className="text-slate-700 dark:text-gray-200 font-medium">Anonymous Posting: Share without fear of judgment.</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main FeaturesPage Component ---

const FeaturesPage = () => {
  return (
    // Updated background for dark mode consistency
    <div className="font-sans bg-white dark:bg-gray-900">
      <HeroSection />
      <AICompanionSection />
      <CounsellorBookingSection />
      <ResourceHubSection />
      <PeerSupportSection />
    </div>
  );
};

export default FeaturesPage;