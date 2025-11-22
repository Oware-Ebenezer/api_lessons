import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ReactHookForm = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit() {
    toast.success("Form submitted!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-gray-900 text-white shadow-md p-10 rounded-lg flex flex-col w-96"
      >
        <label className="font-semibold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className="border border-gray-400 rounded w-full px-4 py-2 mb-2"
        />
        <p className="text-red-500 text-sm">{errors.username?.message}</p>

        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Invalid format",
            },
          })}
          className="border border-gray-400 rounded w-full px-4 py-2 mb-2"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
        <label className="font-semibold" htmlFor="channel">
          Channel
        </label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Channel Required",
            },
          })}
          className="border border-gray-400 rounded w-full px-4 py-2 mb-2"
        />
        <p className="text-red-500 text-sm">{errors.channel?.message}</p>
        <button className="mt-4 bg-amber-500 px-3 py-2 rounded-md hover:bg-amber-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
