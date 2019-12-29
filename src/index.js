import { combineReducers } from "redux";

import videos from "./videos";

import navBarLink from "./nav_bar";

import headerSearch from "./header";

export default combineReducers({ videos, navBarLink, headerSearch });
