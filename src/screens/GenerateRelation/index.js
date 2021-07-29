import React, { useEffect, useState } from "react";
import AfdService from "../../services/afd";


function GenerateRelation() {
    const [data, setData] = useState();

    useEffect(() => {
      async function loadData(){
        const response = await AfdService.all();
        setData(response.data)
      }
      loadData();
    }, []);

    console.log(data);

    return (
      <>
      <div className="GenerateRelation">
        <h1>Geração de Relatório</h1>
      </div>
      <button>Mostrar dados</button>
      </>
    );
  }
  
  export default GenerateRelation;