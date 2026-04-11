# Engineering Portfolio & CV Architecture

A high-performance, data-driven personal portfolio and CV built to showcase resilient systems, technical leadership, and engineering excellence.

**Live Deployment:** [alsahid.vercel.app](https://alsahid.vercel.app)

## Technical Architecture

This application was engineered with a focus on maintainability, static performance, and automated validation.

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest & React Testing Library
- **CI/CD:** GitHub Actions & Vercel
- **Data Layer:** Local JSON schema (`cv.json`) & Live external REST APIs

## Key Features

- **Strict Component Separation:** Isolates high-impact visual landing pages (`<About />`) from dense CV data to ensure clean routing and maintainability.
- **Live GitHub API Integration:** Fetches real-time repository data using parallel data fetching and Next.js static revalidation (ISR).
- **Automated CI/CD Pipeline:** GitHub Actions validate dependencies, execute the Vitest suite, and verify the Next.js production build prior to Vercel deployment.
- **Test-Driven:** Critical components are backed by unit tests to verify rendering logic and data interpolation.

## Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/simms11/engineering-portfolio.git
   cd engineering-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

*The application will be available at [http://localhost:3000](http://localhost:3000).*

## Data Management

All CV content (Experience, Skills, Education, Certifications) is isolated in `src/data/cv.json`. This decouples the presentation layer from the data layer, allowing for instant CV updates without modifying React components.