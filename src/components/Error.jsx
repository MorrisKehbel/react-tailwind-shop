export const Error = ({ error }) => {
  return (
    <div className="flex h-dvh bg-stone-100 items-center justify-center">
      <p className="p-4 text-center text-red-500">
        Something went wrong. {error}
      </p>
    </div>
  );
};
