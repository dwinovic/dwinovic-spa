export default function Button({ children, className, variant }) {
  const variants = {
    'outline-yellow': 'border-2 border-yellow-400 text-yellow-400',
    yellow: 'bg-yellow-400',
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`font-semibold text-lg rounded-full py-2 px-6 inline-block ${pickedVariant} ${className}`}
    >
      {children}
    </a>
  );
}
