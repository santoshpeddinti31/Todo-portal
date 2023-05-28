import React, { Fragment, useState } from 'react';
import Styles from '../components/tasks.module.css'
import {TbMoneybag} from 'react-icons/tb'
import {BsArrowLeft} from 'react-icons/bs'
import {BsPencilFill} from 'react-icons/bs'
const Tasks=()=>{

    const[user,setUser]=useState([]);//store the values
    const[title,setTitle]=useState("");//input values
    const[description,setDescription]=useState("");//input values

    //input values given from the todo app

    const inputTitleHandler=(event)=>{
        setTitle(event.target.value);
    };

    const inputDescriptionHandler=(event)=>{
        setDescription(event.target.value);
    };
  
    //store the values from previous state to present state

    const givenValues=(task1,task2)=>{
        const data={
            id:Math.random().toString(),
            userTitle:task1,
            userDesc:task2,
        };
        setUser((prev)=>{
            return [...prev,data];
        });
    };

    //form submit the data values

    const submitHandler=(event)=>{
        event.preventDefault();

        //if the input value is not given submit to the below condition
        if(title.trim().length > 0 && description.trim().length > 0)
        {
            givenValues(title,description);
        }else{
            alert('please given input values');
        }
        setTitle("");
        setDescription("");
    };

    return(
     <Fragment>     
        <div className={Styles.task}>
            <ul className={Styles.tasks}>
                <li>List:Things to Buy</li>
                <li>List:Empty List</li>
                <li>Add Todo-List<span id={Styles.plus}><span id={Styles.plusone}>+</span></span></li>
            </ul>
            </div>
            <div className={Styles.addtodo}>
                   <li>
                    <span id={Styles.pot}><TbMoneybag /></span>
                     <div id={Styles.userinput}>
                        <form onSubmit={submitHandler} >
                        <input type="text"  autoFocus placeholder='Add Todo' value={title} onChange={inputTitleHandler} id={Styles.desc}/>
                        <input type="text"   placeholder='Add Todo Description' value={description} onChange={inputDescriptionHandler} id={Styles.desc1}/>
                        <button type='submit' id={Styles.plus1}><span id={Styles.plusone}>+</span></button>
                        </form></div>
                     </li>
            </div>
            <div className={Styles.addtodo1}>
                   <li>
                    <span id={Styles.pot2}><TbMoneybag /></span>
                     <div id={Styles.userinput1}>
                        <form  >
                        <input type="text"  autoFocus placeholder='Add Todo'  id={Styles.desc}/>
                        <input type="text"   placeholder='Add Todo Description'  id={Styles.desc1}/>
                        <div  id={Styles.plus1}><span id={Styles.plusone1}>+</span></div>
                        </form></div>
                     </li>
            </div>
            <div className={Styles.tasklist}>
                <ul>
                    {user.map((todo)=>
                    { return(<li key={todo.id} >
                        <span id={Styles.pot1}><TbMoneybag /></span>
                        <span id={Styles.desc2}>
                        {todo.userTitle} 
                        <span id={Styles.edit}><BsPencilFill/></span>
                        </span>
                        <div id={Styles.desc3} >{todo.userDesc}</div>
                    </li>);})}
                </ul>
            </div>
            <div className={Styles.rightsidebar}>
                <h5><BsArrowLeft id={Styles.rsa}/>Edit Todo</h5>
                <form >
                    <p className={Styles.edittitle}>Carrot</p>
                    <p className={Styles.editdes}>Carrot improves eyesight</p>
                    <button>Save</button>
                </form>
            </div>
            
        </Fragment>
    )
};
export default Tasks;