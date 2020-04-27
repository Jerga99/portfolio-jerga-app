
import React from 'react';
import Link from 'next/link';

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p className="customClass">I am styled P element</p>
        <p className="customClassFromFile">I am styled P element</p>
        <Link href="/">
          <a style={{'fontSize': '20px'}}> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/portfolios">
          <a> Portfolios </a>
        </Link>
        <Link href="/blogs">
          <a> Blogs </a>
        </Link>
        <Link href="/cv">
          <a> Cv </a>
        </Link>
        <style jsx>
          {`
            .customClass {
              color: red;
            }

          `}
        </style>
      </React.Fragment>
    )
  }
}

export default Header;
