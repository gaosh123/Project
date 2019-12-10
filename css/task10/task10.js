$(":checkbox").click(function(){
    $(this).attr("checked",true);//设置当前选中checkbox的状态为checked
    $(this).siblings().attr("checked",false); //设置当前选中的checkbox同级(兄弟级)其他checkbox状态为未选中
});