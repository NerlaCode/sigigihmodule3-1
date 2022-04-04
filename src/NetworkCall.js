import { Component } from "react";

class Sample extends Component {
  state = { users: [] };

  getUsers = async () => {
    const users = await fetch(
      `https://jsonplaceholder.typicode.com/users?`
    ).then((response) => response.json());
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        {users.length > 0 && (
          <>
            <div>User list</div>
            <ul>
              {users.map((user, index) => (
                <li key={index}>
                  {user.name} {user.email}
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={this.getUsers}>Get users</button>
      </>
    );
  }
}

export { Sample };
