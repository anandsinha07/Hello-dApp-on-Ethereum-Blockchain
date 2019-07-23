pragma solidity ^0.5.0;


contract HelloContract {
  //constructor() public {
  //} 
  string message = "Congratulations, you made it. Hello World!";
 
  function GetMessage() public view returns(string memory) {
    return message;
  }
  
  
}
