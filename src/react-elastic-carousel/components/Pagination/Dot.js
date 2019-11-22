import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { cssPrefix } from "../../utils/helpers";

const boxShadow = "0 0 0px 1px #45689a";
const activeBoxShadow = "0 0 0px 1px #45689a";
const hoveredBoxShadow = "0 0 0px 1px #45689a";

const Dot = styled.div`
  transition: all 250ms ease;
  margin: 3px;
  background-color: ${({ active }) => (active ? "#45689a" : "transparent")};
  font-size: 1.3em;
  content: "";
  height: 2px;
  width: 10px;
  box-shadow: ${({ active }) => (active ? activeBoxShadow : boxShadow)};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ active }) =>
      active ? activeBoxShadow : hoveredBoxShadow};
  }
`;

class DotContainer extends React.Component {
  onClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
  };
  render() {
    const { active } = this.props;
    return (
      <Dot
        onClick={this.onClick}
        active={active}
        className={`${cssPrefix("dot")} ${
          active ? cssPrefix("dot_active") : ""
        }`}
      />
    );
  }
}

DotContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default DotContainer;
