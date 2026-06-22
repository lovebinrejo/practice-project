function Button({
  text,
  onclick,
  type = 'button',
  className = 'px-4 py-2 rounded'
}) {
  return (
    <button type={type} onClick={onclick} className={`bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 transition ${className}`}>
      {text}
    </button>
  );
}

export default Button;