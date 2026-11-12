import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activitiesData } from '../data/activitiesData';
import ActivityCard from '../components/ActivityCard';

export default function Activities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = activitiesData.map(post => post.category);
    return ['All', ...new Set(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return activitiesData
      .filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const searchableText = [
          post.title,
          post.category,
          post.summary,
          post.location,
          post.author,
          ...(post.body || []),
          ...(post.tags || [])
        ].join(' ').toLowerCase();

        const matchesSearch = searchableText.includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return new Date(b.date) - new Date(a.date);
      });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <section className="hero-subpage">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Activities and Events</h1>
          <p className="tagline"></p>
        </motion.div>
      </section>

      <section className="activities-section">
        <div className="container">
          <motion.div 
            className="feed-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">DWSSII Community</span>
            <h2>School Activities Feed</h2>
            <p>Stay updated with official activities, events, and announcements.</p>
          </motion.div>

          <motion.div 
            className="feed-tools"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="search-box">
              <label htmlFor="search">Search updates</label>
              <input
                type="search"
                id="search"
                placeholder="Search events, activities, announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="activity-filters">
              {categories.map(category => (
                <motion.button
                  key={category}
                  type="button"
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="feed-status">
            {filteredPosts.length} update{filteredPosts.length !== 1 ? 's' : ''} found
          </div>

          <div className="activity-feed">
            <AnimatePresence mode="wait">
              {filteredPosts.length === 0 ? (
                <motion.div
                  key="empty"
                  className="empty-feed"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <h3>No updates found</h3>
                  <p>Try searching with another keyword or category.</p>
                </motion.div>
              ) : (
                filteredPosts.map((post, index) => (
                  <ActivityCard key={post.id} post={post} index={index} />
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}