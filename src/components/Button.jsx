export const Button = ({ text,handleClick, isDisabled = false, w = 'w-56',bg, floatRight = '', m = 'm-auto',mt }) => {
  return (
    <button
      type='submit'
      disabled={isDisabled}
      className={`button ${w} ${floatRight} ${m} ${mt} ${bg}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}