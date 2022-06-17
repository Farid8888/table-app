import React from 'react'
import Table from '../components/Table'

export default function index(props) {
  const dataPag = props.data.slice(0,6)
  return (
    <div>
       <Table data={dataPag}/>
    </div>
  )
}

export  async function getStaticProps(){
  const response = await fetch(`http://localhost:3000/api/items`)
  const data = await response.json()
return{
  props:{
    data:data
  }
}
}