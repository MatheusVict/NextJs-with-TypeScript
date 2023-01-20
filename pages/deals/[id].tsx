import { Tcomputer, fakeComputer } from '@/services/fakeData'
import { GetServerSideProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
interface DealsProps {
  data:  Tcomputer;
}

const Deals: React.FC<DealsProps> = ({data}) => {
  return (
    <div>
      <h1>SpecialDeal</h1>
      <span>O id: {data.id}</span>
      <span>Cpu: {data.cpu}</span>
      <span>gpu: {data.gpu}</span>
      <span>price: {data.price.toFixed(2)}</span>
      <span>ram: {data.ram}</span>
      <span>storage: {data.storage}</span>
    </div>
  )
}

export default Deals

// Essas funções só funcionam se forem exportadas e tiverem o nome certo

export const getServerSideProps: GetServerSideProps = async (context) => { // Pra usar precisa do useRouter
  const {id} = context.query;

  let selectComputer = fakeComputer.filter((pc) => pc.id.toString() === id)[0];

  selectComputer = {...selectComputer}

  selectComputer.price = selectComputer.price - selectComputer.price * Math.random()*0.15;

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