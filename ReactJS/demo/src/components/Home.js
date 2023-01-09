import React, {Fragment, useEffect, useState} from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();

    const edit = (id) => {
        navigate("edit/" + id);
    }
    const handleDelete = (item) => {
        /**
         * Search element
         * @type {number}
         */
        navigate("del/" + item.id);
        if (window.confirm("You are about to delete " + item.name + " ?")){
            fetch("http://localhost:4200/employees/" + item.id, {
                method: "DELETE",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(empData)
            }).then((res) => {
                alert("successfully");
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        }
        navigate('/');
    }

    const [empData, empDataChange] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4200/employees").then((res) => {
            return res.json();
        }).then((resp) => {
            empDataChange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <h3>Employee list</h3>
                <Link to={'/create'} className='float-start'>
                    <Button>Add new</Button>
                </Link>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        empData && empData.length > 0
                            ?
                            empData.map((item, i) => {
                                return (
                                    /**
                                     * if you don't import the key, when you want to update only property
                                     * React needs to re-render the whole row vs just the element.
                                     */
                                    <tr key={i}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Button className='bg-warning' onClick={() => edit(item.id)}>Edit</Button>
                                            &nbsp;
                                            <Button className='bg-danger'
                                                    onClick={() => handleDelete(item)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                    }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Home;
