import React from 'react'
import Table from '../../components/Table'
import {useSelector} from 'react-redux'

export default function Pagination(props) {
  const pagCount = +props.pag
  const firstSl = pagCount*6 - 6
  const secondSl = pagCount*6
const data = useSelector(state=>state.items.data)
  const dataPag = data.slice(firstSl,secondSl)
  return (
    <div>
      <Table data={dataPag} pagCount={pagCount} firstSl={firstSl} secondSl={secondSl}/>
    </div>
  )
}

export async function getServerSideProps({query}){
  const response = await fetch(`http://localhost:3000/api/items`)
  const data = await response.json()
return{
  props:{
    data:data,
    pag:query.id
  }
}
}
