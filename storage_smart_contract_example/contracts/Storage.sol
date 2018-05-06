pragma solidity ^0.4.23;

contract Storage {

    uint storedData;

    function set(uint data) public {
        storedData = data;
    }

    function get() public constant returns (uint) {
        return storedData;
    }
}