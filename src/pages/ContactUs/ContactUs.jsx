import ContactUsAnimation from "../../components/ContactUsAnimation/ContactUsAnimation"
import Input from '../../components/Input/Input'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-us-container'>
            <ContactUsAnimation />

            <form>
		        <h1>Talk to Us</h1>

                <Input placeholder="Name" />
                <Input type="email" placeholder="E-mail" />

                <textarea rows="7" placeholder="Message"></textarea>
            

                <button type="submit" class="btn btn-primary" tabIndex="-1">Send message</button>

	        </form>
        </div>
    )
}

export default ContactUs