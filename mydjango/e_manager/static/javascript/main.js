function tuple_select(){
    const $tuple = document.getElementsByClassName("table-tuple");
    for(let i=0; i<$tuple.length; i++)
    {
        $tuple[i].onclick() = function(){
            return function(){
                this.style.backgroundColor="blue";
            }
        }
    }
    //$tuple[2].style.backgroundColor = "black";
}
