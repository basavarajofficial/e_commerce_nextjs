import Banner from "@/components/Banner";
import Products from "@/components/Products";
// import { getProducts } from "@/helpers";

export default async function Home() {

  return (
    <main className="container">
      
      <div >
        <Banner  />
        <Products />
         </div>
    </main>
  )
}
