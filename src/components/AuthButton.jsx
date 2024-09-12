export const AuthButton = ({ text, isDisabled = false, w = 'w-56', floatRight = '', m = 'm-auto' }) => {
  return (
    <button
      type='submit'
      disabled={isDisabled}
      className={`authButton ${w} ${floatRight} ${m}`}
    >
      {text}
    </button>
  )
}