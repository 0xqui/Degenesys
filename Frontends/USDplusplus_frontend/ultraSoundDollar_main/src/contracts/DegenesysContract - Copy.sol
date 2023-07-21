// SPDX-License-Identifier: MIT



//     _                        
//    / | _  _  _  _  _   _    _
//   /_.'/_'/_//_'/ //_'_\/_/_\ 
//          _/            _/    
//                                                  


pragma solidity >=0.8.0 <0.9.0;

import './ERC721r.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract ProjectTestNFT is ERC721r, Ownable, ReentrancyGuard {

  using Strings for uint256;

  string public uriPrefix = 'ipfs://dhadjkha/';
  string public uriSuffix = '.json';
  string public hiddenMetadataUri;

  uint256 public maxPublicMintAmountPerTx = 5; 
  uint256 public maxTeamMintAmountPerWallet = 5; 
  uint256 public maxWhitelistMintAmountPerWallet = 5;

  uint256 public publicMintCost = 0.001 ether;
  uint256 public teamMintCost = 0.001 ether;
  uint256 public whitelistMintCost = 0.001 ether;

  bytes32 public merkleRoot1;
  bytes32 public merkleRoot2;
  bool public paused = true;
  bool public teamMintEnabled = true;
  bool public whitelistMintEnabled = true;
  bool public revealed = false;

  constructor(
      string memory name_, 
      string memory symbol_,
      string memory _hiddenMetadataUri
      
  ) ERC721r(name_, symbol_, 20)  {
    hiddenMetadataUri = _hiddenMetadataUri;
    ownerClaimed()
    ;
  }

  modifier mintCompliance(uint256 _mintAmount) {
    require(totalSupply() + _mintAmount <= _maxSupply, 'Max supply exceeded!');
    _;
  }

  function teamMint(uint256 _mintAmount, bytes32[] calldata _merkleProof) public payable mintCompliance(_mintAmount) {
    require(teamMintEnabled, 'The team sale is not enabled!');
    require(balanceOf(_msgSender()) + _mintAmount <= maxTeamMintAmountPerWallet, 'Max limit per wallet!');
    bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
    require(MerkleProof.verify(_merkleProof, merkleRoot1, leaf), 'Invalid proof for team member!');

    _mintRandom(_msgSender(), _mintAmount);
  }

  function whitelistMint(uint256 _mintAmount, bytes32[] calldata _merkleProof) public payable mintCompliance(_mintAmount) nonReentrant {
    require(whitelistMintEnabled, 'The whitelist is not enabled!');
    require(balanceOf(_msgSender()) + _mintAmount <= maxWhitelistMintAmountPerWallet, 'Max limit per wallet!');
    require(msg.value >= whitelistMintCost * _mintAmount, 'Insufficient funds for Whitelist!');
    bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
    require(MerkleProof.verify(_merkleProof, merkleRoot2, leaf), 'Invalid proof for whitelist!');

    _mintRandom(_msgSender(), _mintAmount);
  }



  function publicMint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) {
    require(!paused, 'The mint paused!');
    require(msg.value >= publicMintCost * _mintAmount, 'Insufficient funds!');
    require(_mintAmount <= maxPublicMintAmountPerTx, 'Max limited per Transaction!');
    _mintRandom(_msgSender(), _mintAmount);
  }


  function _startTokenId() internal view virtual returns (uint256) {
    return 0;
  }

  function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
    require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

    if (revealed == false) {
      return hiddenMetadataUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), uriSuffix))
        : '';
  }

// only owners
  function setRevealed(bool _state) public onlyOwner {
    revealed = _state;
  }

  function setCost(uint256 _cost) public onlyOwner {
    publicMintCost = _cost;
  }

  function setMaxPublicMintAmountPerTx(uint256 _maxPublicMintAmountPerTx) public onlyOwner {
    maxPublicMintAmountPerTx = _maxPublicMintAmountPerTx;
  }

  function setMaxTeamMintAmountPerWallet(uint256 _maxTeamMintAmountPerWallet) public onlyOwner {
    maxTeamMintAmountPerWallet = _maxTeamMintAmountPerWallet;
  }

  function setMaxWhitelistMintAmountPerWallet(uint256 _maxWhitelistMintAmountPerWallet) public onlyOwner {
    maxWhitelistMintAmountPerWallet = _maxWhitelistMintAmountPerWallet;
  }

  function setHiddenMetadataUri(string memory _hiddenMetadataUri) public onlyOwner {
    hiddenMetadataUri = _hiddenMetadataUri;
  }

  function setUriPrefix(string memory _uriPrefix) public onlyOwner {
    uriPrefix = _uriPrefix;
  }

  function setUriSuffix(string memory _uriSuffix) public onlyOwner {
    uriSuffix = _uriSuffix;
  }

  function setPaused(bool _state) public onlyOwner {
    paused = _state;
  }

  function setMerkleRoot1(bytes32 _merkleRoot) public onlyOwner {
    merkleRoot1 = _merkleRoot;
  }

  function setMerkleRoot2(bytes32 _merkleRoot) public onlyOwner {
    merkleRoot2 = _merkleRoot;
  }

  function setTeamMintEnabled(bool _state) public onlyOwner {
    teamMintEnabled = _state;
  }

  function setWhitelistMintEnabled(bool _state) public onlyOwner {
    whitelistMintEnabled = _state;
  }

  function withdraw() public onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}('');
    require(os);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return uriPrefix;
  }
}
