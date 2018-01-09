var url_path = "https://dxh.xinhaiip.cn/"
var member_id = sessionStorage.getItem("member_id")

var pay_url = "http://wcphp172.xinhaimobile.cn/ixinhai_pay/pay/group_pay.php"
var return_url = "http://wcphp172.xinhaimobile.cn/xh_internal_bulk/history.html"
$("#myForm,.myForm").attr("action",pay_url)
$("#return_url,.return_url").attr("action",return_url)