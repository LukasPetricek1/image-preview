$(".left-menu i").click(function(){ 
  const target = $(":radio:checked").prev().prev()
  if(target.length){
    target.get(0).checked = true
  }
})

$(".right-menu i").click(function(){ 
  const target = $(":radio:checked").next().next()
  if(target.length){
    target.get(0).checked = true
  }
})

