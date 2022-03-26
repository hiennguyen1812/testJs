//1: DOM và virtualDOM
// DOM là viết tắt của Document Object Model
//Khi trình duyệt tải một trang web , trình duyệt sẽ nhận được chuỗi HTML dựa trên tiêu chuẩn W3C nó sẽ dựng được mô hình DOM(dạng cây)
// DOM có 3 thành phần
//+ Element vd: các thẻ h, html, body, img...
//+ Attribute vd: các thuộc tinh của các thẻ src, id, class ...
//+ Text vd: các đoạn văn bản hiển thị
// Dựa vào DOM , sử dụng Javascript có thể truy cập, thêm, lấy giá trị, xoá và sửa đổi tất cả các phần tử trên trang web(Element, Attribute, Text)


//2: virtualDOM

//Do độ lớn của các dự án việc thao tác với DOM sẽ trở lên rất khó khăn
//Virtual DOM sinh ra để giải quyết vấn đề trên, Nó được xây dựng như một lớp nằm trên DOM, hệ thống các sự kiện sẽ thao tác với Virtual DOM thay vì tác động trực tiếp trên DOM
// DOM có thể xuất hiện trong các thẻ div, p... việc getElement toàn bộ sẽ rất mất thời gian
// VirtualDOM được react sử dụng và cung cấp và khi sử dụng chỉ cần react.div, react.p... mà không đụng tới DOM hay DOM API
// VirtualDOM sử dụng các thuật toán để kiểm tra các sự thay đổi và re-render lại các phần bị thay đổi thôi , không cần render lai; toàn bộ DOM




//Jsx: Javascrip XML
//XML: HTml thẻ mở và đóng
// JSX sinh ra giúp người code có thể code html ngay trong file JSX
// Syntax
{/* <JSXElementName JSXAttributes/> ; <JSXElementName JSXAttributesopt></JSXElementName> */}
// const demo = <p>This is JSX<p/>
// Muốn có JSX cần JS và BaBel
// thư viện babel chuyên dùng để phân tích cú pháp và chuyển đổi cú pháp
// const demo = "Truyen gia tri"
// const demo1 = <h1 style={{color:"red"}}>{demo}</h1> 

// {demo} dùng để nhúng giá trị thuộc tính
// style={{}} có 2 ngoặc vì ngoặc 1 dùng để truyền giá trị, ngoặc 2 để truyển vào obj

