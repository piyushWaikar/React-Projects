import React, { memo, useEffect, useState } from 'react'
import AppBar from '../components/AppBar'

//Firebase
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from "../config/firebase"

import ContactSection from '../components/ContactSection';
import AddUpdateAndDelete from '../components/AddUpdateAndDelete';
import useDisclouse from '../hooks/useDisclouse'; // custom hook

// For alert message - npm i react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function IndexPage() {

  const[contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError , setError] = useState(false);

  const {isOpen, opening, closening} = useDisclouse();

  useEffect( ()=> {

    const getContacts = async()=>{
      try {
        setLoading(true);
        const contactRef = collection(db,"contacts");

        onSnapshot(contactRef , (snapshot)=> {
          const contactLists = snapshot.docs.map((docs)=>{
            return {
              id:docs.id,
            ...docs.data()
          }});
          setContacts(contactLists);
        });

        setLoading(false);

      } catch(error){
        console.log(error);
        setError(true);
      }
      
    }

    getContacts();

  },[]);

// Runs on input calls only
  const searchContact = (e)=>{
    const searchValue = e.target.value.toLowerCase();

    const contactRef = collection(db,"contacts");

    onSnapshot(contactRef , (snapshot)=> {
      const contactLists = snapshot.docs.map((docs)=>{
        return {
          id:docs.id,
        ...docs.data()
      }});

      const filterContact = contactLists.filter((contact)=> contact.name.toLowerCase().includes(searchValue)); // if there is no searchValue than the filter condition will be nothing so add the contacts will be get passed .

      setContacts(filterContact);
    });

  }

  if(isError){
    return <div className='text-red-500 flex justify-center items-center min-h-screen'>Server issue</div>
  }

  if(loading) {
    return <div className='text-red-500 flex justify-center items-center min-h-screen'>Loading......</div>
  }

  return (
    <>
    <div className='text-white'>
        <AppBar opening={opening} searchContact={searchContact} />
        <ContactSection contacts={contacts} opening={opening}closening={closening} />
    </div>
    <AddUpdateAndDelete opening={opening} isOpen={isOpen} closening={closening} />
    <ToastContainer
    position='bottom-center'
    />
    </>
  )
}

export default IndexPage