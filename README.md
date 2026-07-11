# Productivity Dashboard

A sleek, all-in-one productivity dashboard built with vanilla JavaScript, featuring a to-do list, daily planner, motivational quotes, a Pomodoro timer, and a monthly goals tracker — all wrapped in a smooth, animated UI with multiple theme options.

Live Demo: https://productivity-dashboard-three-sigma.vercel.app/

## Features

- **To Do List** — Add tasks with optional details and mark them as important, then check them off as you complete them.
- **Daily Planner** — Plan out your day hour by hour, with your plan saved locally so it's there when you come back.
- **Motivation** — Get a fresh quote of the day fetched live to keep you inspired.
- **Pomo Doro Timer** — A classic Pomodoro-style work timer with Start, Pause, and Reset controls to help you stay focused in timed sessions.
- **Monthly Goals** — A dedicated goals view with a mini calendar, a daily checklist (color-coded and time-stamped goals, up to 20 per day), and a full weekly board to see your progress across the week at a glance.
- **Live Weather & Time** — The header displays the current date, time, and real-time weather (temperature, heat index, humidity, and wind) for your location.
- **Theme Switcher** — Cycle through multiple curated color themes with a single click.
- **Persistent Storage** — Tasks, daily plans, and goals are all saved with `localStorage`, so your data stays put between sessions.
- **Smooth Interactions** — Built with Locomotive Scroll and Swiper for fluid scrolling and carousel effects.

## Tech Stack

- **HTML5 / CSS3** — Structure and styling, with CSS custom properties powering the theme system
- **JavaScript (Vanilla)** — All app logic, state management, and DOM interactions
- **[Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)** — Smooth scrolling
- **[Swiper.js](https://swiperjs.com/)** — Carousel/slider functionality
- **[Remix Icon](https://remixicon.com/)** — Icon set
- **[WeatherAPI](https://www.weatherapi.com/)** — Live weather data
- Custom typeface: Aeonik Pro (Light, Medium, Bold)

## Project Structure

```
Productivity-Dashboard/
├── index.html      # Main HTML structure and all app sections
├── style.css        # Styling, layout, and theme variables
├── script.js         # App logic: tasks, planner, timer, goals, weather, themes
├── Aeonik Pro *.ttf  # Custom fonts
├── favicon-16x16.png
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Productivity-Dashboard.git
   cd Productivity-Dashboard
   ```
2. Open `index.html` directly in your browser, or serve it with a local server (e.g. the VS Code Live Server extension) for the best experience.

No build step or dependencies to install — it's pure HTML, CSS, and JS.

## Configuration

The weather feature uses the WeatherAPI.com API. If you fork this project, swap in your own API key in `script.js` (or, better, load it from an environment variable / backend proxy so it isn't exposed in client-side code).

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Since it's a static site, you can deploy it by:

1. Pushing the repo to GitHub.
2. Importing the repo into Vercel.
3. Deploying with the default static site settings — no build command needed.

## Roadmap / Ideas

- User accounts and cloud sync for cross-device access
- Notifications/reminders for planned tasks and goals
- Export/import of task and goal data
- Additional theme options

## Author

Built by **unbothered-29**

## License

This project is open source and available under the [MIT License](LICENSE).
