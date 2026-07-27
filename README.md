# BlogVerse 📰

A modern, responsive blog platform built with React and Tailwind CSS, aggregating real articles from around the web across multiple categories — Technology, Business, Sport, Science, Culture, and Lifestyle.

Designed from a Figma UI kit and brought to life with real-world API data, dynamic routing, and a clean, card-based reading experience.

**🔗 Live Demo:** [blog-verse-roan-one.vercel.app]

---

## ✨ Features

### 📋 Blog Listing Page
- Responsive **3-column grid** layout displaying article cards
- Each card includes: cover image, category badge, title, author avatar, author name, and publish date
- **Pagination via "Load More"** — fetches additional articles from the API without reloading the page
- Uniform card heights across each row, regardless of title length (via `line-clamp` + flex layout)
- Graceful image handling for articles with unconventional cover images (banners, text-based graphics)

### 🔍 Live Search
- Real-time filtering of articles by title as the user types
- No page reload — search updates the grid instantly
- Search state stays in sync with newly loaded articles (via Load More)

### 📖 Single Post Page
- Dynamic routing — clicking any card opens its full article
- Full article body rendered from the API's HTML content
- Cover image, category badge, author info, and publish date displayed consistent with the listing design
- Typography styled with `@tailwindcss/typography` for well-spaced, readable long-form content
- Custom serif font (Source Serif Pro) applied to body text for a more editorial, magazine-like reading feel

### 🎨 UI/UX Details
- Pixel-accurate implementation from Figma design specs (spacing, radius, colors, typography)
- Smooth hover transitions on interactive elements (nav links, buttons)
- Fully responsive layout with a shared `Header` (logo, navigation, search) across all pages via React Router's `Layout` + `Outlet` pattern

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router v6 (Layout / Outlet pattern) |
| Typography | @tailwindcss/typography |
| Data Source | [Dev.to API](https://developers.forem.com/api) |
| Deployment | Vercel |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Logo, nav, search — shared across all pages
│   ├── Logo.jsx
│   ├── SearchInput.jsx
│   ├── BlogCard.jsx        # Individual article card
│   └── BlogsList.jsx       # Grid + Load More logic
├── pages/
│   ├── Layout.jsx          # Shared layout wrapper (Header + Outlet)
│   ├── Home.jsx            # Blog listing page
│   └── Blog.jsx             # Single post page
├── hooks/
│   ├── useFetchBlogs.js        # Fetches paginated article list + search filtering
│   └── useFetchSingleBlog.js   # Fetches full article content by ID
└── App.jsx                 # Route definitions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone [your-repo-link-here]

# Navigate into the project
cd blogverse

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build for Production

```bash
npm run build
```

---

## 🔑 Key Implementation Notes

- **Data normalization:** Since the Dev.to API returns `tag_list` as an array on the list endpoint but as a comma-separated string on the single-article endpoint, both hooks normalize tags into a consistent array before use.
- **Load More pagination:** Uses the API's native `page` parameter (not just an increasing `per_page`) to fetch genuinely new articles on each click, appending them to existing results rather than replacing them.
- **Shared data fetching:** `useFetchBlogs` is called once at the `Layout` level and passed down via `useOutletContext`, avoiding duplicate API calls between the header (search) and the listing page.

---

## 🎯 Future Improvements

- [ ] Skeleton loading states instead of plain "Loading..." text
- [ ] Category filter tabs (in addition to text search)
- [ ] Dark mode support
- [ ] Bookmark/save article feature (localStorage)

---

## 👩‍💻 Author

**Yomna Elsafty**
Clinical Pharmacist turned Front-End Developer, building the bridge between medicine and technology.

- GitHub: [github.com/yomnaelsafty](https://github.com/yomnaelsafty)
- LinkedIn: [linkedin.com/in/yomna-ali-66a778148](https://linkedin.com/in/yomna-ali-66a778148)

---

## 📄 License

This project is open for learning purposes. Feel free to fork and build on it.
