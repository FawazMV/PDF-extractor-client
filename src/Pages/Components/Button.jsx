const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`px-5 py-2 mx-1 font-medium  rounded transition duration-200 border ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
