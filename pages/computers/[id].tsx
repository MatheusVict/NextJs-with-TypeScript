import { Tcomputer, fakeComputer } from '@/services/fakeData';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'

interface ComputerProps {
  data: Tcomputer;
}

const Computer: React.FC<ComputerProps> = ({data}) => { 
  // O nome do props tem q ser o msm do getStaticProps
  return (
    <div>
      <span>O id: {data.id}</span>
      <span>Cpu: {data.cpu}</span>
      <span>gpu: {data.gpu}</span>
      <span>price: {data.price}</span>
      <span>ram: {data.ram}</span>
      <span>storage: {data.storage}</span>
    </div>
  );
};

export default Computer;

export const getStaticProps: GetStaticProps = ({params}) => {
 const id = params?.id;

 const selectComputer = fakeComputer.filter((pc) => pc.id.toString() == id)[0]
 

 return {
  props: {
    data: selectComputer
  }
 }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const computers = fakeComputer;

  const paths = computers.map((computer) => ({
    params: {id: computer.id.toString()} // o parametro precisa ser string
  }));
  console.log(paths);
  
  // Caminhos que não existem renderiza um 404
  // Retorna as paths e o fallback
  return {paths, fallback: false }
}