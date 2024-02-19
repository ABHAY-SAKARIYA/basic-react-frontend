import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const API_URL = "https://basic-api-z0e9.onrender.com/"

export default function Table() {
    const [employe, setEmploye] = useState(null);
    const [add_data_btn, setAdd_data_btn] = useState(false);
    const [update_data_btn, setUpdate_data_btn] = useState(false);
    const [errors, setErrors] = useState(null);

    let history = useNavigate();

    useEffect(() => {
        FetchData();
        let token = localStorage.getItem("token");
        if (!token) {
            history("/login");
        }
    }, [history]);

    const FetchData = async () => {

        const res = await axios({
            url: `${API_URL}data/get`,
            method: "GET",
            headers: {
                "auth-token": localStorage.getItem("token")
            }
        })

        setEmploye(res.data.data);
    }

    // Handle Delete Employee Detail
    const handleDelete = async (targetId) => {
        let surity = window.confirm("Are You Sure You Wanted To Delete This Employee Details");
        if (surity === true) {
            const delUrl = `${API_URL}data/del/${targetId}`;
            await axios({
                url: delUrl,
                method: "DELETE",
                headers: {
                    "auth-token": localStorage.getItem("token")
                }
            });

            // Updating State
            // FetchData();
            const NewData = [...employe].filter((e) => {
                return e._id !== targetId;
            });

            setEmploye(NewData);

        }
    }


    


    // To Add Data 
    const [cred, setCred] = useState({
        firstname: "",
        lastname: "",
        position: ""
    });


    const Onchange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }

    const handleAddData = async (e) => {
        e.preventDefault();
        let Data = {
            firstName: cred.firstname,
            lastName: cred.lastname,
            position: cred.position
        }

        const response = await axios({
            url: `${API_URL}data/add`,
            method: "POST",
            headers: {
                "auth-token": localStorage.getItem("token")
            },
            data: Data
        });

        if (response.data.type === "success") {

            FetchData();
            setCred({
                firstname: "",
                lastname: "",
                position: ""
            });
            setAdd_data_btn(false);
        } else {
            setErrors(response.data);
            setAdd_data_btn(false);
        }


    }

    // Edit Data

    // to save edit data id
    const [editid,setEditid] = useState();

    // To Show Edit Form with Previous Data
    const ShowUpdate = (id,f,l,p) => {
        setEditid(id);
        setCred({
            firstname: f,
            lastname: l,
            position: p
        });
        setUpdate_data_btn(true);
    }
    

    // FUnction to send edit request to server with data
    const handleEdit = async (e) => {
        e.preventDefault();
        const editUrl = `${API_URL}data/update/${editid}`;
        const updatedData = {
            firstName: cred.firstname,
            lastName: cred.lastname,
            position: cred.position
        }
        const res = await axios({
            url: editUrl,
            method: "PUT",
            headers: {
                "auth-token": localStorage.getItem("token")
            },
            data: updatedData
        });

        if (res.data.type === "success"){
            // FetchData();
            
            const newData = [...employe].filter((e) => {
              if (e._id === editid){
                e.firstName = cred.firstname
                e.lastName = cred.lastname
                e.position = cred.position
              }
              return e._id
            });
  
            setEmploye(newData);
            setCred({
                firstname: "",
                lastname: "",
                position: ""
            });
            setEditid(null);
            setUpdate_data_btn(false);
            console.log(res);
        }else{
              console.log(res);
            setErrors(res.data)
          }
  
    }


    return (
        <>
            {/* Alerts for the error */}
            {errors !== null && errors.type === "danger" &&
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {errors.error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            {/* Add Data Model */}
            {add_data_btn && <form onSubmit={handleAddData}>
                <div className="model bg-secondary">
                    <div className="model_title">ADD DATA</div>
                    <div className="model_input">
                        <input type="text" placeholder='Enter FirstName' value={cred.firstname} onChange={Onchange} name='firstname' className='input_tag' />
                        <input type="text" placeholder='Enter LastName' value={cred.lastname} onChange={Onchange} name="lastname" className='input_tag' />
                        <input type="text" placeholder='Enter Position' value={cred.position} onChange={Onchange} name='position' className='input_tag' />
                    </div>
                    <div className="model_btn">
                        <button type='submit' className='btn_add model_btn_common'>ADD DATA</button>
                        <button type='button' className='btn_cancel model_btn_common' onClick={() => setAdd_data_btn(false)}>CANCEL</button>
                    </div>
                </div>
            </form>}

            {/* Update Data Model */}
            {update_data_btn && <form onSubmit={handleEdit}>
                <div className="model bg-secondary">
                    <div className="model_title">UPDATE DATA</div>
                    <div className="model_input">
                        <input type="text" placeholder='Enter FirstName' value={cred.firstname} onChange={Onchange} name='firstname' className='input_tag' />
                        <input type="text" placeholder='Enter LastName' value={cred.lastname} onChange={Onchange} name="lastname" className='input_tag' />
                        <input type="text" placeholder='Enter Position' value={cred.position} onChange={Onchange} name='position' className='input_tag' />
                    </div>
                    <div className="model_btn">
                        <button type='submit' className='btn_add model_btn_common'>UPDATE DATA</button>
                        <button type='button' className='btn_cancel model_btn_common' onClick={() => setUpdate_data_btn(false)}>CANCEL</button>
                    </div>
                </div>
            </form>}

            {/* Add Data button */}
            <div className="crud">

                <div className="adddatabtn container my-4 mt-8">
                    <button className="btn btn-primary" onClick={() => setAdd_data_btn(true)}>ADD Data</button>
                </div>

                {/* Details table  */}
                <div className='container'>
                    <div className='title'>DETAILS</div>
                    <table className='table table-success table-striped table-bordered border-secondary'>
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>position</th>
                                <th className='action'>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employe ? employe.map((e) => {
                                return (
                                    <tr key={e._id}>
                                        <td>{e.firstName}</td>
                                        <td>{e.lastName}</td>
                                        <td>{e.position}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' type='button' onClick={() => handleDelete(e._id)}>Delete</button>
                                            <button className='btn btn-success my-1' type='button' onClick={() => ShowUpdate(e._id,e.firstName,e.lastName,e.position)}>Update</button>
                                        </td>
                                    </tr>

                                )
                            }) : "No Data Found"}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
