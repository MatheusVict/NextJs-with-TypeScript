import { Tcomputer, fakeComputer } from '@/services/fakeData'
import { GetServerSideProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import prisma from '../../lib/prisma'
import React from 'react'
import { Brand, Computer } from '@prisma/client'
interface DealsProps {
  data:  Computer & {brand: Brand};
}

const Deals: React.FC<DealsProps> = ({data}) => {

  const {brand} = data

  return (
    <div>
      <h1>SpecialDeal</h1>
      <span>O id: {data.id}</span><br />
      <span>Cpu: {data.cpu}</span><br />
      <span>gpu: {data.gpu}</span><br />
      <span>price: {data.price.toFixed(2)}</span><br />
      <span>ram: {data.ram}</span><br />
      <span>storage: {data.storage}</span><br />
      <h2>Brand:</h2>
      <span>{brand.name}</span>
    </div>
  )
}

export default Deals

// Essas funções só funcionam se forem exportadas e tiverem o nome certo

export const getServerSideProps: GetServerSideProps = async (context) => { // Pra usar precisa do useRouter
  const {id} = context.query;
 const idNumber = parseInt(id as string);


  let selectComputer = await prisma.computer.findUnique({
    where: {
      id: idNumber
    },
    include: {
      brand: true,
    }
  })

  if(selectComputer){
    selectComputer.price = selectComputer.price - selectComputer.price * Math.random()*0.15;
  }

  return {
    props: {data: selectComputer},
  }
}

/* export const getStaticPaths: GetStaticPaths = async (context) => {
  const computers = fakeComputer;

  const paths = computers.map((computer) => ({
    params: {id: computer.id.toString()} // o parametro precisa ser string
  }));
  console.log(paths);
  return {paths, fallback: false}
}  */