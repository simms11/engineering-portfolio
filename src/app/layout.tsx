import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className="antialiased">
      <Navbar />
      {/* Add padding-top so content isn't hidden behind the fixed navbar */}
      <div className="pt-16">
        {children}
      </div>
      </body>
      </html>
  );
}