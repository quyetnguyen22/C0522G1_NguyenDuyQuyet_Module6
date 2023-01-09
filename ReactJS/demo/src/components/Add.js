import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function Add() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let navigate = useNavigate();
    const save = (e) => {
        e.preventDefault();
        const empData = {name, age};
        fetch("http://localhost:4200/employees", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(empData)
        }).then((res) => {
            // alert("successfully");
            navigate('/');
        }).catch((err) => {
            console.log(err.message);
        })
    }
    return (
        <div>
            <Form className='d-grid gap-2 w-25 container mt-5'>
                <h3>Add new employee</h3>
                <input id="name" type='text' className='form-control' placeholder='Enter name'
                       onChange={(e) => setName(e.target.value)} required></input>
                <input type='text' className='form-control' placeholder='Enter age'
                       onChange={(e) => setAge(e.target.value)} required>
                </input>
                <Button type='submit' onClick={(e) => save(e)}>Save</Button>
            </Form>
        </div>
    )

}

export default Add;
