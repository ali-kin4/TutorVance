import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Tutorvance",
  description: "Find your perfect tutor with AI-powered tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkfNwpQ1yl8WZlXQbK5jXWm7x0ZrQ8qY8h1NIsDPx4oZIYk8aA2ZrN8pA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

