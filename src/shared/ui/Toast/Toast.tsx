import React from "react"
import { S } from "./toast.styles"
import { setError } from "@/entities/reducers/appReducer"
import { connect } from "react-redux"


class Toast extends React.Component<Props, {viewToast: boolean}> {
  timer: NodeJS.Timeout | null = null

  constructor(props: Props) {
    super(props)

    this.state = {
      viewToast: false
    }
  }

  componentDidUpdate(prevProps: { error: string }) {
    if (this.props.error !== "" && this.props.error !== prevProps.error) {
      this.setState({ viewToast: true })

      if (this.timer) clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        this.setState(
          { viewToast: false }
        )
        this.props.setError('')
      }, 5000)
    }
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer)
  }

  render() {
    return (
        <S.Wrapper $view={this.state.viewToast}>
          <S.Toast>{this.props.error}</S.Toast>
        </S.Wrapper>
    )
  }
}

export default connect( null, { setError })(Toast)

type Props = {
  error: string
  setError: (error: string) => void
}
