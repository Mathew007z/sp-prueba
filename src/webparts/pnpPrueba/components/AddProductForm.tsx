import { sp } from "@pnp/sp/presets/all";
import React, { useState } from "react";
import { FontSizes } from '@fluentui/theme';
import { PrimaryButton } from '@fluentui/react';
// agrege Componente buttin de fluen ui

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [depto, setDepto] = useState("");



  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
 
  const handleDeptoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepto(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    try {
      const result = await sp.web.lists.getByTitle("Area RRHH").items.add({
        Title: '',
        DNI: 2202393434,
        Nacimiento:'2020-01-01T00:00:00Z',
        Departamento:'',
        Edad:'',
        Description:'',
        SupervisorId: 1,
        Pais:'Argentina'
      });
      console.log(result);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  
  

  return (
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
              <div className="LayoutPage-demoBlock">
                <form onSubmit={handleSubmit} style={{ fontSize: FontSizes.size18, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <label htmlFor="title-input">Nombre:</label>
                    <input type="text" id="title-input" value={title} onChange={handleTitleChange} />

                    <label htmlFor="title-input">Departamento:</label>
                    <input type="text" id="title-input" value={depto} onChange={handleDeptoChange} />
                    
                    <label htmlFor="description-input">Descripción:</label>
                    <input type="text" value={description} onChange={handleDescriptionChange} />
                    <PrimaryButton type="submit" style={{marginTop:'25px'}}>Agregar Empleado</PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </div>






  
  );
};

export default AddProductForm;