import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Alert, Button, Form} from "react-bootstrap";

function Edit(){
    let navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    // const [empData, empDataChange] = useState('');

    useEffect(()=>{
        fetch("http://localhost:4200/employees/" + id).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setName(resp.name);
            setAge(resp.age);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])

    const save = (e) => {
        e.preventDefault();
        const empData = {name, age};
        fetch("http://localhost:4200/employees/" + id, {
            method: "PATCH",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(empData)
        }).then((res) => {
            <Alert show="true" variant="success">
                <span>Successfully</span>
            </Alert>
            // alert("successfully");
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return(
        <div>
            <Form className='d-grid gap-2 w-25 container mt-5'>
                <h3>Edit employee</h3>
                <input id="name" type='text' value={name} className='form-control' placeholder='Enter name'
                       onChange={(e) => setName(e.target.value)} required></input>
                <input type='text' value={age} className='form-control' placeholder='Enter age'
                       onChange={(e) => setAge(e.target.value)} required>
                </input>
                <Button type='submit' onClick={(e) => save(e)}>Save</Button>
            </Form>
        </div>
    )
}
export default Edit;
