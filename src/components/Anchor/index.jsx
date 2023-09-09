const Anchor = (name,href) => {
  return (
    <a className="nav-link fs-6 fw-bold mx-2" href={href}>{name}</a>
  )
}

export default Anchor