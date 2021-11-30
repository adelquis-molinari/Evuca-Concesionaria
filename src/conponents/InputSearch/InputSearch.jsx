import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './InputSearch.css';

const InputSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setOpen] = useState(true);

    document.addEventListener('click', (e)=> {
        if(e.target.className) {
            if(e.target.className !== 'item-found' && e.target.className !== 'input-control') {
            setOpen(false)
        }
        }
        
    }) 

    return ( 
        <div className="search-input-div" >
            <div className="input-group">
            <input 
                type="text" 
                className="input-control" 
                placeholder="Buscar..."
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                onFocus={()=>setOpen(true)}
            />
            {searchTerm.length > 0 && (<div className="search-blank" onClick={()=> setSearchTerm('')}><i class="fas fa-times"></i></div>)}
        </div>
        {searchTerm.length >= 2 && isOpen && (
            <div className="search-items" >
                {props.dataSimple.filter(item => {
                    const findItem = `${item.tipo} ${item.marca} ${item.modelo} ${item.tipo} ${item.modelo} ${item.marca} ${item.tipo} ${item.modelo} ${item.tipo} ${item.marca}`;
                    return findItem.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(searchTerm.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase())
                }).map(val => {
                    return (
                        <Link to={`/article/${val.id}`} onClick={()=> {setOpen(false);setSearchTerm(`${val.marca} ${val.modelo}`)}}><p className="item-found">{val.marca} {val.modelo}</p></Link>
                    )
                })}
            </div>
        )}
        </div>
        
    );
}
 
function mapStateToprops(state) {
    return {
        dataSimple: state?.dataSimple ? state.dataSimple : []
    }
}

export default connect(mapStateToprops, null)(InputSearch);