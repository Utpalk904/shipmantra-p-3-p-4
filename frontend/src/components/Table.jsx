import Order from '../constants/order.json';
import React, { useState } from 'react';

const defArr = [...Order];

const Table = () => {

    const [ascendingClick, setAscendingClick] = useState(false);
    const [descendingClick, setDescendingClick] = useState(false);
    const [array, setArray] = useState(Order);
    const [outForDelivery, setOutForDelivery] = useState(false);
    const [delivered, setDelivered] = useState(false);
    const [costRange, setCostRange] = useState(0);
    const [weightRange, setWeightRange] = useState(0);
    const [selectValue, setSelectValue] = useState('');
    const [sourceValue, setSourceValue] = useState('');


    const ascendingFilter = () => {
        setAscendingClick(true);
        setDescendingClick(false);
        const asc = Order;
        const arr = asc.sort((c1, c2) => {
            if (c1.cost < c2.cost) {
                return -1;
            }
            else if (c1.cost > c2.cost) {
                return 1;
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).filter((order) => {
            if (outForDelivery) {
                return order.status === 'out-for-delivery';
            }
            else if (delivered) {
                return order.status === 'delivered';
            }
            else {
                return true;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });
        setArray(arr);
    }

    const descendingFilter = () => {
        setDescendingClick(true);
        setAscendingClick(false);
        const dsc = Order;
        const arr = dsc.sort((c1, c2) => {
            if (c1.cost < c2.cost) {
                return 1;
            }
            else if (c1.cost > c2.cost) {
                return -1;
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).filter((order) => {
            if (outForDelivery) {
                return order.status === 'out-for-delivery';
            }
            else if (delivered) {
                return order.status === 'delivered';
            }
            else {
                return true;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });
        setArray(arr);
    }


    const outForDeliveryClick = () => {
        const arr = Order.filter((order) => {
            return order.status === 'out-for-delivery';
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });

        // setSelectValue('out-for-delivery');
        setOutForDelivery(true);
        setDelivered(false);
        setArray(arr);
    }

    const deliveredClick = () => {
        const arr = Order.filter((order) => {
            return order.status === 'delivered';
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });

        setDelivered(true);
        // setSelectValue('delivered');
        setOutForDelivery(false);
        setArray(arr);
    }


    const costRangeChange = (e) => {
        setCostRange(e.target.value);
        const arr = Order.filter((order) => {
            return order.cost <= costRange;
        }).filter((order) => {
            if (outForDelivery) {
                return order.status === 'out-for-delivery';
            }
            else if (delivered) {
                return order.status === 'delivered';
            }
            else {
                return true;
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });
        setArray(arr);
    }

    const weightRangeChange = (e) => {
        setWeightRange(e.target.value);
        const arr = Order.filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).filter((order) => {
            if (outForDelivery) {
                return order.status === 'out-for-delivery';
            }
            else if (delivered) {
                return order.status === 'delivered';
            }
            else {
                return true;
            }
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        }).filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        });
        setArray(arr);
    }

    const selectChange = (e) => {
        setSelectValue(e.target.value);
        deliveredClick();
        outForDeliveryClick();
    }

    const sourceChange = (e) => {
        const arr = Order.filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(sourceValue.toLowerCase());
            }
        }).filter((order) => {
            if (!weightRange) {
                return true;
            }
            else {
                return order.weight <= weightRange;
            }
        }).filter((order) => {
            if (outForDelivery) {
                return order.status === 'out-for-delivery';
            }
            else if (delivered) {
                return order.status === 'delivered';
            }
            else {
                return true;
            }
        }).filter((order) => {
            if (!costRange) {
                return true;
            }
            else {
                return order.cost <= costRange;
            }
        }).sort((c1, c2) => {
            if (ascendingClick) {
                if (c1.cost < c2.cost) {
                    return -1;
                }
                else if (c1.cost > c2.cost) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (descendingClick) {
                if (c1.cost < c2.cost) {
                    return 1;
                }
                else if (c1.cost > c2.cost) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
            else {
                return 0;
            }
        });
        setSourceValue(e.target.value.toLowerCase());
        setArray(arr);
    }

    const removeFilterClick = () => {
        setArray(defArr);
        setWeightRange(0);
        setCostRange(0);
        setAscendingClick(false);
        setDescendingClick(false);
        setDelivered(false);
        setOutForDelivery(false);
        setSourceValue('');
        setSelectValue('');
    }

    return (
        <>
            <div className='flex flex-col overflow-hidden px-6 sm:px-[10vw] items-center'>
                <div className='w-full md:w-[50vw] mb-4 border-b-2 rounded-lg'>
                    <input type="text" value={sourceValue} onChange={sourceChange} className='rounded-lg bg-gray-100 py-2 px-4 focus:outline-none w-full md:w-[50vw] text-[14px] text-gray-500' placeholder='Search by source...' />
                </div>
                <div className='w-full md:w-[50vw] flex flex-col sm:flex-row gap-4 mb-4'>
                    <button onClick={ascendingFilter} className={`py-2 px-4 ${(ascendingClick) ? 'bg-gray-300' : 'bg-gray-100'} rounded-lg text-[14px] border-b-2 hover:bg-gray-300 w-fit`}>Ascending</button>
                    <button onClick={descendingFilter} className={`py-2 px-4 rounded-lg ${(descendingClick) ? 'bg-gray-300' : 'bg-gray-100'} text-[14px] border-b-2 hover:bg-gray-300 w-fit`}>Descending</button>
                    <select name="status" id="status" value={selectValue} onChange={selectChange} className='bg-gray-100 rounded-lg px-4 py-2 text-[15px] text-[#222222] border-b-2 hover:bg-gray-300'>
                        <option value='' hidden={true} >Filter by Status</option>
                        <option value="out-for-delivery" onClick={outForDeliveryClick}>Out for Delivery</option>
                        <option value="delivered" onClick={deliveredClick}>Delivered</option>
                    </select>
                </div>
                <div className='flex flex-col sm:flex-row gap-5 mb-4 mt-6 sm:mt-0 md:w-[50vw]'>
                    <div className='bg-gray-100 rounded-lg px-4 py-2 flex justify-center items-center text-[15px] border-b-2 hover:bg-gray-300 cursor-pointer'>
                        <label htmlFor="cost">Filter by Cost</label>
                    </div>
                    <div className='flex justify-center gap-1'>
                        <span className='text-[14px]'>0</span>
                        <span className='flex flex-col justify-center items-center px-2'>
                            <input type="range" id='cost' max={10000} min={0} onChange={costRangeChange} onClick={costRangeChange} value={costRange} />
                            <p className='text-[14px] bg-slate-100 px-3 rounded-lg border-b-2'>{costRange}</p>
                        </span>
                        <span className='text-[14px]'>10000</span>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-5 mb-4 mt-6 sm:mt-0 md:w-[50vw]'>
                    <div className='bg-gray-100 rounded-lg px-4 py-2 flex justify-center items-center text-[15px] border-b-2 hover:bg-gray-300 cursor-pointer'>
                        <label htmlFor="weight">Filter by Weight</label>
                    </div>
                    <div className='flex justify-center gap-1'>
                        <span className='text-[14px]'>0</span>
                        <span className='flex flex-col justify-center items-center px-2' >
                            <input type="range" id='weight' max={20} min={0} onChange={weightRangeChange} onClick={weightRangeChange} value={weightRange} />
                            <p className='text-[14px] bg-slate-100 px-3 rounded-lg border-b-2'>{weightRange}</p>
                        </span>
                        <span className='text-[14px]'>20</span>
                    </div>
                </div>
                <div className='bg-gray-100 hover:bg-gray-300 rounded-lg px-4 py-2 flex justify-center items-center text-[15px] border-b-2 w-fit  mb-4 mt-4 sm:mt-0 md:w-[50vw] cursor-pointer' onClick={removeFilterClick} >
                    <button className='w-fit'>Remove Filter</button>
                </div>
            </div>
            <div className='overflow-scroll sm:px-[10vw] px-4 mr-4 sm:mr-0'>
                <table className='w-full min-w-[800px] text-[15px]'>
                    <caption className='text-[1.2rem] font-semibold'>Orders</caption>
                    <tbody>
                        <tr className='w-full text-gray-500'>
                            <th className='px-4 py-2 bg-gray-100 rounded-tl-lg border-b-2 font-medium w-fit'>User</th>
                            <th className='px-4 py-2 bg-gray-100 border-b-2 font-medium'>Shipper</th>
                            <th className='px-4 py-2 bg-gray-100 border-b-2 font-medium'>Weight</th>
                            <th className='px-4 py-2 bg-gray-100 border-b-2 font-medium'>Cost</th>
                            <th className='px-4 py-2 bg-gray-100 border-b-2 font-medium'>Source</th>
                            <th className='px-4 py-2 bg-gray-100 border-b-2 font-medium'>Destination</th>
                            <th className='px-4 py-2 rounded-tr-lg bg-gray-100 border-b-2 font-medium'>Status</th>
                        </tr>
                        {array.map((order, index) => (
                            <tr className='w-full text-center font-thin' key={index}>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.user}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.shipper}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.weight}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.cost}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.source}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.destination}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2 hover:border-black'>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='px-4 sm:px-[10vw] mt-6 text-[1.3rem] text-center'>
                {array.length} Results
            </div>
        </>
    )
}

export default Table;