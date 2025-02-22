import React from "react";

export default function Loader({ message }: { message?: string }) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <h1 className="text-5xl text-orange-400">Loading...</h1>
      <p>
        {message}
      </p>
    </div>
  );
}
