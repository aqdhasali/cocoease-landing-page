import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Coco Ease - Growing Stronger Together",
  description: "Your reliable supplier of premium coco growing media and coir products produced in Sri Lanka. We are committed to supporting commercial growers.",

  icons:{
    icon:"./favicon.png"
  }
};


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100','200','300','400', '500','600', '700','800','900'],
    style: 'normal',
  
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
