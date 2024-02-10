import { contacts } from '.'
import { Link } from 'react-router-dom'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const updates = [ "Edit", "Delete", "View"]

const ContactCard = () => {
  const [contactList, setContactList] = useState([])
  const collectionRef = collection(db, 'contacts')

  useEffect(() => {
   const getContacts = async () => {
     try{
       const data = await getDocs(collectionRef)
       const response = data.docs.map((doc) => ({...doc.data(), id:doc.id, }))
       console.log(response)
       setContactList(response)
     }
     catch(err){
      console.error(err.message)
     }
   }

   getContacts()
  }, [])


    const buttonBg = (index) => {
        if(index === 0){
            return "first"
        }
        else if(index === 1){
            return "second"
        }
        else{
            return "third"
        }
    }

    

  return (
    <section className='cards'>
        <table className='card'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((contact, index) => (
              <tr 
                className={`row-data ${index % 2 === 0 ? "even" : "odd"}`}
                key={contact.id}
                >
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.contact}</td>
                <td>
                 {updates.map((update, index) => (
                   <Link 
                     to="/" 
                     className={`update ${buttonBg(index)}`}
                     key={index}
                   >
                     {update}
                 </Link>
                 ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  )
}

export default ContactCard
