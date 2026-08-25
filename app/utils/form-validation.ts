const fullNamePattern = /^[A-Za-z]+(?:['-][A-Za-z]+)?\s+[A-Za-z]+(?:['-][A-Za-z]+)?$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;

export const isValidZipcode = (value: string) => /^\d{5}$/.test(value.trim());

export const sanitizeZipInput = (value: string) => value.replace(/\D/g, '').slice(0, 5);

export const normalizeFullName = (value: string) => value.trim().replace(/\s+/g, ' ');

export const isValidFullName = (value: string) => fullNamePattern.test(normalizeFullName(value));

export const isValidEmail = (value: string) => emailPattern.test(value.trim());

export const formatUsPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export const isValidUsPhone = (value: string) => phonePattern.test(value);

export const isNonEmpty = (value: string) => value.trim().length > 0;
