import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm, } from 'react-hook-form';

import Swal from "sweetalert2"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const initialUsers = {
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    birthday: "" 
}

const UsersForm = ({ getUsers, usersSelected, deselectUsers }) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        if (usersSelected) {
            reset(usersSelected)
        } else {
            reset(initialUsers)
        } 
        

    }, [usersSelected])

   
    const submit = (data) => {
        console.log(data)

     
        Swal.fire({
            title: "Updated",
            icon: "success",
            text: "Succesefully Updated",
            timer: 5000,
            timerProgressBar: true
           }  
           )

        if (usersSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${usersSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deselectUsers()
                    
                })
                .catch(error => console.log(error.response?.data))
        } else {
            axios.post(`https://users-crud.academlo.tech/users/`, data)
                .then(() => getUsers())
                .catch(error => console.log(error.response?.data))
        }
    }


    return (
 
        <form
            className='users-form'
            onSubmit={handleSubmit(submit)}
        >    
            
            <h2>New User</h2>
            <div className="input-container">
                <label htmlFor="first_name"><i class="fa-solid fa-user"></i></label>{" "}
                <input {...register("first_name")} type="text" id="first_name" placeholder='First Name' required/> {" "}
                <label htmlFor="last_name"></label>
                <input {...register("last_name")} type="text" id="last_name" placeholder='Last Name' required />
            </div>
            
            <div className="input-container">
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>{" "}
                <input {...register("email")} type="email" id="email" placeholder='example@gmail.com' required />
            </div>
            <div className="input-container">
                <label htmlFor="password"><i class="fa-solid fa-key"> </i></label>{" "}
                <input {...register("password")} type="password" id="password" placeholder='Password' required />
            </div>
            <div className="input-container">
                <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i> </label>{" "}
                <input {...register("birthday")} type="date" id="birthday" required />
            </div>
            <button>Submit{" "}<i className="fa-solid fa-right-to-bracket"></i></button>
        </form>
        
    );
};

export default UsersForm;

