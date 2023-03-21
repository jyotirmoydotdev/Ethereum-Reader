const _INFURA_ID = [
    "231a1415f18649b385da356985171bc0" ,
    "9aa3d95b3bc440fa88ea12eaa4456161" ,
    "7ba40364192449b78ced71f0be00dd22" ,
    "ae6cab87d0a245d4a753a3c541291050" ,
    "460f40a260564ac4a4f4b3fffb032dad" ,
    "9aa3d95b3bc440fa88ea12eaa4456161" ,
    "901de4ff31434d3d9639952ce106cb9e" ,
    "460f40a260564ac4a4f4b3fffb032dad" ,
    "460f40a260564ac4a4f4b3fffb032dad" ,
    "b14cd69b84584cc39ec753dfaf245d63" ,
    "59b59e23bb7c44d799b5db4a1b83e4ee" ,
    "460f40a260564ac4a4f4b3fffb032dad" ,
    "9aa3d95b3bc440fa88ea12eaa4456161" ,
    "b31b87bd4fb24a51bf5064789a7aed6f" ,
    "d45cd5f5f19b4ff8b6d00265ecb56a6b" ,
    "320147bac521449188ac7347ba389fb5" ,
    "9aa3d95b3bc440fa88ea12eaa4456161" ,
    "6145d532688844c4b6db32574d90e19f" ,
    "e8c7b4b4dbed447ba661c50a96605413" ,
    "9497529ebd9b4ccfaabb477128cc6c22" ,
    "3cb031735f9a46a69f2babab4fae3e0d" ,
];

let x = Math.floor((Math.random() * _INFURA_ID.length) + 1);
const infuraID=_INFURA_ID[x]
module.exports={infuraID};