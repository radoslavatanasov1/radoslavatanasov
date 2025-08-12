import React, { useState } from 'react';
import { FaRegAddressBook, FaRegUser, FaRegEnvelope, FaRegMap } from "react-icons/fa";
import './contact.css';
import shapeOne from '../../assets/shape-1.png';

const Contact = () => {
    const [form, setForm] = useState({name: '', email: '', subject: '', message: ''});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Attempting to send email with form data:', form);
        
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server response:', response.status, errorText);
                throw new Error(`Server error: ${response.status} - ${errorText || 'No error message'}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            
            if (data.success) {
                setSuccessMessage('Your message has been sent successfully!');
                setForm({name: '', email: '', subject: '', message: ''});
            } else {
                throw new Error(data.error || 'Failed to send email');
            }
        } catch (error) {
            console.error('Detailed error sending email:', error);
            console.error('Error stack:', error.stack);
            console.error('Full error object:', JSON.stringify(error, null, 2));
            setSuccessMessage(`Error: ${error.message || 'Something went wrong'}`);
            // Log the form data for debugging
            console.log('Form data at time of error:', form);
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Launch Your Idea!</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">Location</h3>
                        <p className="contact__card-data">Bulgaria</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">Freelance</h3>
                        <p className="contact__card-data">Available To Work</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">contact@devdone.io</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Full Name <b>*</b></label>
                            <input type="text" name='name' value={form.name}
                                onChange={handleChange}
                                className="contact__form-input" required />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Email Address <b>*</b></label>
                            <input type="email" name='email' value={form.email}
                                onChange={handleChange} className="contact__form-input" required />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Subject <b>*</b></label>
                        <input type="text" name='subject' value={form.subject}
                            onChange={handleChange} className="contact__form-input" required />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Your Message<b>*</b></label>
                        <textarea className='contact__form-input' name='message' value={form.message}
                            onChange={handleChange} required></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type='submit' className='btn text-cs'>Send Message</button>
                    </div>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Contact Me</span>
            </div>
        </section>
    );
}

export default Contact;
