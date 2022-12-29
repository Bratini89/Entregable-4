import React from 'react';


const UsersList = ({ usersList, selectUsers, deleteUser}) => {


    return (
        <ul>
            {
                usersList.map((users) => (
                    <li key={users.id}>
                        <div> <h2>{users.first_name}{" "}{users.last_name}</h2></div>
                        <div>
                           <h4>Email <i class="fa-regular fa-envelope"></i></h4>
                            <p>{users.email}</p></div> {"  "}
                        <div>
                            <h4>Birthday </h4>
                            <p><i className="fa-solid fa-cake-candles"></i>{" "}{users.birthday}</p></div> {"  "}
                        <div className='btn-icon'>

                            <a href="#" onClick={() => selectUsers(users)} >
                                Edit{" "}
                            <i className="fa-regular fa-pen-to-square" ></i>
                            </a>
                            <a href="#" onClick={() => deleteUser(users.id)}>
                                Delete {" "}
                             <i className="fa-sharp fa-solid fa-trash" ></i>
                             </a>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;
