$(document).ready(function() {
	// $('body').hide()
})
var sel =  document.querySelectorAll('input[type=radio]')[0];
$(document).ready(function (){
    $(':radio').click(function (){
        if (this.checked) {
            $('#front').attr('src',this.value);
        }
    });
        
        sel.checked = true;
        $(sel).click();
         
});

function changePic(){
    let arr = [document.querySelectorAll('input[type=radio]')[0], document.querySelectorAll('input[type=radio]')[1], document.querySelectorAll('input[type=radio]')[2] ];
    if (arr[0].checked == true){
        arr[1].checked = true;
        front.setAttribute('src', arr[1].value);
    } else if (arr[1].checked == true){
        arr[2].checked = true;
        front.setAttribute('src', arr[2].value);
    } else {
        arr[0].checked = true;
        front.setAttribute('src', arr[0].value);
    }
    
}
setInterval(changePic, 5000);

