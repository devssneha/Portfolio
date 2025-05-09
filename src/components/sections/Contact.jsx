import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    useEffect(() => {
        // Initialize EmailJS with your user ID
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Verify if environment variables are available
        if (!import.meta.env.VITE_SERVICE_ID || !import.meta.env.VITE_TEMPLATE_ID || !import.meta.env.VITE_PUBLIC_KEY) {
            console.error("EmailJS environment variables are missing!");
            alert("Configuration error. Please contact the site administrator.");
            return;
        }
        
        console.log("Sending email with:", {
            serviceId: import.meta.env.VITE_SERVICE_ID,
            templateId: import.meta.env.VITE_TEMPLATE_ID,
            formData: formData
        });
        
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            console.log("EmailJS success:", result.text);
            alert("Message sent successfully!");
            setFormData({name: "", email: "", message: ""});
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Message not sent, please try again.");
        });
    };
    
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Contact Me
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name} 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email} 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Email..."
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4} 
                            required 
                            value={formData.message} 
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Type your message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Send me a message!
                    </button>
                </form>
            </div>
        </section>
    );
};