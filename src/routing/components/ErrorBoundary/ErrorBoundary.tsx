import { Component, PropsWithChildren } from "react"

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren, IErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary