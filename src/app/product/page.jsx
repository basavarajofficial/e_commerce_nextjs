import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SingleProduct from '@/components/SingleProduct';
import { getSingleProduct, getTrendProducts } from '@/helpers';

const page = async ({searchParams}) => {
  const stringID = searchParams?._id;
  const _id = Number(stringID);

  // single products
  const product = getSingleProduct(_id);
  // console.log(product);


  const {Trending_Products : data} = await getTrendProducts();




  return (
    <div>
      <Container>
        <div>
          <SingleProduct product={product} />
        </div>
        <div>
        <h1 className='text-3xl py-5 pt-10 font-semibold text-slate-500'>Trending Products</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
          {data?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
        </div>
      </Container>
    </div>
  )
}

export default page