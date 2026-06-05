export const emailServiceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_3wu4c05';
export const emailTemplateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_bqkydgp';
export const emailPublicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'nxjxNLKAsXURgUex';

export const isEmailJsConfigured =
  Boolean(emailServiceId) &&
  Boolean(emailTemplateId) &&
  Boolean(emailPublicKey);
