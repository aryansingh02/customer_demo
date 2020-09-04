// @flow
import queryString from "query-string";
import React from "react";
import {Cookies} from "react-cookie";
import {Link} from "react-router-dom";
import type {UserInfo} from "../model/dataModel";

class SplashScreen extends React.Component<any, any> {
  timer: TimeoutID;

  state = {
    showSplashScreen: true,
  };

  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState({showSplashScreen: false}),
      2000
    );
    const values = queryString.parse(this.props.location.search);
    let cookies = new Cookies();

    let userInfo: UserInfo = cookies.get("user_info");
    if (userInfo === undefined) {
      userInfo = {};
      userInfo.orders = [];
    }
    if (values["pn"]) {
      userInfo.phoneNumber = values["pn"];
    }
    cookies.set("user_info", userInfo);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="splashScreenContainer">
        {this.state.showSplashScreen ? (
          " "
        ) : (
          <div className="homeScreenMenu">
            <table className="homeScreenTable">
              <tbody>
                <tr className="border-bottom">
                  <td>DISCOVER</td>
                </tr>
                <tr className="border-bottom">
                  <td>SCHEDULE</td>
                </tr>
                <tr className="border-bottom">
                  <td>ARTISTS</td>
                </tr>
                <tr className="border-bottom">
                  <td>MAPS</td>
                </tr>
                <tr className="border-bottom">
                  <td>
                    <Link to={"/event"} className="mainMenuEventLink">
                      EAT, DRINK &amp; EXPLORE
                    </Link>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td>TUNES FOR YOU MUSIC RECOMMENDER</td>
                </tr>
                <tr className="border-bottom">
                  <td>BOTTLEBUZZ</td>
                </tr>
                <tr className="border-bottom">
                  <td>INFO</td>
                </tr>
                <tr className="border-bottom">
                  <td>BUY TICKETS</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default SplashScreen;
