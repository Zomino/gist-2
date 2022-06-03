import dotenv from 'dotenv';

dotenv.config();

export default function getValue(name: string, required: boolean = false) {
  const value = process.env[name];

  if (!value && required) throw new Error(`Environment variable missing for ${name}.`);

  return value!;
}
