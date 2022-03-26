import React, {Component} from 'react'
// import {useState} from 'react'

//component giúp chia nhỏ giao diện để dễ dàng quản lý và tái sử dụng
// Các component thực hiện công việc giống như các functions trong JavaScript nhưng chúng độc lập và nhiệm vụ chính là trả về HTML thông qua hàm render
// Có 2 loại component là Function Component và Class Component.

// Để tạo một class component, ta tạo một class và extends React.Component, hàm render chính là html và component trả về
// Create a ES6 class component
export class HelloC extends Component {
  render() {
    return (
      <div>
          <h1>classComponent</h1>! 
      </div>
    )
  }
}
// Syntax
// khi viết classComponent luôn luôn phải extends React.Component
// classComponent nhận props trong hàm khởi tạo nếu cần 
// dùng method render() để trả về React Element
// React cung cấp đầy đủ các chức năng của một component như state, props, life-cycle

//2: VD: Create Function Components
export const Hello = (props) => {
  //Props in function component
  // là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element.
// Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components
  return (
    <div>
        <h2>Hello {props.name}</h2>
    </div>
  )
}
// Syntax
//cách viết này ta sẽ sử dụng các hàm JS và return về các element viết bằng JSX trong return())
//tất cả các element khi return đều phải đặt trong một thẻ bao ngoài tổng thể ví dụ như thẻ div
//nếu trong trong file mà có nhiều hơn 1 hàm thì trước khi viết hàm ta cần export
//nếu chỉ có một hàm duy nhất thì cuối cùng cần phải export default <tên hàm>

