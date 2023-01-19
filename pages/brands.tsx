import { TBrand, fakeBrands } from '@/services/fakeData'
import { GetStaticProps } from 'next'
import React from 'react'

interface BrandsProps {
  brands: TBrand[];
}

const Brands: React.FC<BrandsProps> = ({brands}) => {
  return (
    <div>
      <h1>Brands Avalible:</h1>
      <br />
     <ul>
      {brands.map((brand, index) => {
        return <div key={index}>
          <span>{brand.id}</span>
          <span>{brand.name}</span>
        </div>
      })}
     </ul>
    </div>
  )
}

export default Brands

export const getStaticProps: GetStaticProps = async (context) => {
  const brands = fakeBrands;

  return {
    props: {
      brands // Concatena com a props
    },
    revalidate: 10 
    /* 
    De quanto em quanto tempo os dados vão ser requisitados denovo.
    Só funciona em produção
    */
  }
}