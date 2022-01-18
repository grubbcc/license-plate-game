/**
 * https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/
 * Trie code by Prashant Yadav
 */

const TrieNode = function (key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
  
  this.getWord = function() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  };
}

/**
 * 
 */


const Trie = function() {
  this.root = new TrieNode(null);
  
  this.insert = function(word) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {

      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i == word.length-1) {
        node.end = true;
      }
    }
  };
  
  this.contains = function(word) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }

    return node.end;
  };
}
