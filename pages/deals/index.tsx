import { Tcomputer, fakeComputer } from '@/services/fakeData';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import prisma from "../../lib/prisma";
import { Brand, Computer } from '@prisma/client';
import {Typography} from 'antd';

const {Link, Text} = Typography

type ComputerSumary = {
  id: number;
  brand: Brand;
}

interface ComputerProps {
  computers: ComputerSumary[]
}

const ComputersDeals: React.FC<ComputerProps> = ({computers}) => { 
  // O nome do props tem q ser o msm do getStaticProps
  return (
    <div>
      {computers.map((computer) => {
        return (<Link key={computer.id} href={`/deals/${computer.id}`}>
          <Text type='danger'>Deal!!:  </Text>
          <span>ID: {computer.id}</span>
          <br />
          <span>Marca: {computer.brand.name}</span>
          <br />
        </Link>
      )})}
    </div>
  );
};

export default ComputersDeals;

export const getStaticProps: GetStaticProps = async () => {
  const computers = await prisma.computer.findMany({
    select: {
      id: true,
      brand: true
    }
  });

 return {
  props: {
    computers: computers
  }
 }
};
