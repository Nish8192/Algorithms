function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function BST(){
    this.root = null;

    this.add = function(val){
        var node = new BTNode(val);
        if(!this.root){
            this.root = node;
            return this;
        }
        var r = this.root;
        while(r){
            if(val < r.val && r.left){
                r = r.left;
            }
            else if(val < r.val){
                r.left = node;
                return this;
            }
            else if(val >= r.val && r.right){
                r = r.right;
            }
            else if(val >= r.val){
                r.right = node;
                return this;
            }
        }
        return this;
    }

    this.max = function(){
        if(!this.root){
            return false;
        }
        var r = this.root;
        while(r.right){
            r = r.right;
        }
        return r.val;
    }
    this.min = function(){
        if(!this.root){
            return false;
        }
        var r = this.root;
        while(r.left){
            r = r.left;
        }
        return r.val;
    }

    // this.size = function(){
    //     if(!this.root){
    //         return 0;
    //     }
    //     var r = this.root;
    //     return this.sizeHelper(r, 1);
    // }
    // this.sizeHelper = function(node, count){
    //     if(!node){
    //         return count;
    //     }
    // }

    this.preTraverse = function(){
        var arr = [];
        if(!this.root){
            console.log(arr);
            return this;
        }
        var r = this.root;
        this.preHelper(r, arr);
        console.log(arr);
        return this;
    }
    this.preHelper = function(r, arr){
        arr.push(r.val);
        if(!r.left && !r.right){
            return arr;
        }
        if(r.left){
            this.preHelper(r.left, arr);
        }
        if(r.right){
            this.preHelper(r.right, arr);
        }
    }

    this.isValid = function(){
        if(!this.root){
            return false;
        }
        var r = this.root, x = true, y = true;
        return this.ValidHelper(r, x, y);
    }

    this.ValidHelper = function(r, x, y){
        if(!r.right && !r.left){
            return true;
        }
        if(r.right){

            if(r.right.val < r.val){
                return false;
            }
            z = this.ValidHelper(r.right, x, y);
            if(!z){
                return false;
            }
        }
        if(r.left){
            if(r.left.val >= r.val){
                return false;
            }
            return this.ValidHelper(r.left, x, y);
            return y
        }
        return true;
    }

    this.isBalanced = function(){
        if(!this.root){
            return false;
        }
        var r = this.root;
        return this.BalanceH(r, 0, 0);
    }
    this.BalanceH = function(r, leftC, rightC){
        if(!r.right && !r.left){
            return true;
        }
        if(!r.right){
            rightC--;
        }
        if(!r.left){
            leftC--;
        }
        if(r.right){
            this.BalanceH(r.right, leftC, rightC+1);
        }
        if(r.left){
            this.BalanceH(r.left, leftC+1, rightC);
        }
        if(Math.abs(leftC-rightC) > 1){
            return false;
        }
        return true;
    }

    this.remove = function(val){
        if(!this.root){
            return false;
        }
        var r = this.root;
        if(this.root === val){  //does not work for root case
            this.root = null;
            return this;
        }
        while(r.left || r.right){
            if(r.right){
                if(r.right.val === val){
                    if(r.right.left){
                        var temp = r.right.left;
                        while(temp.right){
                            temp = temp.right;
                        }
                        temp.right = r.right.right;
                        r.right = r.right.left;
                        return this;
                    }
                    else{
                        r.right = r.right.right;
                    }
                }
                else if(r.right.val > val){
                    r = r.right;
                }
            }
            if(r.left){
                if(r.left.val === val){
                    if(r.left.right){
                        var temp = r.left.right;
                        while(temp.left){
                            temp = temp.left;
                        }
                        temp.left = r.left.left;
                        r.left = r.left.right;
                        return this;
                    }
                    else{
                        r.left = r.left.left;
                    }
                }
                else if(r.left.val < val){
                    r = r.left;
                }
            }
        }
        return false;
    }

    this.ContainsSum = function(sum){
        if(!this.root){
            return false;
        }
        var r = this.root;
        if(r.val === sum && (!r.left && !r.right)){
            return true;
        }
        else if(!r.left && !r.right){
            return false;
        }
        return this.SumH2(r, sum, r.val);
    }
    this.SumH = function(r, sum, tsum){
        if(!r.left && !r.right){
            return tsum;
        }
        if(r.left){
            var x = this.SumH(r.left, sum, tsum + r.left.val);
        }
        if(r.right){
            var y = this.SumH(r.right, sum, tsum + r.right.val);
        }
        if(x === sum || x === true || y === sum || y === true){
            return true;
        }
        else{
            return false;
        }
    }
    this.SumH2 = function(r, sum, tsum) {
       if (!r.left && !r.right) {
           return tsum === sum;
       } else {
           x = false
           if (r.left) {
               var x = this.SumH2(r.left, sum, tsum + r.left.val)
           }
           y = false
           if (r.right) {
               var y = this.SumH2(r.right, sum, tsum + r.right.val)
           }
           return x || y
       }
   }

}
// var Tree = new BST();
// Tree.add(5).add(20).add(50).add(25).add(35).add(32).add(56).add(24).add(19).add(22);
// Tree.preTraverse();
// Tree.remove(50);
// Tree.preTraverse();
// console.log(Tree.min());
// console.log(Tree.isValid());

// var balanced = new BST();
// balanced.add(50).add(25).add(100);
//
// var unbalanced = new BST();
// unbalanced.add(50).add(100).add(150);
//
// console.log(balanced.isBalanced());
// console.log(unbalanced.isBalanced());

var sumTree = new BST();
sumTree.add(19).add(2).add(9).add(12);
console.log(sumTree.ContainsSum(42));
