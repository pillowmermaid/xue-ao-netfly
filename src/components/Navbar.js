import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let navScrollClass = ''
    if (window.scrollY > 0) {
      navScrollClass = 'after-scroll'
    }
    this.setState({ navScrollClass})
  }

  render() {
    return (
      <nav
        className={`navbar is-fixed-top ${this.state.navScrollClass}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={`navbar-brand ${this.state.navScrollClass}`}>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <Link className={`navbar-item ${this.state.navScrollClass}`} activeClassName="is-active" to="/">
              Portfolio
            </Link>
            <Link className={`navbar-item ${this.state.navScrollClass}`} activeClassName="is-active" to="/about">
              About Me
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
