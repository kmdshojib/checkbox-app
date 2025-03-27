import './globals.css';

export const metadata = {
  title: 'Checkbox Selection App',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}
