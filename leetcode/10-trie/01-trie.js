var Trie = function() {
    this.root = {
        children: new Map(),
        isEndOfWord: false,
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!node.children.has(char)) {
            node.children.set(char, {
                children: new Map(),
                isEndOfWord: false
            });
        }

        node = node.children.get(char);
    }

    node.isEndOfWord = true;
};


/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if (!node.children.has(char)) {
            return false;
        }

        node = node.children.get(char);
    }

    return node.isEndOfWord;
};


Trie.prototype.startsWith = function(prefix) {
    let node = this.root;

    for (let i = 0; i < prefix.length; i++) {
        let char = prefix[i];

        if (!node.children.has(char)) {
            return false;
        }

        node = node.children.get(char);
    }

    return true;
};

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true