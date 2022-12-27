import { UseFormReturn } from 'react-hook-form'
export default function Input({
    form,
    label,
    name,
    placeholder,
    type = 'text'
}: {
    form: UseFormReturn<any>
    label: string
    name: string
    placeholder?: string
    type?: string
}) {
    const {
        register,
        formState: { errors },
    } = form
    return (
        <div className="flex flex-col mb-4">
            <label className="text-[14px] mb-2 text-gray-400 font-semibold">
                {label}
            </label>

            <input
                type={type}
                className="h-12 p-4 border-2 rounded-lg outline-none text-[16px] focus:border-color3"
                {...register(name)}
                placeholder={placeholder}
            />
            {errors[name] && (
                <p className="mt-2 text-[14px] text-red-600">
                    {`${errors[name]?.message}`}
                </p>
            )}
        </div>
    )
}
