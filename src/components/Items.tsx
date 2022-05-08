import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getItems } from '../redux/items/thunk';
import { Item } from '../redux/items/types';
import { RootState } from '../redux/store';

const Items= () => {
   const dispatch = useAppDispatch();
    const items = useAppSelector((state:RootState) => state.items);

    const [checkItems,setCheckItems] = useState(false);

    useEffect(() => {
        dispatch(getItems() as any);
    },[]);

    return (
    <div>
        <h2>List of Items:</h2>
        <div className='row'>
            <div className='col-6 padding-6'>
                <h3>Completed Task:</h3>
                <ul>
                    {
                        items.itemsList.filter(i => i.status === "Completed").map((eachItem: Item) => 
                                <li key={eachItem.id}>
                                    <label>
                                        {eachItem.task}
                                    </label>
                                </li>
                        )
                    }
                </ul>
            </div>
            <div className='col-6'>
                <h4>Pending Task:</h4>
                <ul>
                {
                    items.itemsList.filter(i => i.status === "Pending").map((eachItem: Item) => 
                            <li key={eachItem.id}>
                                <label>
                                    {eachItem.task}
                                </label>
                            </li>
                    )
                }
                </ul>
            </div>
        </div>
       
    </div>
    );
  }
 
export default Items;