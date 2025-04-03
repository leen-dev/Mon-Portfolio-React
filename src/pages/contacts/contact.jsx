import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

// Schéma de validation avec Yup
const schema = yup.object({
  name: yup.string().min(3, 'Le nom doit comporter au moins 3 caractères').required('Le nom est requis'),
  email: yup.string().email('L\'email n\'est pas valide').required('L\'email est requis'),
  message: yup.string().min(10, 'Le message doit comporter au moins 10 caractères').required('Le message est requis'),
}).required();

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l\'envoi.');
      }

      // Réinitialisation du formulaire après soumission
      reset();
      alert('Votre message a bien été envoyé.');
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Formulaire de Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name')}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
            {...register('message')}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
