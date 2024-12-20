import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react"
import { S } from "./input.styles"
import { Eye, EyeOff, Search } from "lucide-react"

type Props = {
  type?: "text" | "number" | "password" | "email" | "search" | undefined
  error?: string | undefined
  label?: string | undefined
  iconPadding?: string | undefined
  iconStart?: ReactNode | undefined
  iconEnd?: ReactNode | undefined
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      id,
      iconStart,
      iconEnd,
      iconPadding = "45",
      type = "text",
      error,
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState(type)
    const [iconBefore, setIconBefore] = useState(iconStart)
    const [iconAfter, setIconAfter] = useState(iconEnd)

    useEffect(() => {
      if (inputType === "password") {
        setIconAfter(
          <Eye
            style={{ cursor: "pointer" }}
            color="black"
            onClick={handlerChangeType}
          />,
        )
      }
      if (inputType === "search") {
        setIconBefore(<Search size={20} color="black" />)
      }
    }, [])

    const handlerChangeType = () => {
      setInputType((prevInputType) => {
        const newType = prevInputType === "password" ? "text" : "password"
        setIconAfter(
          newType === "password" ? (
            <Eye
              style={{ cursor: "pointer" }}
              color="black"
              onClick={handlerChangeType}
            />
          ) : (
            <EyeOff
              style={{ cursor: "pointer" }}
              color="black"
              onClick={handlerChangeType}
            />
          ),
        )
        return newType
      })
    }

    return (
      <S.LabelWrap label={label}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <S.InputWrap
          iconStart={iconBefore}
          iconEnd={iconAfter}
          iconPadding={iconPadding}
          error={!!error}
        >
          {iconBefore}
          <input ref={ref} id={label ? id : ""} type={inputType} {...props} />
          {iconAfter}
        </S.InputWrap>
        <span className={"error"}>{error}</span>
      </S.LabelWrap>
    )
  },
)
