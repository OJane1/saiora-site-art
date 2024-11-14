import { useState, useEffect } from 'react';
import { MyPrograms } from './MyPrograms';
import { getAllPrograms, addProgram, editProgram, deleteClass } from './FetchProgram';

function ListOfPrograms() {

const [myProgram, setProgram] = useState([]);
const [title, setTitle] = useState("");
const [editing, setEditing] = useState(false);
const [classId, setClassId] = useState("");

useEffect(() => {
    getAllPrograms(setProgram)
}, [])

const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setClassId(_id)
}

    return(
        <div>
            <h1>Programme des cours</h1>
            <input
            type="text" 
            placeholder="Ajouter un cours"
            value={title}
            onChange = {(e) => setTitle(e.target.value)}
            />
            <button
            disabled={!title}
            onClick={editing ? () => editProgram(classId, title, setTitle, setProgram, setEditing) : () => addProgram(title, setTitle, setProgram)}>
                {editing ? "Modifier" : "Ajouter"}</button>
                {myProgram.map((program) => (
                    <MyPrograms 
                    text={program.title} 
                    key={program._id}
                    updatingInInput = {() => updatingInInput(program._id, program.title)}
                    deleteClass={() => deleteClass(program._id, setProgram)}
        />
        ))}
        </div>
    )
}

export default ListOfPrograms;