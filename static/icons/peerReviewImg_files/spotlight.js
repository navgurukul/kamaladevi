//$Id$
if(!$WC.$CUtil.isEmpty($zcg._SPOTLIGHTPROPS))
{
	var spotlightprops = $zcg._SPOTLIGHTPROPS.split(",");
	if(spotlightprops.length > 0)
	{
		var source = spotlightprops[2];
		var token = spotlightprops[1];
		(function(id){var d=document;var w=window;w.$zoho=w.$zoho||{};var z=$zoho;var u=z.spotlight=z.spotlight||{};u.app_id=id;u.q=[];var p={"customer":["delete","increment","property","set","append"],"company":["delete","increment","append","property","set"],"track":[],"identify":[],"logout":[]};function s(a,b,c){a[b]=function(){var o={};o[c]=arguments;u.q.push(o)}}for(var o in p){s(u,o,o);var a=p[o];for(var i=0;i<a.length;i++){s(u[o],a[i],o+"."+a[i])}}var e=d.createElement("script");e.type="text/javascript";e.src=source;e.id="zslscript";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})(token);
	}
}
