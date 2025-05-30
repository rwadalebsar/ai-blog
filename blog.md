---
layout: default
title: Blog
description: Latest insights, tutorials, and discussions about artificial intelligence and machine learning.
---

# Latest Posts

Explore our latest insights, tutorials, and discussions about artificial intelligence, machine learning, and emerging technologies.

---

{% if site.posts.size > 0 %}
  <div class="posts-grid">
    {% for post in site.posts %}
      <article class="post-card">
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          {% if post.categories.size > 0 %}
            <span class="post-categories">
              {% for category in post.categories %}
                <span class="post-category">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </div>
        
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        
        {% if post.excerpt %}
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </div>
        {% endif %}
        
        <div class="post-footer">
          <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
          {% if post.tags.size > 0 %}
            <div class="post-tags">
              {% for tag in post.tags limit: 3 %}
                <span class="post-tag">#{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
{% else %}
  <div class="no-posts">
    <h2>Coming Soon!</h2>
    <p>We're working on some exciting content. Check back soon for our latest insights on AI and machine learning.</p>
    <p>In the meantime, explore our <a href="{{ '/resources' | relative_url }}">resources section</a> for curated learning materials.</p>
  </div>
{% endif %}

<style>
.posts-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.post-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.post-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.post-categories {
  display: flex;
  gap: 0.5rem;
}

.post-category {
  background: var(--bg-secondary);
  color: var(--accent-color);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.post-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.3;
}

.post-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
}

.post-title a:hover {
  color: var(--accent-color);
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.read-more {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.read-more:hover {
  color: var(--primary-gradient-end);
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.post-tag {
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 500;
}

.no-posts {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  margin-top: 2rem;
}

.no-posts h2 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.no-posts p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .post-card {
    padding: 1.5rem;
  }
  
  .post-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
