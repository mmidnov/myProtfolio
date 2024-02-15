import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import './ContactMe.css'
import email from '../../assets/email.png'
import github from '../../assets/github.png'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
  return (
    <section className='contact-container' id='me'>
        <h5>Связаться со мной</h5>
        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                  iconUrl={email}
                  text="mmidinov13@gmail.com"  
                />
                <ContactInfoCard
                  iconUrl={github}
                  text="https://github.com/mmidnov"  
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm  />
            </div>

        </div>
    </section>
  )
}

export default ContactMe