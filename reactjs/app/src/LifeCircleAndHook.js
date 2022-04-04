import React from 'react'
import { useState } from 'react'


function LifeCircleAndHook() {
	const [count, setCount] = useState(0)
	// * useState
//count: định nghĩa tên của state nó có thể là đơn giá trị hoặc object,.. (là thamg số của useState)
// setCount: định nghĩa tên function dùng cho việc update state (là thamg số của useState)
//useState(0) là initialStateValue: là giá trị ban đầu của state = 0

  return (
    <div>
	    <button onClick={() => setCount(count + 1)}>+</button>
	    <span>{count}</span>
	    <button onClick={() => setCount(count - 1)}>-</button>

    </div>
  )
}
// count là tham số thứ nhất với giá trị ban đầu là 0
// setCount sẽ là hàm function với tham số thứ 2
// mỗi khi click thì giá trị count ban đầu sẽ tăng hoặc giảm
export default LifeCircleAndHook
//Lifecircle: method được gọi trong quá trình web render
// mount : khi gọi DOM api gọi thêm components hiện ra , còn unmount là khi chuyển trang nó bị mất đi
//Didmount: thực hiện 1 lần khi component được khở tạo và găn vào DOM, trong 1 conponents chỉ được gọi 1 lần
//Didupdate: được gọi ngay sau khi render được gọi nhưng không được gọi lần đầu, chỉ didmount được gọi
// WillUnMount: được gọi truowscv khi unmount

//cho phép chúng ta khai báo local state trong Function Component cách mà trước để chỉ dùng cho Class Component.
