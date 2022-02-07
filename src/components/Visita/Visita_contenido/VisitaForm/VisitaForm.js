export default function VisitaForm(props) {
    const dispatch = props.dispatch;
    const dropdown = props.dropdown;
    const newPlan = props.newPlan;
    const setNewPlan = props.setNewPlan;
    const createPlan = props.createPlan;
    
    return (
        <div className="visita__content__form">
            <form onSubmit={e => e.preventDefault()}>
                <label>Día: </label>
                {/* /////////////////////// INPUT */}
                    <input type="date" onChange={event => {
                        setNewPlan({...newPlan, day: event.target.value})
                    }}/>
                    
                {/* /////////////////////// SELECT CATEGORY */}
                    <select onChange={event =>  {
                            dispatch({type:event.target.value});
                            setNewPlan({...newPlan, category: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        <option>Cultura</option>
                        <option>Gastronomía</option>
                        <option>Ocio</option>
                    </select>


                {/* /////////////////////// SELECT ITEM */}
                    <select onChange={event => {
                        setNewPlan({...newPlan, option: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        {dropdown.map(element => {
                            return <option key={element}>{element}</option>
                        })}
                    </select>

                {/* /////////////////////// SUBMIT */}
                    <button className="visita__content__form--submit" onClick={() => {
                        dispatch({type:"Submit"});
                        createPlan();
                    }}>
                        Añadir itinerario
                    </button> 
            </form>
        </div>
    )
}