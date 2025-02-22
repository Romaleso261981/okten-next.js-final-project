"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const currentUrl = window.location.href;
    const url = queryString.stringifyUrl(
      {
        url: currentUrl,
        query: {
          q: data.searchTerm
        }
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center justify-end px-7 py-4">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder=""
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 w-80"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
