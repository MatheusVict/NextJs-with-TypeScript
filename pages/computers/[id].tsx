import { Tcomputer, fakeComputer } from '@/services/fakeData';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import prisma from "../../lib/prisma";
import { Computer } from '@prisma/client';

interface ComputerProps {
  data: Computer;
}

const PageComputer: React.FC<ComputerProps> = ({data}) => { 
  // O nome do props tem q ser o msm do getStaticProps
  return (
    <div>
      <span>O id: {data.id}</span><br />
      <span>Cpu: {data.cpu}</span><br />
      <span>gpu: {data.gpu}</span><br />
      <span>price: {data.price}</span><br />
      <span>ram: {data.ram}</span><br />
      <span>storage: {data.storage}</span><br />
    </div>
  );
};

export default PageComputer;

export const getStaticProps: GetStaticProps = async ({params}) => {
 const id = parseInt(params?.id as string)

 const selectComputer = await prisma.computer.findUnique({
  where: {
    id
  }
 })
 

 return {
  props: {
    data: selectComputer
  }
 }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const computers = await prisma.computer.findMany();
  ;

  const paths = computers.map((computer) => ({
    params: {id: computer.id.toString()} // o parametro precisa ser string
  }));
  console.log(paths);
  
  // Caminhos que não existem renderiza um 404
  // Retorna as paths e o fallback
  return {paths, fallback: false }
}