import { useEffect } from 'react';
import './VisitaForm.scss';

export default function VisitaForm(props) {
    const dispatch = props.dispatch; // Función dispatch del reducer
    const category = props.category; // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const alteredPlan = props.alteredPlan; // Estado; contendrá los datos modificados del nuevo plan a insertar
    const setAlteredPlan = props.setAlteredPlan; // Función actualizadora del estado newPlan
    const createPlan = props.createPlan; // Función que ejecuta la inserción en el JSON de datos
    const date = props.date; // Estado; contiene la fecha a mostrar en el input de tipo date
    const setDate = props.setDate; // Función actualizadora del estado de la fecha
    const today = props.today; // Contiene la fecha actual

    // Para que la fecha actual se guarde automáticamente al cargar la página
    useEffect(() => {
        if(alteredPlan.day === "") {
            setAlteredPlan({...alteredPlan, day: today})
        }
    }, [])
    
    return (
        <div className="visita__form">
            <form onSubmit={e => e.preventDefault()}>
                
                {/* /////////////////////// INPUT */}
                <label>Día: </label>
                    <input value={date} type="date" onChange={event => {
                        if (today > event.target.value) {
                            alert("No puedes seleccionar una fecha anterior a la de hoy");
                            setDate(today);
                        } else {
                            setAlteredPlan({...alteredPlan, day: event.target.value});
                            setDate(event.target.value);
                        }
                    }}/>
                    

                {/* /////////////////////// SELECT CATEGORY */}
                <label>Categoría: </label>
                    <select className="visita__form--dropdown" onChange={event =>  {
                            dispatch({type:event.target.value.toUpperCase()});
                            setAlteredPlan({...alteredPlan, category: event.target.value.toUpperCase()})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        <option>Cultura</option>
                        <option>Gastronomia</option>
                        <option>Ocio</option>
                    </select>

                    {/* {console.log(dropdown)} */}
                {/* /////////////////////// SELECT ITEM */}
                <label>Qué hacer: </label>
                    <select className="visita__form--dropdown" defaultValue={"--- Elige ---"} onChange={event => {
                        setAlteredPlan({...alteredPlan, option: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        {dropdown.map(element => {
                            return <option key={element}>{element}</option>
                        })}
                    </select>

                {/* /////////////////////// SUBMIT */}
                <button className="visita__form--submit" onClick={() => {
                    createPlan();
                }}>
                    Añadir itinerario
                </button> 
            </form>
        </div>
    )
}