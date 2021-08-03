import React from 'react'



const Form = ({name,setName,age,setAge,handleSubmit}) => {

    return (
        <div>
            <form onSubmit={handleSubmit} className="ui form" action="">
                    <div className="field">
                        Enter name
                        <input value={name}  className="ui input" onChange={e => setName(e.target.value)} type="text"/>
                    </div>
                    <div className="field">
                        Enter age
                        <input value={age} className="ui input" onChange={e => setAge(e.target.value)} type="text"/>
                    </div>                    
                    <button className="ui button">Submit</button>
                </form>        
        </div>
    )
}

export default Form
