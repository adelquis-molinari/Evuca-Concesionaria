import React, { useState } from 'react';
import {apiSimpleAutos} from "../../Data/apiAutos.js"
import {apiSimpleMotos} from "../../Data/apiMotos.js"
import {apiSimpleTractores} from "../../Data/apiTractores.js"
import { connect } from 'react-redux';
import './InputSearch.css';

const InputSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setOpen] = useState(true);
    const allData = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores)


    return ( 
        <div className="search-input-div">
            <div className="input-group">
            <input 
                type="text" 
                className="input-control" 
                placeholder="Buscar..."
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                onFocus={()=>setOpen(true)}
                onBlur={()=>setOpen(false)}
            />
            {searchTerm.length > 0 && (<div className="search-blank" onClick={()=> setSearchTerm('')}><i class="fas fa-times"></i></div>)}
                <button 
                    className="btn-Search" 
                    type="button" 
                    id="button-addon2"><i className="fas fa-search"></i></button>
        </div>
        {searchTerm.length >= 2 && isOpen && (
            <div className="search-items">
                {props.dataSimple.filter(item => item.tipo.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(searchTerm.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase())|| item.marca.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(searchTerm.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()) || item.modelo.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(searchTerm.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase())).map(val => {
                    return (
                        <p>{val.marca} {val.modelo}</p>
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