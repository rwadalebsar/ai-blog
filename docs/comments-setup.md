# Comments System Setup Guide

This guide explains how to set up and configure the comments system for the AI Blog using Giscus (GitHub Discussions).

## Overview

The comments system uses **Giscus**, which leverages GitHub Discussions to provide a modern, integrated commenting solution. This approach offers several advantages:

- ✅ **No external dependencies** - Uses GitHub's infrastructure
- ✅ **Spam protection** - GitHub's built-in moderation
- ✅ **User authentication** - GitHub login required
- ✅ **Markdown support** - Rich text formatting
- ✅ **Reactions and replies** - Full discussion features
- ✅ **Multilingual support** - Works with Arabic and English
- ✅ **Free and open source** - No cost or vendor lock-in

## Setup Instructions

### Step 1: Enable GitHub Discussions

1. Go to your repository: `https://github.com/rwadalebsar/ai-blog`
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**
5. Click **Set up discussions**

### Step 2: Create Discussion Categories

1. Go to the **Discussions** tab in your repository
2. Click **New discussion**
3. Create a category called **"Comments"** (or any name you prefer)
4. Set the category format to **"Announcement"** or **"General"**

### Step 3: Get Repository Information

1. Visit [giscus.app](https://giscus.app)
2. Enter your repository: `rwadalebsar/ai-blog`
3. The tool will automatically generate:
   - Repository ID
   - Category ID
   - Configuration script

### Step 4: Update Configuration

Update the values in `_config.yml`:

```yaml
comments:
  enabled: true
  provider: "giscus"
  giscus:
    repo: "rwadalebsar/ai-blog"
    repo_id: "YOUR_REPO_ID_HERE"  # From giscus.app
    category: "Comments"
    category_id: "YOUR_CATEGORY_ID_HERE"  # From giscus.app
    mapping: "pathname"
    reactions_enabled: true
    emit_metadata: false
    input_position: "bottom"
    theme: "preferred_color_scheme"
    lang: "en"
```

## Features

### Automatic Language Detection
The system automatically detects the page language and switches between English and Arabic:

- **English pages**: Comments interface in English
- **Arabic pages**: Comments interface in Arabic with RTL support

### Post Layout Integration
Blog posts using the `post` layout automatically include comments. To enable/disable comments on specific posts:

```yaml
---
layout: post
title: "Your Post Title"
comments: true  # Set to false to disable comments
---
```

### Responsive Design
The comments section is fully responsive and adapts to different screen sizes with proper RTL support for Arabic content.

### Theme Integration
Comments automatically adapt to the site's color scheme and support both light and dark modes.

## Customization Options

### Disable Comments Globally
To disable comments site-wide, set in `_config.yml`:

```yaml
comments:
  enabled: false
```

### Disable Comments on Specific Posts
Add to post front matter:

```yaml
comments: false
```

### Change Comment Position
Modify in `_config.yml`:

```yaml
giscus:
  input_position: "top"  # or "bottom"
```

### Customize Theme
Available themes:
- `light`
- `dark`
- `preferred_color_scheme` (automatic)
- `transparent_dark`
- `dark_dimmed`

## Moderation

### Comment Moderation
As the repository owner, you can:

1. **Delete inappropriate comments** in GitHub Discussions
2. **Lock discussions** to prevent further comments
3. **Convert comments to issues** if they report bugs
4. **Pin important discussions**

### User Management
- **Block users** who violate community guidelines
- **Set discussion permissions** (public, restricted, etc.)
- **Require approval** for first-time contributors

## Troubleshooting

### Comments Not Loading
1. Check that GitHub Discussions is enabled
2. Verify repository and category IDs are correct
3. Ensure the repository is public
4. Check browser console for JavaScript errors

### Wrong Language
1. Verify page `lang` attribute is set correctly
2. Check that Arabic pages have `lang: ar` in front matter
3. Clear browser cache and reload

### Styling Issues
1. Check that CSS custom properties are defined
2. Verify RTL styles are applied for Arabic content
3. Test on different screen sizes

## Security Considerations

### Data Privacy
- Comments are stored on GitHub's servers
- User data is governed by GitHub's privacy policy
- No personal data is stored on your site

### Spam Protection
- GitHub login required to comment
- Built-in spam detection
- Repository owner moderation controls

## Analytics and Insights

### Discussion Analytics
GitHub provides insights on:
- Number of discussions and comments
- User engagement metrics
- Popular topics and posts

### Integration with Site Analytics
Comments activity can be tracked through:
- GitHub's built-in analytics
- Google Analytics events (if configured)
- Custom tracking scripts

## Migration

### From Other Comment Systems
If migrating from other systems:

1. **Export existing comments** from previous platform
2. **Create GitHub discussions** for popular posts
3. **Import comments manually** or via GitHub API
4. **Update post URLs** if necessary

### Backup Strategy
- Comments are automatically backed up with GitHub
- Export discussions via GitHub API if needed
- No additional backup required

## Support

### Getting Help
- **Giscus Documentation**: [giscus.app](https://giscus.app)
- **GitHub Discussions Help**: [docs.github.com](https://docs.github.com/en/discussions)
- **Jekyll Documentation**: [jekyllrb.com](https://jekyllrb.com)

### Community
- Join discussions in the repository
- Report issues via GitHub Issues
- Contribute improvements via Pull Requests

---

The comments system is now ready to use! Users can engage with your content directly through GitHub, creating a vibrant community around your AI blog.
