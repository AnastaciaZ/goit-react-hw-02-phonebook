import React from 'react';
import s from '../Filter/Filter.module.css';
export default function Filter({name, onChangeFilter}) {
    return (
        <div>
            <label>Find contacts by name
             <br/>
                <input className={s.filterInput} type="text" value={name } onChange={e=>onChangeFilter(e.target.value) } />
            </label>    
        </div>
    );
}