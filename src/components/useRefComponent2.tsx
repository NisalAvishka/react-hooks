import { useEffect, useRef } from "react"


export const UseRefComponent2 = () => {
    const inputRef = useRef<HTMLInputElement |null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    })

  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Focus on me on load" />
    </div>
  )
}
