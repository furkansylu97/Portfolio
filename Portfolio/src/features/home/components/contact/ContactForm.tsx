import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);

    toast.success("Mesajınız başarıyla gönderildi!");

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-6 md:p-8 border rounded-xl shadow-sm bg-[#101828]"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">Ad Soyad</label>

        <input
          type="text"
          placeholder="Adınızı giriniz"
          {...register("name", {
            required: "Ad soyad zorunludur",
            minLength: {
              value: 3,
              message: "En az 3 karakter olmalı",
            },
          })}
          className="border rounded-lg px-4 py-3 outline-none focus:bg-white bg-cyan-500 text-[#101828]"
        />

        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">Email</label>

        <input
          type="email"
          placeholder="Email adresiniz"
          {...register("email", {
            required: "Email zorunludur",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Geçerli bir email giriniz",
            },
          })}
          className="border rounded-lg px-4 py-3 outline-none focus:bg-white bg-cyan-500 text-[#101828]"
        />

        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white">Mesaj</label>

        <textarea
          rows={5}
          placeholder="Mesajınızı yazınız"
          {...register("message", {
            required: "Mesaj zorunludur",
            minLength: {
              value: 10,
              message: "Mesaj en az 10 karakter olmalı",
            },
          })}
          className="border rounded-lg px-4 py-3 outline-none focus:bg-white bg-cyan-500 text-[#101828] resize-none"
        />

        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 bg-green-400 lg:bg-orange-300 text-[#101828] py-3 rounded-lg font-medium motion-safe:hover:bg-green-400 transition"
      >
        Mesaj Gönder
      </button>
    </form>
  );
};

export default ContactForm;
