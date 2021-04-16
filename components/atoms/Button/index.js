export default function Button({ children, className }) {
  return (
    <a
      className={`border-2 border-yellow-400 text-yellow-400 font-semibold text-lg rounded-full py-1 px-3 inline-block ${className}`}
    >
      {children}
    </a>
  );
}
