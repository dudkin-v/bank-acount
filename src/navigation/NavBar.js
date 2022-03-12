import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaWallet, FaChartArea } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

import routes from "../utils/routes";
import colors from "../utils/colors";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  border-right: 2px solid rgba(128, 128, 128, 0.2);

  .nav-heading {
    color: ${colors.rhino};
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .nav-lists-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: inherit;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    li {
      margin-bottom: 20px;
      a {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: ${colors.rhino};
        :hover {
          font-weight: bold;
        }
        svg {
          color: ${colors.rhino};
          font-size: 20px;
          margin-right: 10px;
        }
      }
      .active {
        font-weight: bold;
        }
      }
    }
  }
`;

const NavBar = () => (
  <Nav>
    <Link to={routes.OVERVIEW} className="nav-heading">
      Banking App
    </Link>
    <div className="nav-lists-block">
      <ul className="nav-list">
        <li>
          <NavLink to={routes.OVERVIEW} activeClassName="active">
            <FaHome />
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.CARDS} activeClassName="active">
            <FaWallet />
            Cards
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.PAYMENTS}>
            <BiTransfer />
            Payments
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.MY_STAT} activeClassName="active">
            <FaChartArea />
            My stat
          </NavLink>
        </li>
      </ul>
      <ul className="nav-list">
        <li>
          <NavLink to={routes.ACCOUNT} activeClassName="active">
            <MdAccountCircle />
            Account
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.SETTINGS} activeClassName="active">
            <AiFillSetting />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  </Nav>
);
export default NavBar;
