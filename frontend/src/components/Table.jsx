import Order from '../constants/order.json';
import React, { useState } from 'react';

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
        });
        setArray(arr);
    }

    const selectChange = (e) => {
        setSelectValue(e.target.value);
    }

    const sourceChange = (e) => {
        const arr = Order.filter((order) => {
            if (sourceValue === '') {
                return true;
            }
            else {
                return order.source.toLowerCase().includes(e.target.value.toLowerCase());
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
        setArray(Order);
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
        <div className='mt-12'>
            <button onClick={ascendingFilter} className='p-2 border-2'>Ascending</button>
            <button onClick={descendingFilter} className='p-2 border-2'>Descending</button>
            <select name="status" id="status" value={selectValue} onChange={selectChange}>
                <option value='' hidden={true} >Filter by Status</option>
                <option value="out-for-delivery" onClick={outForDeliveryClick}>Out for Delivery</option>
                <option value="delivered" onClick={deliveredClick}>Delivered</option>
            </select>
            <div>
                <label htmlFor="cost">Filter by Cost</label>
                <input type="range" id='cost' max={10000} min={0} onChange={costRangeChange} onClick={costRangeChange} value={costRange} />
                <p>{costRange}</p>
            </div>
            <div>
                <label htmlFor="weight">Filter by Weight</label>
                <input type="range" id='weight' max={20} min={0} onChange={weightRangeChange} onClick={weightRangeChange} value={weightRange} />
                <p>{weightRange}</p>
            </div>
            <div>
                <label htmlFor="source">Search by source</label>
                <input type="text" id='source' value={sourceValue} onChange={sourceChange} />
            </div>
            <button onClick={removeFilterClick}>Remove Filter</button>
            <table className='overflow-scroll w-full min-w-[770px]'>
                <caption>Orders</caption>
                <tbody>
                    <tr className='border-2 border-black w-full'>
                        <th className='px-4 py-2 border-r-2 border-black'>User</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Shipper</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Weight</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Cost</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Source</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Destination</th>
                        <th className='px-4 py-2 border-r-2 border-black'>Status</th>
                    </tr>
                    {array.map((order, index) => (
                        <tr className='border-2 border-black w-full' key={index}>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.user}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.shipper}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.weight}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.cost}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.source}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.destination}</td>
                            <td className='px-4 py-2 border-r-2 border-black'>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;