

const withAuth = (Component) => {
  return props => {
    return <Component {...props}/>
  }
}

export default withAuth;
