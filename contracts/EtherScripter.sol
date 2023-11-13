pragma solidity >=0.4.22 <0.9.0;

contract EtherScripter {
    int256 public count;

    constructor() {
        count = 0;
    }

    function addCount() public returns (int256 updatedCount) {
        count += 1;
        return count;  // Return the updated count
    }
}
