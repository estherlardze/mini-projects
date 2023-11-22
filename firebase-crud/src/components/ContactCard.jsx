import { contacts } from '.'
import { Link } from 'react-router-dom'

const ContactCard = () => {

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
            {contacts.map((contact, index) => (
              <tr 
                className={`row-data ${index % 2 === 0 ? "even" : "odd"}`}
                key={contact.id}
                >
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                 {contact.updates.map((update, index) => (
                   <Link 
                     to="/" 
                     className={`update ${buttonBg(index)}`}
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
