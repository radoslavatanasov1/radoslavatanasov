import { Resend } from 'resend';

const resend = new Resend('re_jkjTF9xV_Bc2kY6RwoPrUD42vx8HmabBQ');

// Test the Resend configuration immediately
(async () => {
    try {
        console.log('Testing Resend configuration...');
        const testResponse = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Test Email',
            html: '<p>This is a test email to verify the Resend configuration.</p>'
        });
        console.log('Test email sent successfully:', testResponse);
    } catch (error) {
        console.error('Failed to send test email:', error);
        console.error('Resend configuration test failed with error:', {
            name: error.name,
            message: error.message,
            code: error.code
        });
    }
})();

export default async function handler(req, res) {
    console.log('API Route hit:', req.method);
    console.log('Request body:', req.body);
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        if (!req.body) {
            console.error('No request body received');
            return res.status(400).json({ success: false, error: 'No request body received' });
        }

        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            console.error('Missing required fields:', { name, email, subject, message });
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        console.log('Attempting to send email with Resend...');
        const response = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['radoslavatanasovoffical1@gmail.com'],  // Sending to both test and real address
            reply_to: email,
            subject: subject,
            html: `
                <h1>Contact Form Submission</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        console.log('Resend API Response:', response);
        return res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error('Email sending error:', error);
        console.error('Full error details:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            code: error.code,
            response: error.response
        });
        return res.status(500).json({ 
            success: false, 
            error: error.message,
            details: {
                name: error.name,
                code: error.code
            }
        });
    }
}
