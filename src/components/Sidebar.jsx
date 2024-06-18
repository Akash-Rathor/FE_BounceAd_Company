import React from 'react';
import { Link } from 'react-router-dom';
import { LiaAdSolid } from "react-icons/lia";
import { FcPositiveDynamic } from "react-icons/fc";
import { CiCreditCard1 } from "react-icons/ci";

const Sidebar = ({ user }) => {
  return (
    <div id="docs-sidebar" className="fixed top-16 left-0 bottom-0 w-64 pt-20 pb-10 overflow-y-auto bg-lightgray">
      <div className="px-6 flex flex-1 justify-center items-center">
        <span className="flex-none text-xl font-semibold">{user}</span>
      </div>
      <nav className="p-6 w-full flex flex-col flex-wrap mt-10">
        <ul>
          <li className='flex flex-row hover:bg-greengray rounded-md justify-start items-center space-x-2 px-4 mb-10 hover:py-2'>
            <FcPositiveDynamic  size={24}/>
            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-md text-gray-700 rounded-lg hover:bg-gray-100 font-semibold" to="#" >Analytics</Link>
          </li>
          <li className='flex flex-row hover:bg-greengray rounded-md justify-start items-center space-x-2 px-4 mb-10 hover:py-2'>
            <LiaAdSolid style={{color:'red'}} size={24}/>
            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-md text-gray-700 rounded-lg hover:bg-gray-100 font-semibold" to="#" >Campaigns</Link>
          </li>
          <li className='flex flex-row hover:bg-greengray rounded-md justify-start items-center space-x-2 px-4 mb-10 hover:py-2'>
            <CiCreditCard1 style={{color:'blue'}} size={24}/>
            <Link className="flex items-center gap-x-3.5 py-2 px-2.5 text-md text-gray-700 rounded-lg hover:bg-gray-100 font-semibold" to="#" >Billing</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
