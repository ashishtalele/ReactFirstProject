import React from 'react';

const Header = (props) => {
    const message = "ERROR !!!"
    // const header = props.header;
    return (
      <header className={ props.header === "Error" ? "Error-header" : "App-header" }>
        {props.header === "Error" ?
            <h1 className="App-title">
            {message}
            </h1>
          :
            <h1 className="App-title">
            {props.header}
            </h1>
        }

      </header>
    );
  }
export default Header;
