// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GNaira {
    string public name = "G-Naira";
    string public symbol = "gNGN";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => bool) public isBlacklisted;

    address public governor;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);
    event Blacklisted(address indexed account);
    event RemovedFromBlacklist(address indexed account);

    modifier onlyGovernor() {
        require(msg.sender == governor, "Caller is not the governor");
        _;
    }

    modifier notBlacklisted(address account) {
        require(!isBlacklisted[account], "Account is blacklisted");
        _;
    }

    constructor() {
        governor = msg.sender;
    }

    function transfer(address to, uint256 value) public notBlacklisted(msg.sender) notBlacklisted(to) returns (bool) {
        require(to != address(0), "Transfer to the zero address");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) public returns (bool) {
        require(spender != address(0), "Approve to the zero address");

        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) public notBlacklisted(from) notBlacklisted(to) returns (bool) {
        require(to != address(0), "Transfer to the zero address");
        require(balanceOf[from] >= value, "Insufficient balance");
        require(allowance[from][msg.sender] >= value, "Transfer amount exceeds allowance");

        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(from, to, value);
        return true;
    }

    function mint(address to, uint256 value) public onlyGovernor {
        require(to != address(0), "Mint to the zero address");

        totalSupply += value;
        balanceOf[to] += value;
        emit Mint(to, value);
        emit Transfer(address(0), to, value);
    }

    function burn(address from, uint256 value) public onlyGovernor {
        require(from != address(0), "Burn from the zero address");
        require(balanceOf[from] >= value, "Burn amount exceeds balance");

        balanceOf[from] -= value;
        totalSupply -= value;
        emit Burn(from, value);
        emit Transfer(from, address(0), value);
    }

    function blacklist(address account) public onlyGovernor {
        require(!isBlacklisted[account], "Account already blacklisted");

        isBlacklisted[account] = true;
        emit Blacklisted(account);
    }

    function removeFromBlacklist(address account) public onlyGovernor {
        require(isBlacklisted[account], "Account not blacklisted");

        isBlacklisted[account] = false;
        emit RemovedFromBlacklist(account);
    }
}