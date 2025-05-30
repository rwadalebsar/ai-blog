---
layout: default
lang: ar
title: المدونة
title_ar: المدونة
description_ar: أحدث الرؤى والدروس والمناقشات حول الذكاء الاصطناعي والتعلم الآلي
---

# أحدث المنشورات

استكشفوا أحدث رؤانا ودروسنا ومناقشاتنا حول الذكاء الاصطناعي والتعلم الآلي والتقنيات الناشئة.

---

{% assign arabic_posts = site.posts | where: "lang", "ar" %}
{% if arabic_posts.size > 0 %}
  <div class="posts-grid">
    {% for post in arabic_posts %}
      <article class="post-card">
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %B %Y" }}</time>
          {% if post.categories.size > 0 %}
            <span class="post-categories">
              {% for category in post.categories %}
                <span class="post-category">{{ category }}</span>
              {% endfor %}
            </span>
          {% endif %}
        </div>
        
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title_ar | default: post.title }}</a>
        </h2>
        
        {% if post.excerpt %}
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </div>
        {% endif %}
        
        <div class="post-footer">
          <a href="{{ post.url | relative_url }}" class="read-more">اقرأ المزيد ←</a>
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
    <h2>قريباً!</h2>
    <p>نحن نعمل على محتوى مثير. تحققوا مرة أخرى قريباً للحصول على أحدث رؤانا حول الذكاء الاصطناعي والتعلم الآلي.</p>
    <p>في غضون ذلك، استكشفوا <a href="{{ '/ar/resources' | relative_url }}">قسم الموارد</a> للحصول على مواد تعليمية منسقة.</p>
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

[dir="rtl"] .post-meta {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.post-categories {
  display: flex;
  gap: 0.5rem;
}

[dir="rtl"] .post-categories {
  flex-direction: row-reverse;
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

[dir="rtl"] .post-footer {
  flex-direction: row-reverse;
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

[dir="rtl"] .post-tags {
  flex-direction: row-reverse;
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
  
  [dir="rtl"] .post-footer {
    align-items: flex-end;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  [dir="rtl"] .post-meta {
    align-items: flex-end;
  }
}
</style>
