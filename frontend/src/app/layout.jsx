import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "手链购物网站 - 精致优雅的轻奢手链",
  description: "专注于轻奢手链设计，为您带来精致优雅的配饰体验",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
