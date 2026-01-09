# Modern Stopwatch Web App

A sleak, dark-themed stopwatch application built with vanilla HTML, CSS, and JavaScript. Featuring a glassmorphism design, accurate time tracking, and lap recording functionality.

## Features

- **Precision Timing**: Displays hours, minutes, seconds, and milliseconds (10ms resolution).
- **Controls**:
  - **Start**: Begins the timer.
  - **Pause**: Halts the timer without resetting.
  - **Reset**: Clears the timer and all recorded laps.
  - **Lap**: Records the current time and adds it to a scrollable list.
- **Modern UI**:
  - Dark theme with a radial gradient background.
  - Glassmorphism effects (frosted glass) on the main card.
  - Text glow effects for the digital display.
  - Interactive buttons with hover animations and distinct color gradients.
  - Responsive design that looks good on desktop and mobile.

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, Animations, and Backdrop Filter.
- **JavaScript (ES6+)**: Event handling, `setInterval` for timing, and DOM manipulation.
- **Fonts**: Google Fonts ('Inter' and 'Roboto Mono').

## Project Structure

```
/
├── index.html      # Main HTML structure
├── style.css       # Styles and animations
├── script.js       # Logic for timer and controls
└── README.md       # Project documentation
```

## How to Run

1.  Clone the repository or download the source files.
2.  Navigate to the project directory.
3.  Open `index.html` in your preferred web browser.

## Customization

You can easily customize the colors in `style.css` by modifying the CSS variables at the top of the file:

```css
:root {
    --bg-gradient: radial-gradient(circle at center, #1e1e2f 0%, #000000 100%);
    --card-bg: rgba(255, 255, 255, 0.05);
    /* ... other variables */
}
```

## License

This project is open-source and available for personal or educational use.
