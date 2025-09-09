export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="my-4 rounded-md border border-red-200 bg-red-50 p-4 text-red-700">
      {message}
    </div>
  );
}
