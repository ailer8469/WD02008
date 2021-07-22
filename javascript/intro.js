function serverBoxClickHandler(targetIndex) {
    const serverCount = 4
    for (let i = 1; i < serverCount; i++){
        $('#serve-box-' + i).hide(700)
    }
    console.log(targetIndex)
    $('#serve-box-' + targetIndex).show(700)
}



$(document).ready(function() {
    $("#slt").click(function() {
        $("#serve").slideDown(2000)
        $('#serve-box-2').hide()
        $('#serve-box-3').hide()
        $('#serve-box-4').hide();
    });
});



const serve1ImgPath = {
    X伯爵的委託:"pic/small/room1 sm.png" ,
    森林之心: "pic/small/room4 sm.png",
    是不是勇者: "pic/small/room5 sm.png",
    控制獄: "pic/small/room2 sm.png",
    宇宙逃脫Vicky: "pic/small/room3 sma.png",
}

const serve1Select = document.getElementById('serve1Select')

function serve1SelectChange(event) {
    const value = event.target.value
    const innerHtml = value ==='主題名稱'?'<div></div>':`<img src="${serve1ImgPath[value]}"></img>`
    $('#option-img-container').html(innerHtml)
   
}
// ------------------------------------
