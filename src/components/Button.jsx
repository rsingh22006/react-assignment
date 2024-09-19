export const Button = ({
  text, handleClick, type = 'button', isDisabled = false, w = 'w-56',isGrid, bg, floatRight, m = 'm-auto', mt
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`button ${w} ${floatRight} ${m} ${mt} ${isGrid} ${bg}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}