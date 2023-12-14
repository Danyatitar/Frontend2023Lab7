import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>
          Cherkasy Gymnasium №9; Cherkasy Physics and Mathematics Lyceum;
          <br />
          National Technical University of Ukraine "Ihor Sikorsky Kyiv
          Polytechnic Institute"
        </p>
        <h3>Hobbies</h3>
        <ul>
          <li>Football</li>
          <li>Coding</li>
          <li>Watching serials</li>
        </ul>
        <h3>Favourite books</h3>
        <ol>
          <li>"Не озирайся і мовчи" Makc Kidryk</li>
          <li>"The Lord of the Rings" J.R.R. Tolkien</li>
          <li>"Da Vinci code" Dan Brown</li>
        </ol>
        <p>
          Львів — це місто, де час сповільнює свій біг, і ви потрапляєте в
          атмосферу спокійного співіснування старовинної архітектури та сучасних
          кав'ярень.
          <br />
          Вулички вкриті кам'яними бруківками, а будинки із витонченими фасадами
          переповнені історією. <br />
          Місцеві жителі та гостинні кав'ярні завжди готові привітати вас на
          чашку ароматної кави та покажуть вам, як мало для щастя потрібно:
          просто насолоджуватися моментом.
        </p>
      </div>
    );
  }
}

export default Content;
