import { TBrand, fakeBrands } from '@/services/fakeData'
import { GetStaticProps } from 'next'
import React from 'react'
import prisma from "../lib/prisma";
import { Brand } from '@prisma/client';
import {Typography} from 'antd'
import Table, { ColumnsType } from 'antd/es/table';

const {Title} = Typography

const columns: ColumnsType<Brand> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
];

interface BrandsProps {
  brands: Array<Brand>;
}

const Brands: React.FC<BrandsProps> = ({brands}) => {
  return (
    <div>
      <Title level={3}>Brands Avalible:</Title>
      <br />
      <Table dataSource={brands} columns={columns} />
    </div>
  )
}

export default Brands

export const getStaticProps: GetStaticProps = async (context) => {
  // const brands = fakeBrands;

  const brands = await prisma.brand.findMany();

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