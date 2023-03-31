import Order from '../constants/order.json';
import React, { useState } from 'react';
// import Popup from './Modal';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

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

    const [opened, { open, close }] = useDisclosure(false);
    const [rowIndex, setRowIndex] = useState(null);

    const [userInput, setUserInput] = useState('');
    const [weightInput, setWeightInput] = useState('');
    const [statusInput, setStatusInput] = useState('');
    const [costInput, setCostInput] = useState('');


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
        const val = e.target.value.toLowerCase();
        const arr = Order.filter((order) => {
            if (val === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(val);
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
        setSourceValue(val);
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

    const userInputChange = (e) => {
        setUserInput(e.target.value);
    }

    const weightInputChange = (e) => {
        setWeightInput(e.target.value);
    }

    const costInputChange = (e) => {
        setCostInput(e.target.value);
    }

    const statusInputChange = (e) => {
        setStatusInput(e.target.value);
    }

    const rowClick = (index) => {
        setRowIndex(index);
        open();
    };

    const closeClick = () => {
        setUserInput('');
        setRowIndex(null);
        close();
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
            <div className='overflow-scroll sm:px-[10vw] px-4 mr-4 sm:mr-0' id='table'>
                <table className='w-full min-w-[800px] text-[15px]'>
                    <caption className='text-[1.2rem] font-semibold'>Orders(click on row to edit)</caption>
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
                            <tr className='w-full text-center hover:border-black border-2 font-thin cursor-pointer' onClick={() => { rowClick(index) }} key={index}>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.user}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.shipper}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.weight}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.cost}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.source}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.destination}</td>
                                <td className='px-4 py-2 bg-gray-50 border-b-2'>{order.status}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                <Modal opened={opened} onClose={closeClick} title="Edit Order" centered>
                    <div>
                        <label htmlFor="user" className='block mb-2 text-sm font-medium text-gray-900'>User</label>
                        <input
                            type="text"
                            id='user'
                            value={userInput}
                            placeholder='Enter new username'
                            onChange={userInputChange}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4'
                            required />
                    </div>
                    <div>
                        <label htmlFor="weight-input" className='block mb-2 text-sm font-medium text-gray-900'>Weight</label>
                        <input
                            type="text"
                            id='weight-input'
                            value={weightInput}
                            onChange={weightInputChange}
                            placeholder='Enter new weight'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4'
                            required />
                    </div>
                    <div>
                        <label htmlFor="cost-input" className='block mb-2 text-sm font-medium text-gray-900'>Cost</label>
                        <input
                            type="text"
                            id='cost-input'
                            value={costInput}
                            onChange={costInputChange}
                            placeholder='Enter new cost'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4'
                            required />
                    </div>
                    <div>
                        <label htmlFor="status-input" className='block mb-2 text-sm font-medium text-gray-900'>Select Status</label>
                        <select
                            type="text"
                            id='staus-input'
                            value={statusInput}
                            onChange={statusInputChange}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4'
                            required>
                            <option value="" hidden={true}>Status</option>
                            <option value="out-for-delivery">out-for-delivery</option>
                            <option value="delivered">delivered</option>
                        </select>
                    </div>
                    <Group position="center">
                        <button
                            onClick={() => {
                                const newArr = [...array]
                                if (userInput !== '') {
                                    newArr[rowIndex].user = userInput;
                                }
                                if (costInput !== '') {
                                    newArr[rowIndex].cost = costInput;
                                }
                                if (weightInput !== '') {
                                    newArr[rowIndex].weight = weightInput;
                                }
                                if (statusInput !== '') {
                                    newArr[rowIndex].status = statusInput;
                                }
                                setArray(newArr);
                                setRowIndex(null);
                                setUserInput('');
                                close();
                            }}
                            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                            Save
                        </button>
                    </Group>
                </Modal>
                <Group position="center" />
            </div>
            <div className='px-4 sm:px-[10vw] mt-6 text-[1.3rem] text-center'>
                {array.length} Results
            </div>
        </>
    )
}

export default Table;