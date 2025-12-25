# Public Assets

This folder contains static assets that are served directly by Vite.

## Folder Structure

- `/images` - General images used across the site
- `/assets` - Other assets like icons, fonts, etc.

## Usage

Files in the public folder are served at the root path. For example:

- `public/logo.svg` → accessible at `/logo.svg`
- `public/images/hero.jpg` → accessible at `/images/hero.jpg`
- `public/assets/icon.png` → accessible at `/assets/icon.png`

In your React components, reference them like:

```jsx
<img src="/logo.svg" alt="Logo" />
<img src="/images/hero.jpg" alt="Hero" />
<img src="/assets/icon.png" alt="Icon" />
```

Note: The leading `/` is important - it references the public folder root.
