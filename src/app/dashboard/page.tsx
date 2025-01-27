import React from 'react'
import { SalesChart } from '../sales-chart/pages'
import { KualitasChart } from '../kualitas-chart/pages'
import Sidebar from '../halaman-utama/page'

const Pages = () => {
  return (
    <>
    <Sidebar page="Dashboard">
      <div className='grid lg:grid-cols-2 gap-4'>
          <SalesChart/>
          <KualitasChart/>
      </div>
    </Sidebar>
        
    </>
  )
}

export default Pages