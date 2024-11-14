import axios from 'axios';

const getAllPrograms = (setProgram) => {
    axios.get("https://saiora-site-art.onrender.com")
    .then(({data}) => {console.log(data)
        setProgram(data);
    })
}

const addProgram = (title, setTitle, setProgram) => {
    axios.post(`https://saiora-site-art.onrender.com/saveClass`, {title})
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllPrograms(setProgram)
    }
)}

const editProgram = (classId, title, setTitle, setProgram, setEditing) => {
    axios.post(`https://saiora-site-art.onrender.com/editClass`, {_id: classId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllPrograms(setProgram)
    })
}

const deleteClass = (_id, setProgram) => {
    axios.delete(`https://saiora-site-art.onrender.com/deleteClass`, { _id })
    .then((data) => {
        console.log(data)
        getAllPrograms(setProgram)
    })
}

export {getAllPrograms, addProgram, editProgram, deleteClass};