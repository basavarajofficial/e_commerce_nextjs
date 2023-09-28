import Header from '@/components/Header'
import './style/globals.css'
import Layout from '@/components/Layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/Footer';


export const metadata = {
  title: 'e.mart',
  description: 'Generated by create next app',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='scroll-smooth'  >

       <Layout>
       <Header />
        {children}
        <Footer />
       </Layout>
        
      </body>
    </html>
  )
}
