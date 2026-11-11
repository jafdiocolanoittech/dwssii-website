import { motion } from 'framer-motion';

export default function ActivityCard({ post, index }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Date to be announced";
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.getTime())) return "Date to be announced";
    return new Intl.DateTimeFormat("en-PH", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    }).format(date);
  };

  return (
    <motion.article
      className={`activity-card ${post.pinned ? 'pinned' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="post-header">
        <motion.div 
          className="post-avatar"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          DW
        </motion.div>
        <div className="post-meta">
          <h3>{post.title}</h3>
          <p>Posted by <strong>{post.author || 'DWSSII Administrator'}</strong></p>
          <p>{formatDate(post.date)}{post.time ? ` • ${post.time}` : ''}</p>
        </div>
      </div>

      <div className="post-badges">
        <span className="category-badge">{post.category || 'Update'}</span>
        {post.pinned && <span className="pin-badge">📌 Pinned Post</span>}
      </div>

      <div className="post-body">
        <p className="post-summary">{post.summary}</p>
        {post.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {post.location && (
        <div className="post-location">
          <span>📍</span> {post.location}
        </div>
      )}

      {post.images && post.images.length > 0 && (
        <div className={`post-media ${post.images.length > 1 ? 'multi' : ''}`}>
          {post.images.map((image, idx) => (
            <motion.img 
              key={idx} 
              src={image} 
              alt={`${post.title} photo ${idx + 1}`} 
              loading="lazy" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      )}

      {post.tags && post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map((tag, idx) => (
            <motion.span 
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>
      )}
    </motion.article>
  );
}