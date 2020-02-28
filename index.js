window.addEventListener('load', function(){
    // 获取ratio的宽度，使图片固定宽高比例显示
    let ratio = document.querySelectorAll('.ratioC');
    for(let i=0; i<ratio.length; ++i) {
        ratio[i].style.height = ratio[i].offsetWidth*1.1 + 'px';
    }
    // 获取ratio的宽度，是图片固定宽高比例显示


    
    //  星星显示 
    $('#bl_header .word').on('mouseenter', function(){
        $(this).children('em').stop().slideDown(600,'linear');   
    })
    $('#bl_header .word').on('mouseleave', function(){
        $(this).children('em').stop().slideUp(600,'linear');
    })
    //  星星显示 
    
})
