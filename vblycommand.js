CmdUtils.CreateCommand({
 name: ["vb.ly", "vbly"],
 arguments: [{role: "object", label: "status", nountype: noun_arb_text}],
 preview: function show_url(pblock, args){
   var q = "Show URL selected: " + args.object.text;
   pblock.innerHTML = q;
 },
 _vbSetType: function vbSetType__vbSetType(results){
   var url = "http://vb.ly/api/";
   var short_url = "shorturl";
   var stats = "stats";
   var format_xml = "xml";
   var format_json = "json";

  if(results != stats){
    return settings = [{'url' : url, 'action' : short_url, 'format' : format_json }];
  }else{
    return settings = [{'url' : url, 'action' : stats, 'format' : format_json }];
  }
 },
 execute: function(args){
   
   var vbType = this._vbSetType("shorturl");
   var seturl = vbType[0].url+'?action='+ vbType[0].action + '&url='+args.object.text+'&format=simple';
   jQuery.get( seturl, function( show ) {
      CmdUtils.setSelection( show );
    })
 }
});