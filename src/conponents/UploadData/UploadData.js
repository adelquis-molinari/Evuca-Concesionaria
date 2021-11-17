import React, { useState } from "react";
import { addProduct } from "../../Firebase/AddProduct";

const UploadData = () => {
  const [stock, setStock] = useState({
    marca: "",
    modelo: "",
    precio: "",
    stock: "",
    img: "",
    imgMarca: "",
    imgBanner: "",
    imgDescriptivas: "",
    Titulo: "",
    descripcion: "",
    tipo: "",
  });
  return ( 
    <form className="p-4 mx-auto" style={{ maxWidth: "25rem" }}>
        <fieldset>
          <legend>Cargar Vehículos</legend>
  
          
  
          {/* VEHICULOS */}
          <div className="form-group">
            <label htmlFor="producto" className="form-label mt-4">
              Marca:
            </label>
            <input
              type="text"
              name="marca"
              id="marca"
              placeholder="Ej: Ford"
            />
          </div>
          <div className="form-group">
            <label htmlFor="producto" className="form-label mt-4">
              Modelo:
            </label>
            <input
              type="text"
              name="modelo"
              id="modelo"
              placeholder="Ej: Mondeo"
            />
          </div>
           {/* PRECIO */}
           <div className="form-group">
            <label className="form-label mt-4">Precio:</label>
                <span className="input-group-text">$</span>
                <input
                  name="precio"
                  id="precio"
                  type="number"
                  aria-label="Precio"
                />
          </div>

          {/* STOCK */}
          <div className="form-group mb-3">
            <label htmlFor="stock" className="form-label mt-4">
              Stock:
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              placeholder="Stock"
            />
          </div>
          {/* DESCRIPCIÓN */}
          <div className="form-group">
            <label htmlFor="producto" className="form-label mt-4">
              Titulo:
            </label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              placeholder="Ej: Un nuevo día"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion" className="form-label mt-4">
              Descripción:
            </label>
            <input
              type="text"
              name="desc"
              id="descripcion"
              placeholder="Ej: Presto Pronta 1kg sin sodio"
            />
          </div>
  
          {/* CATEGORIAS */}
          <div className="form-group">
            <label htmlFor="categoria" className="form-label mt-4">
              Categorías:
            </label>
            <div
              id="categoria"
            >
              
              <input
                type="text"
                id="categoria"
                placeholder="Enter para agregar"
                style={{ border: "none" }}
              />
            </div>
          </div>
          {/* IMAGEN */}
          <div>
            <label htmlFor="productImage" >Imagen miniatura
            </label>
            <input
              name="productImg"
              id="productImage"
              type="file"
              accept="image/*"
            />
          </div>
  
          <button
            type="button"
            className="btn btn-primary"
          >ingresar</button>
        </fieldset>
      </form>
  );
}

export default UploadData;