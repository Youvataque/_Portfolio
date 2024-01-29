import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../css/component.css'
import { Gap } from './Gap';
export const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorText, setErrorText] = useState('');

    const updateError = () => {
        setErrorText('Sending email...');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_xmhhcmn';
        const templateId = 'template_luuevzg';
        const publicKeyId = '_1v2qz3kR4QXK1WUX';

        const templateParams = {
            from_name : name,
            from_email : email,
            to_name : 'SEGUIN Yannis',
            message : message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKeyId)
            .then((result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setMessage('');
                setErrorText('Email sended !');
                setTimeout(
                    function(){
                        setErrorText(''); 
                    },
                    2000
                );
            }, (error) => {
                console.log(error.text);
                setErrorText('Error during sending !');
                setTimeout(
                    function(){
                        setErrorText(''); 
                    },
                    2000
                );
            });
    };

  return (
    <form onSubmit={sendEmail} className='SendEmailBody'>
        <h2 className='SendEmailFormTitle'>Send me a Message</h2>
        <div className='Divider'/>
        <div className='SendEmailRow'> 
            <div className='SendEmailPair'>
                <label className='SendEmailTitle'>Name</label>
                <Gap size={10}/>
                <input className='SendEmailInput' type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='SendSpace'/>
            <div className='SendEmailPair'>
                <label className='SendEmailTitle'>Email</label>
                <Gap size={10}/>
                <input className='SendEmailInput' type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
        <div className='SendEmailPairA'> 
            <label className='SendEmailTitleA'>Message</label>
            <Gap size={10}/>
            <textarea className='SendEmailTextArea' name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <div className='SendEmailEnd'>
            <button className='SendEmailButton' type="submit" onClick={updateError}>Send</button>
            <p className='ErrorText'>{errorText}</p>
        </div>
    </form>
  );
};