function ListNode(value){
    this.val = value;
    this.next = null;
}


function SLL(){
    this.head = null;

    this.pushBack = function(val){
        var nNode = new ListNode(val);
        if(!this.head){
            this.head = nNode;
            return this;
        }
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = nNode;
        return this;
    }

    this.printList = function(){
        var arr = [];
        if(!this.head){
            return false;
        }
        var runner = this.head;
        while(runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        return arr;
    }

    this.removeNeg = function(){
        if(!this.head){
            return false;
        }
        while(this.head.val < 0){
            this.head = this.head.next;
        }
        var runner = this.head;
        while(runner.next){
            if(runner.next.val < 0){
                runner.next = runner.next.next;
            }
            else{
                runner = runner.next;
            }
        }
        return this;
    }
}

var List = new SLL();
List.pushBack(-1).pushBack(-7).pushBack(5).pushBack(3).pushBack(-2).pushBack(-1).pushBack(6).pushBack(10).pushBack(-9);
List.removeNeg();
console.log(List.printList());
