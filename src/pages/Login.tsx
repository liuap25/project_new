import React, { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface LoginProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

// Credenciales de prueba
const TEST_CREDENTIALS = {
  email: 'test@example.com',
  password: 'password123'
};

export function Login({ onLogin, onNavigateToRegister }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Simular llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validación básica
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'El correo es requerido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';

    // Validar credenciales
    if (formData.email !== TEST_CREDENTIALS.email || formData.password !== TEST_CREDENTIALS.password) {
      newErrors.email = 'Correo o contraseña inválidos';
      newErrors.password = 'Correo o contraseña inválidos';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    onLogin();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AuthLayout
      title="Bienvenido de nuevo"
      subtitle="Ingresa tus credenciales para acceder a tu cuenta"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="••••••••"
          autoComplete="current-password"
        />
        
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <span className="ml-2 text-sm text-gray-600">Recordarme</span>
          </label>
          <button type="button" className="text-sm text-indigo-600 hover:text-indigo-500">
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <Button type="submit" isLoading={isLoading}>
          Iniciar sesión
        </Button>

        <p className="text-center text-sm text-gray-600 mt-4">
          ¿No tienes una cuenta?{' '}
          <button
            type="button"
            onClick={onNavigateToRegister}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Regístrate
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}