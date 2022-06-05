import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { AiOutlineSearch } from 'react-icons/ai'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { BsPhone, BsApple } from 'react-icons/bs'
import { FaHeartbeat } from 'react-icons/fa'
import { BiPencil, BiWallet } from 'react-icons/bi'
import { VscGear } from 'react-icons/vsc'

import CategoryCard from '../components/dashboard/CategoryCard'
import TransactionCard from '../components/dashboard/TransactionCard'
import avatar from '../data/imgs/avatar.jpg'

const Dashboard = () => {
  const options = {
    chart: {
      type: 'spline',
      backgroundColor: '#F3F4F6',
      height: 80,

    },
    title: {
      text: ''
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        data: [100, 200, 500, 2200],
        color: '#22c55e',
        showInLegend: false,
      }
    ]
  }

  return (
    <div className='grid grid-cols-3 gap-16'>
      {/* Main content */}
      <div className='col-span-2'>
        {/* Search bar */}
        <div className='flex justify-between'>
          <div className='border-b-2 w-72 h-10 pt-2'>
            <div className='flex item-center ml-2'>
              <span className='text-2xl font-semibold text-gray-400'>
                <AiOutlineSearch />
              </span>
              <span className='ml-4 text-xl font-semibold font-poppins text-gray-400'>
                Search
              </span>
            </div>
          </div>

          <div className='text-xl font-semibold text-gray-400 font-poppins pt-2'>
            Calendar
          </div>
          <div className='text-xl font-semibold text-gray-400 font-poppins pt-2'>
            Notifications
          </div>
        </div>

        {/* Categories */}
        <div className='mt-16'>
          <span className='text-2xl font-poppins font-semibold text-gray-800'>Categories</span>
          <div className='flex justify-between mt-6'>
            <CategoryCard
              title="Eating"
              bgColor="red"
              icon={<GiForkKnifeSpoon />}
              amount={2000.00}
            />
            <CategoryCard
              title="Equipments"
              bgColor="blue"
              icon={<BsPhone />}
              amount={3000.00}
            />
            <CategoryCard
              title="Health"
              bgColor="green"
              icon={<FaHeartbeat />}
              amount={4000.00}
            />
          </div>
        </div>

        {/* Transactions */}
        <div className='mt-16'>
          <span className='text-2xl font-poppins font-semibold text-gray-800'>Transactions</span>
          <div className='flex flex-col mt-4 gap-6'>
            <TransactionCard
              title="iCloud"
              date="3 Jun 2022"
              amount="6.00"
              icon={<BsApple />}
            />
            <TransactionCard
              title="AirPods 3"
              date="1 Jun 2022"
              amount="1199.00"
              icon={<BsApple />}
            />
            <TransactionCard
              title="iWatch SE"
              date="13 Feb 2022"
              amount="1899.00"
              icon={<BsApple />}
            />
          </div>

        </div>
      </div>

      {/* Right bar */}
      <div className='flex flex-col gap-10'>

        {/* User Profile */}
        <div className='border w-full h-72 rounded-xl bg-gray-200 p-4'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
              <img src={avatar} className="h-16 w-16 rounded-full"></img>
            </div>
            <div className='flex justify-center mt-3'>
              <div className='flex flex-col'>
                <div>
                  <h1 className='font-poppins text-2xl font-medium'>Welcome, Wenwei!</h1>
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                  <div className='flex items-center justify-between w-full'>
                    <span className='text-lg font-poppins text-gray-500 font-medium'>Profile</span>
                    <span className='text-gray-500 text-lg'>{<BiPencil />}</span>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span className=' text-lg font-poppins text-gray-500 font-medium'>Settings</span>
                    <span className='text-gray-500 text-lg'>{<VscGear />}</span>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span className=' text-lg font-poppins text-gray-500 font-medium'>Wallet</span>
                    <span className='text-gray-500 text-lg'>{<BiWallet />}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Income Chart */}

        <div className='w-full h-36 border border-gray-300 rounded-xl px-3 py-2'>
          <h2 className='font-poppins font-semibold text-gray-800'>Income</h2>
          <div>
            <span className='font-poppins text-xl font-semibold'>¥ 3,000</span>
          </div>
          <div className='h-30'>
            <HighchartsReact highcharts={Highcharts} options={options} className="" />
          </div>
        </div>

        {/* Expense Chart */}
        <div className='w-full h-36 border border-gray-300 rounded-xl px-3 py-2'>
          <h2 className='font-poppins font-semibold text-gray-800'>Expenses</h2>
          <div>
            <span className='font-poppins text-xl font-semibold'>¥ 3,000</span>
          </div>
          <div className='h-30'>
            <HighchartsReact highcharts={Highcharts} options={options} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard