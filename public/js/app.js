button_ip_popup = $("#button_ip_popup");
button_ip_popup.hide();
$(".button_ip_block").click(function () {

    let range = document.createRange();
    let selection = window.getSelection();
    range.selectNode($("#button_ip")[0]);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        var result = document.execCommand('copy');
        button_ip_popup.show();
        if(result){
            setTimeout(function(){
                button_ip_popup.hide();
            }, 300);
        }
    }catch(err) {
        alert(err);
    }

    selection = window.getSelection();
    if(typeof selection.removeRange === 'function') {
        selection.removeRange(range);
    }else if(typeof  selection.removeAllRanges === 'function') {
        selection.removeAllRanges();
    }
})