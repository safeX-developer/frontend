import React, { useEffect, useState } from 'react';
import "../../styles/p2p/myads.css";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

export default function MyAds() {
    const [ tab, setTab ] = useState(0)
    const location = useLocation()
    const pathSegments = location.pathname.split("/").filter(Boolean); 
    useEffect(()=>{
        setTab(pathSegments[2] ? 1 : 0)
    },[])

    const navigate = useNavigate()
    const handleSwitch = ((event = 0)=>{
        navigate(event ? "/p2p/my-ads/all" : "/p2p/my-ads")
        setTab(event)
    })
    
  return (
    <div className="list-maker__container">
        <div className="list-maker-content">
            <div className="list-maker__h1">
                <div className="list-maker-left">
                    <span className="list-maker__h1-title">My Ads</span>
                    <div className="list__maker--level">
                        <span className="create_maker--level">
                            View Benefits
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="directionright_icon_svg__icon" viewBox="0 0 1024 1024" data-rtl="true">
                                <path fill="currentColor" d="M707.755 554.752 481.92 780.587a42.667 42.667 0 1 0 60.33 60.33L840.62 542.55a43.093 43.093 0 0 0 0-60.928L542.293 183.253a42.667 42.667 0 1 0-60.33 60.331l225.834 225.835H210.773c-22.101 0-40.021 19.114-40.021 42.666s17.92 42.667 40.021 42.667h496.982z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="ant-space css-5jb6ku ant-space-horizontal ant-space-align-center" style={{gap: "16px"}}>
                    <div className="ant-space-item">
                        <button onClick={()=> navigate("/p2p/create-ad")} className="moly-btn inline-flex items-center justify-center select-none transition-all font-IBM font-semibold disabled:cursor-not-allowed bg-transparent outline-none ring-btn-default focus-visible:ring-[5px] border-y-[1px] border border-solid border-base-bds-gray-t4-dis text-base-bds-gray-t1-title enabled:active:border-base-bds-gray-t4-dis enabled:active:text-base-bds-gray-t1-title enabled:hover:border-base-bds-gray-t4-dis enabled:hover:text-base-bds-gray-t2 disabled:opacity-90 disabled:border-base-bds-gray-t4 disabled:text-base-bds-gray-t3 text-sm leading-[22px] px-[16px] py-[8px] rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="list-maker-right-icon" viewBox="0 0 1024 1024">
                                <path fill="currentColor" d="M554.667 213.333a42.667 42.667 0 1 0-85.334 0v256h-256a42.667 42.667 0 1 0 0 85.334h256v256a42.667 42.667 0 1 0 85.334 0v-256h256a42.667 42.667 0 1 0 0-85.334h-256v-256z"></path>
                            </svg>
                            Post Ads
                        </button>
                    </div>
                </div>
            </div>
            <div className="list-maker__nav">
                <div className="list-left-nav">
                    <button onClick={()=> handleSwitch(0)} className="list-maker__nav-item" data-active={!tab ? "true" : "false"}>Listed</button>
                    <button onClick={()=> handleSwitch(1)} className="list-maker__nav-item" data-active={tab ? "true" : "false"}>All Ads</button>
                </div>
                <div className="list-right-nav">Active Mode :
                    <button type="button" role="switch" aria-checked="false" className="ant-switch css-5jb6ku ant-switch-custom otc-schedule-allowToggle bds-theme-component-light css-5jb6ku">
                        <div className="ant-switch-handle"></div>
                        <span className="ant-switch-inner">
                            <span className="ant-switch-inner-checked"></span>
                            <span className="ant-switch-inner-unchecked"></span>
                        </span>
                    </button>
                    <div className="otc-schedule-workLineExp"></div>
                    <button type="button" className="ant-btn css-5jb6ku ant-btn-link css-5jb6ku ant-text-link-custom list-maker__navToggle ant-text-link-custom-sm ant-text-link-custom-primary bds-theme-component-light">
                        <span>Automatic Inactive Mode</span>
                    </button>
                </div>
            </div>
            <div className="maker-list__wrapper">
                <div className="maker-table__wrapper">
                    <div className="fiat__spin-wrapper">
                        <div className="fiat__spin-container">
                            <Outlet />
                            <div className="fiat-otc__empty-list-img-wrapper">
                                <div className="by-space by-space--vertical" style={{gap: "16px"}}>
                                    <div className="by-space-item" >
                                        <img className="empty-list-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACACAMAAAC7vZIpAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA8UExURUdwTGdnZ2dnZ2VlZWRkZGZmZmZmZv///+ns7Xh4eNnZ2Z+fn7S1teLk5MjJyoCAgdnc3Y+Pj/X19YeHiBd6Mt4AAAAHdFJOUwD+nlYa1nhioeYPAAAFW0lEQVR42u2caZOkIAyGO14tBvD6//91Bez2QkXANls12U9bY8085uIloq/Xn/3Zn9GxLC0SZUWaUYRLAFiLyBF7gDxJaeEVAChF+bGGt5CnlPB6Wa6s4YwKYprXGzxtnCUUkrEAnNwmOZdTqJv2eSdmCRvdJ/hQHGwwgBo/LkUoHubLWWOchcAGrLcyIZExPob5YcLE8AmEtnrPTX4Q7yHMUjcb+RrGlnjKOKAwhNkNec/cDCqFUAF2762VrNb4mMcmTC3+eFsJ0PBx+8+7mmkf1klkwJw78b2R6fjC7uVd3Zs7iNxswNGBoJsJw1MfY/4IIGr3IOsOrqn0TYjILnQE1H2kAelwF23yAKDUGYjt8VWdXmhk3FbjBtiidmDllAhxY+wGqF3D2dllFahWg8nPAYX+wy26pSqPWcepE6CsdejOL0XUrTCLtAYnOYATIO91CnbnF9a60YQDZsUAx5BXpROgdowE12oPq5Jhv5grmcmNtrsAyM4vrECvN2lYVPv5nswdkN8MOEV1YQ6AQrY/8GA2RfUSYINsEIymOO/MwSxH627xBLBT8r77FGfpVu5eVZyy0gOwrI2clSZy0m1JlOAj7FsPwI7V3agGVXIgOi6JPitJ4ePBSf7pJUyyzikF+8SrRsRlwHJKulGmcJcIeypWkJcBZyFt9P2ddUKhM8FTKyTXq3heFLX2DTt2odmU9H5qq+ivAoq5OJDahUOOHfUYvbP3FdQpXAWs2KKg8WzXJMaNn6dczXaScB9wubRJnV+irvcIhbkF7j1ayHmIB4cK7c1kpi53rkbzc28lk7QXAcvl0jbuy5vaOivh42QzYPKxk4RHVcxXSoWPc0pcO7FqxwQKmR1l0FwE5O3aS4awYYBiVj8Dnhm+DSkaMtyyJ+EBYLduex/CUrZaWQ4meTvgfm89iNDeqo/WYs7E6v/fGXrD1SMc/TjnI8+btgkjtOuFQ7m1JOQgBGPNjurgoEfYAYR2vXAsWFVQv4WgaFWJ2BBlD8nggjBCa6s+kfzVIPelTjVoDWo5lMTqFwneM64GHoGE1iQ83TRJrFWq8SnYFeoSGQtX8h4YH7YFySuU0KoXHOeDq/rW1KAf5Axlon+FBgwjtLZqL0Cz+FZSyurbsw1gGKEtCf0B1/WUvIIJba06OmAIoU0vxAcMILQl4Q2A/oQ2vXAHoD+hJQlvAfQmtLTqewA/hEm4XrgJ0BBe3iJb9MIEKJmP7QEqQnH9odO2VU+AZeVju4CvAuB6lWyT8K4Qq3hlMfTCjYBx9AIxwO18gRjgtlVTA9zoBWqAmySkBrjRC9QAN0k4AXaRG3Wk+cJtS12s+QK5EK/1AjnAtV6gB7hKQnqAK71AD3DVqukBrpKQIOCyVRMEXOoFgoDLJJwAK/SxGwCXeoEg4DIJCYZ42aopAi70AkXAhV6gCLho1SQB50lIEnCuF0gCzls1ScD5fIEk4LxVux1w/OGmaa0X3I4p/3DbuU5C4J8/JQiFeKYX6u8LOcAEGcBZEk5HdUoeVDBxAWetenaY6Oxthx8Czk+MToSdwynVHwEu9MJEGBJjHvk9l/nW7ktICHA5X/gQEgJczRdGQkKA6WrIZQgJAW4eimlCSoCb5xGKMAQw8ttqlvMLA2EAYBX7vVjL+QVRA3JPa6O/WWw7vyAQW5d/TB3My5OFxX+/fefQ7YkJOX764f5PAuwdTd+3hqsTWz/7eMbuGyZWkxyV44offkth9/2IB6N6dn5hL6r5M59EOUvC6vdRPTu/8HxUD/UChaieJaF8OqoHrZpGVHeSkFBUl50wx+b5Wj0mBGpR3SBmhOH+7P+zf/DYI5Qu61p5AAAAAElFTkSuQmCC" alt="" />
                                    </div>
                                    <div className="by-space-item" >
                                        <div style={{whiteSpace: "nowrap"}}>Oops, you don't have any active ad.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="maker-list__pager">
                    <ul className="pagination">
                        <li className="pagination-prev pagination-disabled" aria-disabled="true">
                            <button type="button" aria-label="prev page" className="pagination-item-link" disabled=""></button>
                        </li>
                        <li className="pagination-item pagination-item-1 pagination-item-disabled" tabindex="0">
                            <a rel="nofollow">1</a>
                        </li>
                        <li className="pagination-next pagination-disabled" aria-disabled="true">
                            <button type="button" aria-label="next page" className="pagination-item-link" disabled=""></button>
                        </li>
                    </ul>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}
