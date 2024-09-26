import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SubFooter from "@/components/SubFooter";
import '@/styles/globals.css';

export const metadata = {
  title: "Ismail Salah",
  description: "The official website of the photographer Ismail Salah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <SubFooter/>
        <Footer/>
      </body>
    </html>
  );
}
