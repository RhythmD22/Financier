# Financier - College Budgeting Web App

## Overview

Financier is a lightweight web application that helps college students track spending, plan budgets and manage income. The app runs entirely in the browser, so no server setup is required.

## Getting Started

1. Clone this repository.
2. Launch a local web server from the project directory:
   ```bash
   python3 -m http.server
   ```
   Then open `http://localhost:8000` in your browser. You can also open `index.html` directly without a server.
3. If you prefer not to run a server, the latest version is hosted on GitHub Pages:
   <https://rhythmdesai22.github.io/Financier/>

## Progressive Web App (PWA) Support

Financier can be installed as a Progressive Web App on mobile devices:
1. Open the site in Safari on iOS at <https://rhythmdesai22.github.io/Financier/> (do not include `index.html` in the URL).
2. Tap the "Share" button.
3. Select "Add to Home Screen".
4. The app will now appear on your home screen and launch in full-screen mode.

Note: Make sure you're accessing the site at the root URL (without `index.html`) to ensure proper PWA functionality.

## Navigation

- **Index:** Landing page with quick links to other sections.
- **Goals & Categories:** Configure custom categories and set financial goals.
- **Track Transactions:** Record income and expenses for each category.
- **Analytics:** View charts summarizing weekly and monthly spending trends.
- **Money Tips:** Browse practical budgeting advice.
- **Calculator:** Perform calculations without leaving the app.

All data is saved in your browser via `localStorage` and can be exported as CSV.

## Features

- **Goal Setting:** Set personalized financial goals with customizable categories.
- **Expense & Income Tracking:** Monitor all transactions, including dedicated support for meal planning.
- **Visual Summaries:** View weekly and monthly overviews of spending and income through charts.
- **Built-in Calculator:** Perform financial calculations without leaving the app.
- **Budgeting Tips:** Receive practical financial advice tailored to college students.
- **Local Data Storage:** Data is saved in the browser and can be exported as a CSV file.
- **PWA Support:** Install the app on your mobile device for a native app-like experience.

## Technology Stack

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
