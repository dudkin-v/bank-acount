import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  min-width: 225px;
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

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Link to={routes.OVERVIEW} className="nav-heading">
        Banking App
      </Link>
      <div className="nav-lists-block">
        <ul className="nav-list">
          <li>
            <NavLink to={routes.OVERVIEW} activeclassname="active">
              <FaHome />
              {t("nav.links.overview")}
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.CARDS} activeclassname="active">
              <FaWallet />
              {t("nav.links.cards")}
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.PAYMENTS}>
              <BiTransfer />
              {t("nav.links.payments")}
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.MY_STAT} activeclassname="active">
              <FaChartArea />
              {t("nav.links.my-stat")}
            </NavLink>
          </li>
        </ul>
        <ul className="nav-list">
          <li>
            <NavLink to={routes.ACCOUNT} activeclassname="active">
              <MdAccountCircle />
              {t("nav.links.account")}
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.SETTINGS} activeclassname="active">
              <AiFillSetting />
              {t("nav.links.settings")}
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};
export default NavBar;
