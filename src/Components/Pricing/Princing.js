import './Princing.css'
import {BsCheckLg} from 'react-icons/bs'
import {BsXLg} from 'react-icons/bs'


// import React from 'react'

// export default function Princing() {
//     return (
// 		<div class="main">
// 		<table class="price-table">
// 			<tbody>
// 				<tr>
// 					<td class="price-blank"></td>
// 					<td class="price-blank"></td>
// 					<td class="price-table-popular">Most selected</td>
// 					<td class="price-blank"></td>
// 				</tr>
// 				<tr class="price-table-head">
// 					<td></td>
// 					<td>
// 					 Sourcing package 
// 					</td>
// 					<td>
// 					Staffing package 
// 					</td>
// 					<td class="green-width">
// 					Staffing package +
						
// 					</td>
// 				</tr>
// 				<tr>
// 					<td></td>
// 									<td class="price">
// 										<svg xmlns="http://www.w3.org/2000/svg" fill="none2B2D42" data-name="Layer 1" viewBox="0 0 128 128">
// 											<defs/>
// 											<path d="M76.1 91.4V71.7a1 1 0 00-.2-.6l-5.7-6.9V15.4a1.1 1.1 0 00-.1-.4.5.5 0 000-.1l-5.8-10a1 1 0 00-1.7 0l-5.9 10a.5.5 0 000 .1 1.2 1.2 0 00-.1.4v48.8l-5.7 6.9a1 1 0 00-.2.6v19.7a1 1 0 001 1h10.6V95a1 1 0 102 0v-2.7h10.8a1 1 0 001-1zm-17.6-75h9.7v4h-9.7zm4.8-9l4.1 7h-8.1zM52.6 72l4-4.8v23h-4zm11.7 18.3V56.7a1 1 0 10-2 0v33.7h-3.8v-68h9.7v68zm9.8 0h-4v-23l4 4.7z"/>
// 											<path d="M59 94.7a1 1 0 00-1 1v10.9a4.2 4.2 0 00-3.3 2.7 1 1 0 00.6 1.3 1 1 0 00.4 0 1 1 0 001-.6 2.2 2.2 0 012.8-1.4 1 1 0 10.7-1.9H60v-11a1 1 0 00-1-1zM68.7 101.2v-5.5a1 1 0 00-2 0v5.5a1 1 0 102 0zM60.2 112.8a1.4 1.4 0 011.3 1 1 1 0 001.9.3 2.5 2.5 0 014.7 1.4 1 1 0 002 0 4.6 4.6 0 00-7.4-3.6 3.4 3.4 0 00-2.5-1.1 1 1 0 000 2zM73.2 109.7a1 1 0 002 0 6.1 6.1 0 00-6.1-6.1 1 1 0 000 2 4.1 4.1 0 014.1 4zM105.2 109a9.8 9.8 0 00-19-3 6.4 6.4 0 00-2.8-.7 6.5 6.5 0 00-6.5 6.5 1 1 0 002 0 4.5 4.5 0 014.5-4.5 4.4 4.4 0 012.8 1 1 1 0 001.6-.6 7.8 7.8 0 0115.4 1.4 1 1 0 002 0zM7.8 123a8 8 0 006.2-.1 1 1 0 00-.8-1.8 6 6 0 01-8-3 6 6 0 012.9-8 9.4 9.4 0 001.5.8 1 1 0 00.4.1 1 1 0 00.4-2 7.5 7.5 0 01-1-13.2 1 1 0 00.1-1.6A4.2 4.2 0 018.1 91a4.2 4.2 0 017.1-3 1 1 0 001 .2 1 1 0 00.6-.6 5.8 5.8 0 0111.3 1.1A7.4 7.4 0 0022 96a1 1 0 002 0 5.4 5.4 0 118.6 4.4 8.9 8.9 0 00-5.4 7 6.6 6.6 0 00-1 0 6.4 6.4 0 00-4.5 1.9 1 1 0 000 1.4 1 1 0 001.4 0 4.4 4.4 0 017.5 3.1 1 1 0 002 0 6.4 6.4 0 00-3.4-5.7 6.8 6.8 0 014.2-5.9 6.8 6.8 0 019.4 5.9 1 1 0 001.4.8 4.8 4.8 0 011.8-.3 5 5 0 015 5 1 1 0 002 0 7 7 0 00-8.4-6.9 8.9 8.9 0 00-8.6-7h-.2a7.4 7.4 0 00-5.7-11.1 7.8 7.8 0 00-14.6-2.9 6.2 6.2 0 00-3.2-.9 6.2 6.2 0 00-5 10 9.4 9.4 0 00-1 13.9 8.1 8.1 0 00-3.3 4A8 8 0 007.8 123zM91.8 119.8a1 1 0 002 0 6.4 6.4 0 00-11-4.5 1 1 0 000 1.4 1 1 0 001.4 0 4.4 4.4 0 013.1-1.3 4.4 4.4 0 014.5 4.4zM125.4 103.3a7.7 7.7 0 00-3.4-6.4 8.1 8.1 0 00.7-3.3A8.3 8.3 0 00107 90a5.8 5.8 0 00-4 10.6 1 1 0 101.1-1.7 3.8 3.8 0 013.2-6.8 1 1 0 001.2-.6 6.3 6.3 0 0112.2 2 6.2 6.2 0 01-1 3.3 1 1 0 000 .8 1 1 0 00.5.6 5.6 5.6 0 011 9.5 8.4 8.4 0 00-2.8-1.6 1 1 0 10-.6 1.8 6.7 6.7 0 01-.4 12.8 1 1 0 00-.7 1.2 1 1 0 001 .8 1.1 1.1 0 00.2 0A8.7 8.7 0 00124 112a8.7 8.7 0 00-1.3-2.8 7.6 7.6 0 002.7-6z"/>
// 										</svg>
// 										<br/>
// 									</td>
// 									<td class="price">
// 										<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
// 											<defs/>
// 											<path d="M62.6 103.3a1 1 0 00-1.4 0L44 120.8a1 1 0 000 1.4 1 1 0 00.7.3 1 1 0 00.7-.3l17.3-17.3a1 1 0 000-1.5zM58.7 116.3a1 1 0 00.7-.3l7.2-7.2a1 1 0 00-1.4-1.5l-7.2 7.3a1 1 0 00.7 1.7zM55.2 117.4l-2.8 2.8a1 1 0 00.7 1.7 1 1 0 00.7-.3l2.8-2.8a1 1 0 000-1.4 1 1 0 00-1.4 0zM5.9 84.1a1 1 0 00.7.3 1 1 0 00.7-.3l17.4-17.3a1 1 0 10-1.5-1.4L6 82.7a1 1 0 000 1.4zM13.4 70l7.3-7.2a1 1 0 10-1.5-1.4L12 68.6a1 1 0 00.7 1.7 1 1 0 00.7-.3zM7.8 75.6l2.8-2.8a1 1 0 000-1.4 1 1 0 00-1.4 0l-2.8 2.8a1 1 0 000 1.4 1 1 0 00.7.3 1 1 0 00.7-.3zM68 33.6L27.1 40a1 1 0 00-.5.3L20 46.8a1 1 0 000 1.5l16.6 16.6-4.7 4.7a1 1 0 000 1.5l11.5 11.4-4.6 4.6a1 1 0 00.7 1.7 1 1 0 00.7-.3l4.6-4.6L57 96a1 1 0 001.4 0l4.7-4.7 16.7 16.6a1 1 0 001.4 0l6-6 .5-.5a1 1 0 00.3-.6L94.4 60l20.3-20.3a22.8 22.8 0 006-10.3.6.6 0 000-.2 22 22 0 00.5-3.4l1.1-11.3a8.1 8.1 0 00-8.8-8.8l-11.3 1a22.7 22.7 0 00-3.4.6h-.1a22.8 22.8 0 00-10.4 6zm-23.9 24L28.4 41.8 65.6 36zm-22-10l4.6-4.6 16 16-4.6 4.5zm58.4 58.2l-16-16 4.5-4.5 16 16zm5.6-6.3L70.5 84 92 62.4zm16.3-90.8l11.3-1.1a6.1 6.1 0 016.7 6.7l-1.1 11.3-.2 1.3-18-18 1.3-.2zm-3.6.7l19.8 19.8a21 21 0 01-5.3 9L57.7 94 46.3 82.5 75 53.7a1 1 0 000-1.4 1 1 0 00-1.5 0L45 81.1 34 70.3l10.7-10.6 45-45a21 21 0 019-5.3zM10.9 120.4a3.3 3.3 0 001.4-.3l19.5-9.1A11.2 11.2 0 1017 96.2l-9.1 19.5a3.3 3.3 0 003 4.7zm-1.2-3.9l9-19.5a9.1 9.1 0 016.8-5.2 10.2 10.2 0 011.7-.1 9.2 9.2 0 019 10.8 9.1 9.1 0 01-5.2 6.7l-19.5 9a1.3 1.3 0 01-1.8-1.7z"/>
// 											<path d="M96.2 42.3a10.5 10.5 0 10-7.4-3 10.4 10.4 0 007.4 3zm-6-16.5a8.5 8.5 0 110 12 8.4 8.4 0 010-12z"/>
// 										</svg>
// 										<br/>
// 									</td>
// 									<td class="price">
// 										<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
// 											<defs/>
// 											<path d="M38.6 53.2a14.6 14.6 0 0010.6-24.6 1 1 0 00-.7-.3 1.1 1.1 0 00-.7.3l-8.9 8.9-1.7-1.7a1 1 0 00-1.4 1.4l1.7 1.7-9 8.9a1 1 0 000 1.4 14.5 14.5 0 0010.1 4zm9.9-22.4a12.6 12.6 0 01-17.7 17.7z"/>
// 											<path d="M2.7 102.7a1 1 0 00.3.7L24.5 125a1 1 0 00.7.3 1 1 0 00.7-.3l12.4-12.3a.8.8 0 00.4-.5l12.1-12a1 1 0 00.3-.2.9.9 0 00.2-.3l12.3-12.3a1 1 0 000-1.4l-8.4-8.4 1.5-1.5 11.8 11.9 3.7 6.4.1.1a1 1 0 00.1.2l5.1 5.1a1 1 0 00.7.3 1 1 0 00.7-.3L99.7 79a1 1 0 000-1.4l-5-5.1a1 1 0 00-.2-.1h-.1l-6.5-3.8-11.8-11.9 1.4-1.4 8.4 8.3a1 1 0 00.7.3 1 1 0 00.7-.3L125 26a1 1 0 000-1.4L103.5 3a1 1 0 00-1.4 0L89.7 15.4a.8.8 0 00-.4.5L77.2 28a1 1 0 00-.3.2.9.9 0 00-.2.3L64.4 40.8a1 1 0 000 1.4l8.4 8.4-1.5 1.4-11.4-11.4a1 1 0 00-1.4 0l-18 17.9a1 1 0 000 1.4L52 71.3l-1.4 1.4-8.4-8.3a1 1 0 00-1.4 0L3 102a1 1 0 00-.3.7zM29 79l9.3 9.3L27 99.5l-9.4-9.3zm10.7 10.8l9.3 9.3-11.1 11.1-9.3-9.3zm38.7 7.8L74.6 94 94 74.6l3.7 3.7zm-4.9-5.3l-2.8-5 16.8-16.7 5 2.8zm-4-6.5L67 83.6 78.7 72a1 1 0 000-1.4 1 1 0 00-1.4 0L65.7 82.2 46.3 62.8l16.5-16.5 19.4 19.4-1.7 1.7a1 1 0 101.4 1.4l1.7-1.7 2.2 2.2zm20.8-68l9.3 9.3-11 11.1L79 29zm10.7 10.8l9.4 9.3L99.2 49l-9.4-9.3zm1.9-23.4l20 20-11.1 11.2-9.3-9.3 10-10a1 1 0 000-1.4 1 1 0 00-1.5 0l-10 10-9.3-9.3zM77.7 30.3l9.3 9.3-9.6 9.7a1 1 0 000 1.4 1 1 0 001.4 0l9.6-9.7 9.3 9.4-11 11.1-20.2-20zM74.2 52l2 2-1.5 1.4-2-2zm-15-9.2l2.2 2.2L45 61.4l-2.2-2.2zm-5.8 30l1.9 2-1.5 1.4-2-2zm-12-6.2l20 20-11 11.2-9.4-9.3 9.6-9.7a1 1 0 00-1.4-1.4L39.6 87l-9.3-9.3zm-25 25l9.2 9.4-10 10a1 1 0 000 1.4 1 1 0 001.5 0l10-10 9.3 9.3-11.2 11.2-20-20zM43.6 28.2a1 1 0 00-.3-1.4 11.9 11.9 0 00-16.5 16.5 1 1 0 00.9.5 1 1 0 00.5-.2 1 1 0 00.3-1.4 9.9 9.9 0 0113.7-13.7 1 1 0 001.4-.3z"/>
// 											<path d="M38.6 32.3a1 1 0 10.9-1.8 6.7 6.7 0 00-9 9 1 1 0 00.9.5 1 1 0 00.9-1.4 4.7 4.7 0 016.3-6.3z"/>
// 										</svg>
// 										<br/>
// 									</td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Personal point of contact</td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
//  <td><BsCheckLg style={{color:'green'}} /></td>
//  <td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Company intake by video call
//  </td>
//  <td><BsCheckLg style={{color:'green'}} /></td>
//  <td><BsCheckLg style={{color:'green'}} /></td>
//  <td><BsCheckLg style={{color:'green'}} /></td>
					
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Hiring advice & support</td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a>Creation of an account with private access</td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a>Kick off meeting to evaluate your needs and culture
// </td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Help on the job description redaction</td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Branding campaign</td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Search campaigns in our network </td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
					
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a>Paid Search campaigns in our network </td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Screening and assessment of candidates</td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
					
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Interviews planing and follow up</td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
					
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Creation and review of working contacts</td>
// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
					
	
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Follow up during the first months of their jobs</td>
// 					<td><BsXLg style={{color:'red'}} /></td>
					
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
					
					
// 				</tr>
// 				<tr>
// 					<td><a href="none" class="price-table-help"><i class="far fa-fw fa-question-circle"></i></a> Monthly analysis & report</td>
// 					<td><BsXLg style={{color:'red'}} /></td>

// 					<td><BsXLg style={{color:'red'}} /></td>
// 					<td><BsCheckLg style={{color:'green'}} /></td>
// 				</tr>
				
// 				<tr>
// 					<td> <h2>Price package starting at </h2>  </td>
// 					<td class="price">
// 						<a href="none">2.550 €</a>
// 					</td>
// 					<td class="price">
// 						<a href="none">5.950 €</a>
// 					</td>
// 					<td class="price">
// 						<a href="none">9.350 €</a>
// 					</td>
// 				</tr>
			
// 			</tbody>
// 		</table>
// 	</div>
        
//     )
// }

import { CheckIcon, XIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]
const plans = [
  {
    title: 'Starter',
    featured: false,
    description: 'All your essential business finances, taken care of.',
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
    ],
  },
  {
    title: 'Scale',
    featured: true,
    description: 'The best financial services for your thriving business.',
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: 'Advanced invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
      { id: 5, value: 'VAT & VATMOSS filing' },
      { id: 6, value: 'Free bank transfers' },
    ],
  },
  {
    title: 'Source packaging++',
    featured: false,
    description: 'Convenient features to take your business to the next level.',
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: 'Basic invoicing' },
      { id: 2, value: 'Easy to use accounting' },
      { id: 3, value: 'Mutli-accounts' },
      { id: 4, value: 'Tax planning toolkit' },
    ],
  },
]
const features = [
  {
    title: 'Tax Savings',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Easy to use accounting',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Multi-accounts',
    tiers: [
      { title: 'starter', value: '3 accounts' },
      { title: 'popular', featured: true, value: 'Unlimited accounts' },
      { title: 'intermediate', value: '7 accounts' },
    ],
  },
  {
    title: 'Invoicing',
    tiers: [
      { title: 'starter', value: '3 invoices' },
      { title: 'popular', featured: true, value: 'Unlimited invoices' },
      { title: 'intermediate', value: '10 invoices' },
    ],
  },
  {
    title: 'Exclusive offers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: '6 months free advisor',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Mobile and web access',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const perks = [
  {
    title: '24/7 customer support',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Instant notifications',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Budgeting tools',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Digital receipts',
    tiers: [
      { title: 'starter', value: true },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Pots to separate money',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: true },
    ],
  },
  {
    title: 'Free bank transfers',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
  {
    title: 'Business debit card',
    tiers: [
      { title: 'starter', value: false },
      { title: 'popular', featured: true, value: true },
      { title: 'intermediate', value: false },
    ],
  },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Princing() {
  return (
    <div className="bg-gray-50">
      <header className="bg-skin-fill">
        {/* <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Anticip</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                <span className="md:hidden">Sign up</span>
                <span className="hidden md:inline lg:hidden">Create account</span>
                <span className="hidden lg:inline">Create an account</span>
              </a>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-6 lg:hidden">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-indigo-50">
                {item.name}
              </a>
            ))}
          </div>
        </nav> */}
      </header>

      <main>
        {/* Pricing section */}
        <div>
          <div className="relative bg-skin-fill">
            {/* Overlapping background */}
            <div aria-hidden="true" className="hidden absolute bbg-skin-fill w-full h-6 bottom-0 lg:block" />

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-skin-base sm:text-6xl">
                <span className="block lg:inline">Simple pricing,</span>
                <span className="block lg:inline">no commitment.</span>
              </h1>
              <p className="mt-4 text-xl text-skin-base">
                Everything you need, nothing you don't. Pick a plan that best suits your business.
              </p>
            </div>

            <h2 className="sr-only">Plans</h2>

            {/* Toggle */}
            <div className="relative mt-12 flex justify-center sm:mt-16">
              <div className="bg-skin-darkblue p-0.5 rounded-lg flex">
                <button
                  type="button"
                  className="relative bg-white py-2 px-6 border-skin-darkblue rounded-md shadow-sm text-sm font-medium text-skin-darkblue whitespace-nowrap hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                >
                  Normal 
                </button>
                <button
                  type="button"
                  className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                >
                  Pro 
                </button>
                <button
                  type="button"
                  className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-indigo-200 whitespace-nowrap hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-skin-darkblue focus:ring-white focus:z-10"
                >
                  Pro 
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-skin-darkblue rounded-tl-lg rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured ? 'bg-white ring-2 ring-skin-darkblue shadow-md' : 'bg-skin-darkblue lg:bg-transparent',
                      'pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? 'text-indigo-600' : 'text-white',
                          'text-sm font-semibold uppercase tracking-wide'
                        )}
                      >
                        {plan.title}
                      </h3>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? 'text-indigo-600' : 'text-white',
                              'text-4xl font-extrabold tracking-tight'
                            )}
                          >
                            ${plan.priceMonthly}
                          </p>
                          <div className="ml-4">
                            <p className={classNames(plan.featured ? 'text-gray-700' : 'text-white', 'text-sm')}>
                              USD / mo
                            </p>
                            <p className={classNames(plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm')}>
                              Billed yearly (${plan.priceYearly})
                            </p>
                          </div>
                        </div>
                        <a
                          href="#"
                          className={classNames(
                            plan.featured
                              ? 'bg-indigo-600 text-white hover:bg-skin-darkblue'
                              : 'bg-white text-indigo-600 hover:bg-indigo-50',
                            'mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                          )}
                        >
                          Buy {plan.title}
                        </a>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      role="list"
                      className={classNames(
                        plan.featured
                          ? 'border-gray-200 divide-gray-200'
                          : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                        'mt-7 border-t divide-y lg:border-t-0'
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li key={mainFeature.id} className="py-3 flex items-center">
                          <CheckIcon
                            className={classNames(
                              plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                              'w-5 h-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? 'text-gray-600' : 'text-white',
                              'ml-4 text-sm font-medium'
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              {plans.map((plan, planIndex) => (
                <div key={plan.title} className="border-t border-gray-200">
                  <div
                    className={classNames(
                      plan.featured ? 'border-indigo-600' : 'border-transparent',
                      '-mt-px pt-6 border-t-2 sm:w-1/2'
                    )}
                  >
                    <h3
                      className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                    >
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <h4 className="mt-10 text-sm font-bold text-gray-900">Catered for business</h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {features.map((feature) => (
                          <div
                            key={feature.title}
                            className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="pr-4 text-sm font-medium text-gray-600">{feature.title}</dt>
                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                              {typeof feature.tiers[planIndex].value === 'string' ? (
                                <span
                                  className={classNames(
                                    feature.tiers[planIndex].featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {feature.tiers[planIndex].value}
                                </span>
                              ) : (
                                <>
                                  {feature.tiers[planIndex].value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[planIndex].value === true ? 'Yes' : 'No'}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>

                  <h4 className="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'shadow-md' : 'shadow',
                          'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured ? 'ring-2 ring-indigo-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {perks.map((perk) => (
                          <div key={perk.title} className="py-3 flex justify-between sm:grid sm:grid-cols-2">
                            <dt className="text-sm font-medium text-gray-600 sm:pr-4">{perk.title}</dt>
                            <dd className="text-center sm:px-4">
                              {perk.tiers[planIndex].value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{perk.tiers[planIndex].value === true ? 'Yes' : 'No'}</span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div aria-hidden="true" className="hidden absolute inset-0 pointer-events-none sm:block">
                      <div
                        className={classNames(
                          plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                          'absolute right-0 w-1/2 h-full rounded-lg'
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">Catered for business</h3>
                </div>
                {plans.map((plan, index) => (
                  <div
                    key={plan.title}
                    aria-hidden="true"
                    className={classNames(index === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
                  >
                    <div
                      className={classNames(
                        plan.featured ? 'border-indigo-600' : 'border-transparent',
                        'py-6 border-t-2'
                      )}
                    >
                      <p
                        className={classNames(plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold')}
                      >
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Business feature comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {features.map((feature) => (
                      <tr key={feature.title}>
                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                          {feature.title}
                        </th>
                        {feature.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                              'relative w-1/4 py-0 text-center'
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {typeof tier.value === 'string' ? (
                                <span
                                  className={classNames(
                                    tier.featured ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  {tier.value}
                                </span>
                              ) : (
                                <>
                                  {tier.value === true ? (
                                    <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                  ) : (
                                    <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                                  )}

                                  <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                </>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

              <div className="mt-6 relative">
                {/* Fake card backgrounds */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Perk comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Perk</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {perks.map((perk) => (
                      <tr key={perk.title}>
                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                          {perk.title}
                        </th>
                        {perk.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                              'relative w-1/4 py-0 text-center'
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {tier.value === true ? (
                                <CheckIcon className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                              ) : (
                                <XIcon className="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div className="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Logo cloud */}
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-gray-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2 id="faq-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                nec. Urna, sed a lectus elementum blandit et.
              </p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="font-semibold text-white">{faq.question}</dt>
                    <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img
                  className="h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt="Company name"
                />
                <p className="text-gray-500 text-base">
                  Making the world a better place through constructing elegant hierarchies.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Solutions</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Support</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Company</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">Legal</h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 xl:text-center">&copy; 2021 Workflow, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}