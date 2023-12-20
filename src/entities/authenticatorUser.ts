export interface authenticatorUserProps {
  name: string
  login: string
  password: string
}

export class AuthenticatorUser {
  private props: authenticatorUserProps

  get name() {
    return this.props.name
  }

  get login() {
    return this.props.login
  }

  get password() {
    return this.props.password
  }

  constructor(props: authenticatorUserProps) {
    this.props = props
  }

}