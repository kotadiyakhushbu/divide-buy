import React from 'react'
import Site_all_button from '../../Site_all_button'
import And_whats_more_data from './And_whats_more_data'

export default function And_whats_more() {
  return (
    <>
      <section className='method bg-[#f5f5f5]'>
        <div className='max-w-[1280px] m-auto text-darkblue py-12'>
          <h2 className='text-darkblue pb-6 text-3xl font-bold'>And what’s more…</h2>
          <p className='pb-8'>Wondering about whether to buy, using interest free credit? Interest Free Payment could be the smarter way to pay. We offer a variety of repayment plans to suit your budget. From 2 to 12 months
            – it’s flexible and always interest free.</p>
          <div className='flex pb-12'>
            <div className='mr-6'>
              <And_whats_more_data img="images/home/New-Project-3.png" title="Pay in Monthly Instalments" desc="Spread the cost of your order easily in monthly instalments between 2 and 12 months." />
            </div>
            <div className='mr-6'>
              <And_whats_more_data img="images/home/New-Project-1.png" title="Fixed Amounts" desc="Your monthly payments are fixed at the same amount for the term of your agreement." />
            </div>
            <div>
              <And_whats_more_data img="images/home/New-Project-4.png" title="Rapid Application" desc="With an instant decision and a 60 second application, you can spread the cost of your order in a few simple steps." />
            </div>
          </div>

          <div className='flex pb-12'>
            <div className='mr-6'>
              <And_whats_more_data img="images/home/NoAPRtoPay_small_icon-2.png" title="No APR to Pay" desc="Spread the cost of your order easily in monthly instalments between 2 and 12 months." />
            </div>
            <div className='mr-6'>
              <And_whats_more_data img="images/home/New-Project-6.png" title="You’re in Control" desc="You choose how long to spread the cost of your order over, for a plan to suit you" />
            </div>
            <div>
              <And_whats_more_data img="images/home/New-Project-5.png" title="No Early Repayment Charges" desc="The recurring card payments are collected monthly until your balance is paid, but you can make additional payments" />
            </div>
          </div>

          <Site_all_button item="Find Out More" link="/help" />
        </div>
      </section>
    </>
  )
}
