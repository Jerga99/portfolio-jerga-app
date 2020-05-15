import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class PortButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  // TODO: Pass on item ID, don't use INDEX
  renderMenu(items) {
    return (
      <DropdownMenu>
        {
          items.map((item) => (
              <DropdownItem key={item.key} {...item.handlers}>{item.text}</DropdownItem>
            )
          )
        }
      </DropdownMenu>
    )
  }

  render() {
    const { items } = this.props;

    return (
      <ButtonDropdown className="port-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret size="sm">
        </DropdownToggle>
        {this.renderMenu(items)}
      </ButtonDropdown>
    );
  }
}
