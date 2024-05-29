import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  //Logica de envio
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log("🚀 ~ LoginPage ~ data:", data);
    if (data) {
      navigate("/movie");
    }
  };

  return (
    <>
      <div className="bg-white h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/Mistery-Movie-logo.svg"
            alt="Mistery Movie logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
            Inicia con tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-800"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="block bg-white w-full rounded-md border-0 py-1.5 px-4 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--redPrimary] sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && (
                  <span className="text-sm text-orange-600 text center">
                    Correo invalido, es obligatorio
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-800"
                >
                  Constraseña
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[--redPrimary] hover:text-gray-900"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block bg-white w-full rounded-md border-0 py-1.5 px-4 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[--redPrimary] sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "Contraseña es obligatoria",
                    maxLength: 10,
                  })}
                />
                {errors.password && (
                  <span className="text-sm text-orange-600 text center">
                    Contraseña incorrecta, es obligatoria
                  </span>
                )}
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[--redPrimary] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--redPrimary]"
              >
                Inicia sesión
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600">
            No tienes una cuenta?
            <Link
              to="/register"
              className="font-semibold leading-6 text-[--redPrimary] hover:text-gray-900"
            >
              Hazte miembro
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
