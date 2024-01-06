import { IStudent } from "./model/student";

// happy coding
console.log("hello XXX");

let x: number = 99;
const fullName: string = "Nguyễn Văn A";

let tem: any = 2; // Hạn chế dùng
tem = "2";

console.log(x);

// Kiểu dữ liệu do người dùng tạo ra

const student: IStudent = {
  id: 1,
  name: "Nguyễn Văn A",
  score: 9.6,
};

console.log(student);
