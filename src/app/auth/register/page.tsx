
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Register</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
