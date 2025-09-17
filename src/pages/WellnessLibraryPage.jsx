import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, BookOpen, Video, Headphones, Brain, Moon, GraduationCap, Users, X, Play, Heart } from 'lucide-react';

// --- Mock Data ---
const mockResources = [
  // ... (mock data remains unchanged)
];

// --- Sub-Components ---

const ResourceCard = ({ resource, onClick }) => {
  const formatIcons = { ARTICLE: BookOpen, VIDEO: Video, AUDIO: Headphones };
  const FormatIcon = formatIcons[resource.format];
  const formatColors = { 
    ARTICLE: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300', 
    VIDEO: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300', 
    AUDIO: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' 
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group dark:bg-gray-800 dark:border-gray-700" onClick={() => onClick(resource)}>
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resource.thumbnail})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
          <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all" />
        </div>
        <span className={`absolute top-3 right-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${formatColors[resource.format]}`}>
          <FormatIcon className="w-3 h-3 mr-1" />
          {resource.format}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{resource.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{resource.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center"><Clock className="w-3 h-3 mr-1" />{resource.duration}</div>
          <div className="flex items-center"><Brain className="w-3 h-3 mr-1" />{resource.topic}</div>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ children, active, onClick, icon: Icon }) => (
  <button onClick={onClick} className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-700'}`}>
    {Icon && <Icon className="w-4 h-4 mr-2" />}
    {children}
  </button>
);

// --- Main Wellness Library Page ---

const WellnessLibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [filteredResources, setFilteredResources] = useState(mockResources);

  const topics = ['All', 'Anxiety', 'Stress', 'Sleep', 'Relationships', 'Study Skills', 'Depression'];
  const formats = ['All', 'Articles', 'Videos', 'Audio'];
  const topicIcons = { 'All': Filter, 'Anxiety': Brain, 'Stress': Heart, 'Sleep': Moon, 'Relationships': Users, 'Study Skills': GraduationCap, 'Depression': Brain };
  const formatIcons = { 'All': Filter, 'Articles': BookOpen, 'Videos': Video, 'Audio': Headphones };

  useEffect(() => {
    let filtered = mockResources;
    if (searchQuery) {
      filtered = filtered.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    }
    if (selectedTopic !== 'All') {
      filtered = filtered.filter(r => r.topic === selectedTopic);
    }
    if (selectedFormat !== 'All') {
      const formatMap = { 'Articles': 'ARTICLE', 'Videos': 'VIDEO', 'Audio': 'AUDIO' };
      filtered = filtered.filter(r => r.format === formatMap[selectedFormat]);
    }
    setFilteredResources(filtered);
  }, [searchQuery, selectedTopic, selectedFormat]);

  const handleResourceClick = (resource) => {
    alert(`Opening: ${resource.title}`);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTopic('All');
    setSelectedFormat('All');
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Wellness Library</h1>
        <p className="text-gray-600 dark:text-gray-300">Explore our curated collection of resources to support your well-being.</p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mb-8">
        <Search className="absolute h-5 w-5 text-gray-400 dark:text-gray-500 left-4 top-1/2 -translate-y-1/2" />
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="block w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" placeholder="Search for topics like 'anxiety', 'exams'..." />
        {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-3 flex items-center"><X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" /></button>}
      </div>

      {/* Filtering Controls */}
      <div className="mb-8 space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Filter by Topic</h3>
          <div className="flex flex-wrap gap-2">{topics.map(t => <FilterButton key={t} active={selectedTopic === t} onClick={() => setSelectedTopic(t)} icon={topicIcons[t]}>{t}</FilterButton>)}</div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Filter by Format</h3>
          <div className="flex flex-wrap gap-2">{formats.map(f => <FilterButton key={f} active={selectedFormat === f} onClick={() => setSelectedFormat(f)} icon={formatIcons[f]}>{f}</FilterButton>)}</div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mb-6 border-t dark:border-gray-700 pt-6">
        <p className="text-gray-600 dark:text-gray-300">Showing {filteredResources.length} of {mockResources.length} resources</p>
      </div>
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map(r => <ResourceCard key={r.id} resource={r} onClick={handleResourceClick} />)}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No resources found</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your search or filters.</p>
          <button onClick={clearFilters} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Clear filters</button>
        </div>
      )}
    </div>
  );
};

export default WellnessLibraryPage;