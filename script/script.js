//////////// 개별체크박스 전체 선택 //////////
let inputTotal = document.getElementsByName("chkbox");

$("input#total_ckb").click(function(){
if ($("#total_ckb").is(":checked")) {
    $(inputTotal).prop('checked',true);
}else{
    $(inputTotal).prop('checked',false);
}
});

//////////// 하나의 체크박스 해제시 전체동의 체크박스 비활성화 //////////
$(inputTotal).click( function(){
    let checked = $(this).is(":checked");
    if (!checked) {
        $("#total_ckb").prop('checked', false);
    }
});
//////////// 개별 체크박스 모두 체크시 전체동의 체크박스 활성화 //////////
$(inputTotal).click(function(){
 
    $(this).each(function(){
        let TOSckb = $("#TOS_ckb").is(":checked");
        let Privacyckb = $("#Privacy_ckb").is(":checked");
        let shopInfckb = $("#shopInf_ckb").is(":checked");
        if (TOSckb && Privacyckb && shopInfckb) {
            // alert("Privacyckb : "+Privacyckb);
            $("#total_ckb").prop('checked', true);
        }
    });
});

//////////// 필수동의 체크시 //////////

$("#join").click(function(){
    let TOSckb = $("#TOS_ckb").is(":checked");
    let Privacyckb = $("#Privacy_ckb").is(":checked");
    if ( TOSckb && Privacyckb ) {
        $(this).prependTo("form");
    } else {
        alert("필수 약관 동의필요");
    }
});