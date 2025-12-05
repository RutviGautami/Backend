function hello(name,end){
    console.log("hello "+name);
    end();
}
function sayby(){
    console.log("byy");
}
hello("rutvi",sayby);