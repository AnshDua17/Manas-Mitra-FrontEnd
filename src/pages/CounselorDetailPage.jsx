import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Video, Phone, Calendar, Clock, CheckCircle, Shield, ChevronLeft, ChevronRight, User, BookOpen, Heart, Users, Award, Globe, MessageSquare } from 'lucide-react';

// Mock counselor data (no changes needed here)
const counselorData = {
  // ... (data remains the same)
};

// Mock availability data (no changes needed here)
const mockAvailability = {
  // ... (data remains the same)
};

// Dashboard Sidebar Component
const DashboardSidebar = () => {
  const menuItems = [
    { icon: Heart, label: 'Dashboard', active: false },
    { icon: BookOpen, label: 'Wellness Library', active: false },
    { icon: Users, label: 'Community Circle', active: false },
    { icon: User, label: 'Counselor Connect', active: true },
    { icon: User, label: 'Profile', active: false }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Manas Mitra</div>
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Student Dashboard</div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
              item.active
                ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600 dark:text-blue-400 dark:bg-gray-900 dark:border-blue-400'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </a>
        ))}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-red-50 rounded-lg p-4 dark:bg-red-900/50">
          <div className="text-sm font-medium text-red-900 dark:text-red-200 mb-2">Crisis Support</div>
          <div className="text-xs text-red-700 dark:text-red-300 mb-3">Immediate help available 24/7</div>
          <button className="w-full bg-red-600 text-white text-xs py-2 px-3 rounded font-medium hover:bg-red-700 transition-colors">
            Emergency Support
          </button>
        </div>
      </div>
    </div>
  );
};

// Tab Component
const Tab = ({ label, active, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
        active
          ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
          : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
      }`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {label}
    </button>
  );
};

// Review Card Component
const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4 dark:bg-gray-900">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{review.author}</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{review.content}</p>
    </div>
  );
};

// Booking Calendar Component
const BookingCalendar = ({ onBookAppointment }) => {
  // ... (all existing state and functions remain the same)
  const [selectedSessionType, setSelectedSessionType] = useState('In-Person');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  const generateWeekDates = (weekOffset = 0) => {
    const today = new Date();
    const currentWeekStart = new Date(today);
    currentWeekStart.setDate(today.getDate() - today.getDay() + 1 + (weekOffset * 7)); // Start from Monday
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      dates.push(date);
    }
    return dates;
  };
  const weekDates = generateWeekDates(currentWeek);
  const sessionTypeIcons = { "In-Person": MapPin, "Video Call": Video, "Phone Call": Phone };
  const formatDate = (date) => date.toISOString().split('T')[0];
  const formatDisplayDate = (date) => date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const getAvailableSlots = (date) => {
    const dateStr = formatDate(date);
    const dayAvailability = mockAvailability[dateStr] || { slots: [], booked: [] };
    return dayAvailability.slots.filter(slot => !dayAvailability.booked.includes(slot));
  };
  const handleDateTimeSelect = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };
  const handleConfirmAppointment = () => {
    if (selectedDate && selectedTime && selectedSessionType) {
      onBookAppointment({ counselor: counselorData.name, date: selectedDate, time: selectedTime, sessionType: selectedSessionType });
    }
  };
  const canConfirmAppointment = selectedDate && selectedTime && selectedSessionType;


  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Book Your Confidential Session</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Session Type</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Object.entries(counselorData.sessionTypes).map(([type, details]) => {
            const IconComponent = sessionTypeIcons[type];
            return (
              <button
                key={type}
                onClick={() => setSelectedSessionType(type)}
                disabled={!details.available}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  selectedSessionType === type
                    ? 'border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-900/50 dark:border-blue-400 dark:text-white'
                    : details.available
                    ? 'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:text-white dark:hover:border-gray-500'
                    : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500'
                }`}
              >
                <div className="flex items-center mb-1">
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">{type}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">{details.duration}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{details.location}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Select Date & Time</h4>
          <div className="flex items-center space-x-2">
            <button onClick={() => setCurrentWeek(currentWeek - 1)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors disabled:text-gray-300 dark:text-gray-500 dark:hover:text-gray-300 dark:disabled:text-gray-600" disabled={currentWeek <= 0} >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Week of {weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <button onClick={() => setCurrentWeek(currentWeek + 1)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors dark:text-gray-500 dark:hover:text-gray-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {weekDates.map((date, dateIndex) => {
          const availableSlots = getAvailableSlots(date);
          const isToday = date.toDateString() === new Date().toDateString();
          return (
            <div key={dateIndex} className="space-y-2">
              <div className={`text-center py-2 rounded-lg ${
                isToday ? 'bg-blue-100 text-blue-900 font-medium dark:bg-blue-900/50 dark:text-blue-300' : 'bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-200'
              }`}>
                <div className="text-sm">{formatDisplayDate(date)}</div>
              </div>
              <div className="space-y-1">
                {availableSlots.length === 0 ? (
                  <div className="text-xs text-gray-400 text-center py-2">No slots</div>
                ) : (
                  availableSlots.map((time, timeIndex) => (
                    <button
                      key={timeIndex}
                      onClick={() => handleDateTimeSelect(date, time)}
                      className={`w-full text-xs py-2 px-2 rounded transition-colors ${
                        selectedDate?.toDateString() === date.toDateString() && selectedTime === time
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {canConfirmAppointment && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg dark:bg-blue-900/50">
          <h5 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Appointment Summary</h5>
          <div className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /><span>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /><span>{selectedTime}</span></div>
            <div className="flex items-center">{React.createElement(sessionTypeIcons[selectedSessionType], { className: "w-4 h-4 mr-2" })}<span>{selectedSessionType}</span></div>
          </div>
        </div>
      )}

      <button onClick={handleConfirmAppointment} disabled={!canConfirmAppointment} className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        canConfirmAppointment
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
      }`}>
        <div className="flex items-center justify-center"><CheckCircle className="w-5 h-5 mr-2" />Confirm Appointment</div>
      </button>

      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center"><Shield className="w-3 h-3 mr-1" />Your appointment details are completely confidential</p>
      </div>
    </div>
  );
};

// Main Counselor Detail Page Component
const CounselorDetailPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const handleBackToCounselors = () => { alert('Navigating back to Counselor Connect page'); };
  const handleBookAppointment = (appointmentDetails) => { alert(`Appointment booked!\n\nCounselor: ${appointmentDetails.counselor}\nDate: ${appointmentDetails.date.toLocaleDateString()}\nTime: ${appointmentDetails.time}\nType: ${appointmentDetails.sessionType}`); };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      <div className="flex-1 ml-64">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <button onClick={handleBackToCounselors} className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Counselor Connect
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/50 dark:to-teal-900/50 flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${counselorData.photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      {!counselorData.photo && (<User className="w-16 h-16 text-gray-400" />)}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{counselorData.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{counselorData.credentials}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{counselorData.title}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center"><Star className="w-4 h-4 text-yellow-500 mr-1" /><span className="font-medium dark:text-white">{counselorData.rating}</span><span className="text-gray-500 dark:text-gray-400 text-sm ml-1">({counselorData.reviewCount} reviews)</span></div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300"><Award className="w-4 h-4 mr-1" /><span>{counselorData.experience} experience</span></div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300"><Globe className="w-4 h-4 mr-1" /><span>{counselorData.languages.join(', ')}</span></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {counselorData.specializations.map((spec, index) => (<span key={index} className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full dark:bg-blue-900/50 dark:text-blue-400">{spec}</span>))}
                    </div>
                    <blockquote className="italic text-gray-700 dark:text-gray-200 leading-relaxed">"{counselorData.philosophy}"</blockquote>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex space-x-8 px-6 border-b border-gray-200 dark:border-gray-700">
                  <Tab label="About" active={activeTab === 'about'} onClick={() => setActiveTab('about')} icon={User} />
                  <Tab label="Qualifications" active={activeTab === 'qualifications'} onClick={() => setActiveTab('qualifications')} icon={Award} />
                  <Tab label="Reviews" active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')} icon={MessageSquare} />
                </div>
                <div className="p-6">
                  {activeTab === 'about' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About Dr. Sharma</h3>
                      <div className="prose prose-gray max-w-none dark:prose-invert">
                        {counselorData.about.split('\n\n').map((paragraph, index) => (<p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{paragraph}</p>))}
                      </div>
                    </div>
                  )}
                  {activeTab === 'qualifications' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education & Certifications</h3>
                      <ul className="space-y-3">
                        {counselorData.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeTab === 'reviews' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Reviews</h3>
                      <div className="space-y-4">
                        {counselorData.reviews.map((review) => (<ReviewCard key={review.id} review={review} />))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <BookingCalendar onBookAppointment={handleBookAppointment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorDetailPage;