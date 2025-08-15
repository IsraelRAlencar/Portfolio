'use server'

import { Resend } from 'resend';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    phone: string;
    message: string;
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const { firstName, lastName, email, phone, subject, message } = formData;

    const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, ${firstName} ${lastName}! Recebi sua solicitação de contato para desenvolvimento referente a ${subject}.`)}`;

    try {
        await resend.emails.send({
            from: 'israelalencar@gecontrolsistemas.com.br',
            to: ['israelalencardev@gmail.com'],
            subject: `Solicitação de Contato Israel Alencar Dev - ${subject}`,
            replyTo: email,
            html: `
                <h1>Solicitação de Contato para Israel Alencar Dev</h1>
                <p>Um novo lead preencheu o formulário no site de portifólio.</p>
                <hr>
                <h2>Dados do Contato:</h2>
                <ul>
                    <li><strong>Nome:</strong> ${firstName} ${lastName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Subject:</strong> ${subject}</li>
                    <li><strong>Telefone/WhatsApp:</strong> ${phone}</li>
                </ul>
                <h2>Mensagem:</h2>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>
                    <a href="${whatsappLink}" style="background-color: #25D366; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">
                        Iniciar conversa no WhatsApp
                    </a>
                </p>
            `
        });
        return { success: true, message: 'E-mail enviado com sucesso!' };
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, message: 'Falha ao enviar o e-mail.' };
    }
}