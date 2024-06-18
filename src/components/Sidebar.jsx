import React from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const SideBar = (props) => {

    
  return (
    <>
      <button 
        type="button" 
        className="text-gray-500 hover:text-gray-600" 
        data-hs-overlay="#docs-sidebar" 
        aria-controls="docs-sidebar" 
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
       
      </button>
      <div 
        id="docs-sidebar" 
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="px-6">
          <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">{props.user}</a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
          <ul className="space-y-1.5">
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                Dashboard
              </a>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button 
                type="button" 
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
              >
                Users
                <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                <svg className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
               
              </button>
              <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <button 
                      type="button" 
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                    >
                      Sub Menu 1
                      <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                      <svg className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                     
                    </button>
                    <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                      <ul className="pt-2 ps-2">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hs-accordion" id="users-accordion-sub-2">
                    <button 
                      type="button" 
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                    >
                      Sub Menu 2
                      <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                      <svg className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                     
                    </button>
                    <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2">
                      <ul className="pt-2 ps-2">
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;