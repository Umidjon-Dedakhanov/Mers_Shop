import React from "react";
import style from './Switch.module.css'

export class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { checked } = this.state;

    return (
      <div className="container">
        <div className={checked ? style.layer + ' ' + style.public : style.layer}></div>
        <label className={checked ? style.switch + ' ' +  style.checked : style.switch}>
          <input
            type="checkbox"
            checked={checked}
            onChange={this.handleChange}
            hidden
          />
          <span className={checked ? "" : style.active}>PRIVATE</span>
          <span className={checked ? style.active : ""}>PUBLIC</span>
        </label>
      </div>
    );
  }
}
