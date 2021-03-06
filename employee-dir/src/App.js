import React from "react";
import Container from "./components/Container";

// removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  // this.setState({ friends });
// };

// Map over this.state.friends and render a FriendCard component for each friend object
// render() {
//   return (
//     <Wrapper>
//       <Title>Friends List</Title>
//       {this.state.friends.map(friend => (
//         <FriendCard
//           removeFriend={this.removeFriend}
//           id={friend.id}
//           key={friend.id}
//           name={friend.name}
//           image={friend.image}
//           occupation={friend.occupation}
//           location={friend.location}
//         />
//       ))}
//     </Wrapper>
//   );
// }

function App () {
  return <Container />
}

export default App;