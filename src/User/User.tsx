export const User = () => {
  const sum = (a: number, b: number) => {
    return a + b
  }

  console.log(isPalindrome('ada'))

  return (
      <div>
        <p>
          Alex
        </p>
        <button onClick={() => sum(2, 3)}>
          Click
        </button>
      </div>
  )
}