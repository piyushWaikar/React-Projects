import React from 'react'
import Modal from './Modal';

import {Form,Formik,Field, ErrorMessage} from 'formik' // For Form UI

import {db} from '../config/firebase'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

// For form validation . why Yup because Formik supports Yupp
import * as Yup from 'Yup';

const contactSchemaValidation = Yup.object().shape({
  name : Yup.string().required("Name is Required !"),
  email : Yup.string().email("Invalid Email").required("Email is Required !")
});


function AddUpdateAndDelete({isOpen,opening, closening, isUpdate, contact}) {

    const addContact = async(contact)=>{
        try{
        const contactRef = collection(db,"contacts");
        await addDoc(contactRef,contact);
        closening();
        toast.success("Contact added Sucessfully");        
        }catch(error){
            console.log(error);
        }
    }

    const updateContact = async(contact, id)=>{
        try{

        const contactRef = doc(db,"contacts", id);
        await updateDoc(contactRef,contact);
        closening();
        toast.success("Contact Updated Successfully");
        }catch(error){
            console.log(error);
        }
    }



  return (
    <>
    <Modal isOpen={isOpen} opening={opening} closening={closening}> 
        <Formik
        validationSchema={contactSchemaValidation}
        
        initialValues={isUpdate ? {
            name:contact.name,
            email:contact.email
        }:{
            name:"",
            email:""
        }}
        onSubmit={(values)=>{
            isUpdate ? updateContact(values,contact.id) : addContact(values);
            console.log(values);
        }}
        >
            <Form>
            <div className='flex flex-col gap-5 justify-center items-center  p-4'>
                <div>
                <Field className={` bg-transparent border-2 border-red-500 text-lg py-1.5 px-4 rounded-md ${isUpdate ? "text-white" : "text-red-500" }`}  type="text" name='name' placeholder='Name' />
                <div className='text-red-600 ml-1'>
                    <ErrorMessage name='name' />
                </div>
                </div>

                <div>
                <Field className={` bg-transparent border-2 border-red-500 text-lg py-1.5 px-4 rounded-md ${isUpdate ? "text-white" : "text-red-500" }`} type="email" name='email' placeholder='Email' />
                <div className='text-red-600 ml-1'>
                    <ErrorMessage name='email' />
                </div>
                </div>

                <div className='m-2'>
                    <button className='py-2 px-5 bg-blue-700 rounded-md text-white' type="submit">{isUpdate ? "Update" :"Add"} Contact</button>
                </div>
            </div>
            </Form>
        </Formik>
    </Modal>
    </>
  )
}

export default AddUpdateAndDelete