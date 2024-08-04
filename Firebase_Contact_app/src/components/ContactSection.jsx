import React from 'react'
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import {deleteDoc, doc} from "firebase/firestore"
import {db} from '../config/firebase'
import AddUpdateAndDelete from './AddUpdateAndDelete';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';


function ContactSection({contacts}) {


  return (
    <>
    {!contacts ? 
    <div className='flex min-h-[65vh] justify-center items-center gap-4'>
        <img src="Nouser.png" alt="No contact" />
        <p className='text-4xl font-semibold'>No Contact Found</p>
    </div> :
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 p-5 '>
        {contacts.map( (contact)=> <ContactCard key={contact.id} contact={contact}  />)}
    </div>
    }
    </>
  )
}

function ContactCard({contact}){

    const {isOpen, opening, closening} = useDisclouse();

    // console.log(contact);

    const deleteContact = async (id)=> {
        try {

            await deleteDoc(doc(db,"contacts",id));
            toast.success("Contact Deleted !!")
            
        } catch (error) {
            console.log(error);
            
        }
    }


    
    return (
        <div className='bg-slate flex items-center justify-between gap-2 p-2 rounded-xl border-2 border-gray-500 hover:border-white mb-4'>
            <img className='w-16' src="user.png" alt="user" />
            <div className='flex-grow items-start flex flex-col '>
                <p className='text-2xl '>{contact.name}</p>
                <p className='text-lg'>{contact.email}</p>
            </div>
            <TbEditCircle onClick={opening} className='text-4xl cursor-pointer hover:text-yellow-300' />
            <MdDelete onClick={()=>deleteContact(contact.id)} className='text-4xl cursor-pointer hover:text-red-600' />
            <AddUpdateAndDelete isUpdate contact={contact} opening={opening} isOpen={isOpen} closening={closening} />
        </div>
    )
}

export default ContactSection