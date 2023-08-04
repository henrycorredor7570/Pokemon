import style from "./Pagination.module.css";

const Pagination = ({currentPage, pokemonsPerPage, allPokemons, paginado}) => {

    const pageNumber = [];// se almacenan los numeros de pagina

    for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {// para calcular la cantidad de numeros de pagina 
        pageNumber.push(i+1);        
    }

    const handlePrev = (currentPage) => {if(currentPage !== 1) paginado(currentPage - 1)};
  
    const handleNext = (currentPage) => {if(currentPage !== 1000) paginado(currentPage + 1)};
    
    pageNumber.pop();//eliminamos el ultimo numero del arreglo
    
    return (
        <div className={style.containerPagination}>
          {currentPage !== 1 
            ? (<button onClick={() => handlePrev(currentPage)}>Prev</button>) 
            : ("")
          }
          {pageNumber && pageNumber.map((number) => {
              return (
                <div key={number}>
                  <button onClick={() => paginado(number)}>{number}</button>
                </div>
              )})
          }
          {currentPage !== Math.ceil(allPokemons / pokemonsPerPage) // muestra next solo si la pagina actual no es la ultima
            ? (<button onClick={() => handleNext(currentPage)}>Next</button>) 
            : ("")}
        </div>
    );
}

export default Pagination;