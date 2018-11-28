import React from 'react';
import axios from 'axios';

const thStyle = {
  padding: '10px',
};
const imgUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnQpWPF094Bj0WS-xjbcdBtHrNFGKQNkyHeFm3McFwikNw82o';
const trStyle = {
  padding: '10px',
  background: 'white',
  verticalAlign: 'middle',
};
const countStyle = {
  background: 'lightseagreen',
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '10px',
  color: 'white',
  width: '50px',
  float: 'right',
  lineHeight: '1.7rem',
};
const url = 'https://twilio-hook.herokuapp.com';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.contactDiv = React.createRef();
    this.state = {
      massages: [],
      accupunctures: [],
      nutritionists: [],
      naturopaths: [],
      chiropractors: [],
      active: 'massages',
      counts: {
        massages: 0,
        accupunctures: 0,
        nutritionists: 0,
        naturopaths: 0,
        chiropractors: 0,
      },
    };
  }
  componentDidMount() {
    this.getContacts('massages', 1);
  }

  handleScroll() {
    const { active } = this.state;
    const contact = this.state[active];
    this.getContacts(active, contact.length);
  }
  getContacts(name, count) {
    if (count === 0) {
      count++;
    }
    let contacts = this.state[name];
    axios
      .get(`${url}/${name}?count=${count}`)
      .then((res) => {
        contacts = contacts.concat(res.data);
        this.setState({ [name]: contacts });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleNameClick(name) {
    this.setState({ active: name });
  }
  render() {
    const { active, counts } = this.state;
    return (
      <section
        style={{
          display: 'flex',
          color: 'darkslategrey',
          fontSize: '15px',
          fontFamily: 'sans-serif',
          width: '100%',
        }}
        ref={this.contactDiv}>
        <div style={{ width: '30%', padding: '1rem' }}>
          <ul>
            <li
              className={active === 'massages' ? 'active' : ''}
              style={{
                cursor: 'pointer',
                marginBottom: '15px',
                color: active === 'massages' ? 'gray' : 'inherit',
              }}>
              <h1>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const { massages } = this.state;
                    this.getContacts('massages', massages.length);
                    this.handleNameClick('massages');
                  }}>
                  <span>Massages</span>
                  <span style={countStyle}>{counts['massages']}</span>
                </a>
              </h1>
            </li>
            <li
              className={active === 'accupunctures' ? 'active' : ''}
              style={{
                cursor: 'pointer',
                clear: 'both',
                marginBottom: '15px',
                color: active === 'accupunctures' ? 'gray' : 'inherit',
              }}>
              <h1>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const { accupunctures } = this.state;
                    this.getContacts('accupunctures', accupunctures.length);
                    this.handleNameClick('accupunctures');
                  }}>
                  <span>Accupunctures</span>
                  <span style={countStyle}>{counts['accupunctures']}</span>
                </a>
              </h1>
            </li>
            <li
              className={active === 'naturopaths' ? 'active' : ''}
              style={{
                cursor: 'pointer',
                clear: 'both',
                marginBottom: '15px',
                color: active === 'naturopaths' ? 'gray' : 'inherit',
              }}>
              <h1>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const { naturopaths } = this.state;
                    this.getContacts('naturopaths', naturopaths.length);
                    this.handleNameClick('naturopaths');
                  }}>
                  <span>Naturopaths</span>
                  <span style={countStyle}>{counts['naturopaths']}</span>
                </a>
              </h1>
            </li>
            <li
              className={active === 'chiropractors' ? 'active' : ''}
              style={{
                cursor: 'pointer',
                clear: 'both',
                marginBottom: '15px',
                color: active === 'chiropractors' ? 'gray' : 'inherit',
              }}>
              <h1>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const { chiropractors } = this.state;
                    this.getContacts('chiropractors', chiropractors.length);
                    this.handleNameClick('chiropractors');
                  }}>
                  <span>Chiropractors</span>
                  <span style={countStyle}>{counts['chiropractors']}</span>
                </a>
              </h1>
            </li>
            <li
              className={active === 'nutritionists' ? 'active' : ''}
              style={{
                cursor: 'pointer',
                clear: 'both',
                marginBottom: '15px',
                color: active === 'nutritionists' ? 'gray' : 'inherit',
              }}>
              <h1>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const { nutritionists } = this.state;
                    this.getContacts('nutritionists', nutritionists.length);
                    this.handleNameClick('nutritionists');
                  }}>
                  <span>Nutritionists</span>
                  <span style={countStyle}>{counts['nutritionists']}</span>
                </a>
              </h1>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '70%',
            padding: '1rem',
            borderLeft: 'solid #b9b2b2 3px',
            background: '#f3f1f1',
            overflowY: 'auto',
          }}
          onScroll={(e) => {
            console.dir(this.contactDiv.current);
          }}>
          <table style={{ width: '100%', textAlign: 'left' }}>
            <tr>
              <th style={thStyle}>NAME</th>
              <th style={thStyle}>FIRST NUMBER</th>
              <th style={thStyle}>SECOND NUMBER</th>
            </tr>
            {this.state[active].map((user, ind) => {
              return (
                <React.Fragment key={ind}>
                  <tr>
                    <td style={trStyle}>{user.name}</td>
                    <td style={trStyle}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>{user.first_number}</span>
                        {user &&
                          user.first_number && (
                            <img
                              src={imgUrl}
                              style={{
                                cursor: 'pointer',
                                marginLeft: '20px',
                                objectFit: 'contain',
                              }}
                              width="30px"
                              alt=""
                            />
                          )}
                      </div>
                    </td>
                    <td style={trStyle}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>{user.second_number}</span>
                        {user &&
                          user.second_number && (
                            <img
                              src={imgUrl}
                              style={{
                                cursor: 'pointer',
                                marginLeft: '20px',
                                objectFit: 'contain',
                              }}
                              width="30px"
                              alt=""
                            />
                          )}
                      </div>
                    </td>
                  </tr>
                  <tr style={{ height: '5px' }} />
                </React.Fragment>
              );
            })}
          </table>
        </div>
      </section>
    );
  }
}
export default Contact;
