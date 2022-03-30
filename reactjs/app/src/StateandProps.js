// State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components.
// state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.


// khởi tạo
// this.state = {name: "Nguyen si hien"}
// console.log(this.state);
// Gọi state: this.state.key
// Thay đổi state: this.setState({key: value, key1: value1})
// Khi setState được gọi => hàm render được gọi
import React from "react";

class Example extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    count: 0
	  };
	}
      
	render() {
	  return (
	    <div>
	      <p>You clicked {this.state.count} times</p>
	      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
		Click me
	      </button>
	    </div>
	  );
	}
      }

export default Example
//props: là obj mô tả element mình tạo ra
// -React element: sử dụng như với atribute của thẻ HTML
// 2 props class, for => className, htmlFor
//- React components: sử dụng như đối số Components, tự do đặt tên
// Props "key" là key đặc biệt => có thể là bất cứ kiểu dữ liệu gì