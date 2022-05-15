import dotenv from 'dotenv';

dotenv.config();

export default function getValue(name: string, required: boolean = true) {
  const value = process.env[name];

  if (!value && required) throw new Error(`Environment variable missing for ${value}.`);

  return value!;
}
