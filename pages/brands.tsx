import { GetStaticProps } from 'next'
import React from 'react'
import prisma from "../lib/prisma";
import { Brand } from '@prisma/client';
import {Typography} from 'antd'
import {Table} from 'antd'
import type { ColumnsType } from 'antd/es/table';

const {Title} = Typography

const columns: ColumnsType<Brand> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
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
    revalidate: 10,
  }
}