import './InputSearch.css'
const InputSearch = () => {

    return ( 
        <div className="input-group">
            <input 
                type="text" 
                className="input-control" 
                placeholder="Buscar..."
            />
                <button 
                    className="btn-Search" 
                    type="button" 
                    id="button-addon2"><i className="fas fa-search"></i></button>
        </div>
     );
}
 
export default InputSearch;