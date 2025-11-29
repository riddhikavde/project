import "./Contact.css"
export const Contact =()=>{
    return (

        <div class="container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us. We’d love to hear from you!</p>

        <div class="contact-box">
            <form action="" method="POST">
                <div class="input-row">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                </div>

                <input type="text" placeholder="Subject" required/>

                <textarea rows="5" placeholder="Your Message" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>Email: support@example123.com</p>
                <p>Phone: +91 234 567 890</p>
                <p>Address: 123 Main Street, Pune, INDIA</p>
            </div>
        </div>
    </div>

)}
export default Contact;