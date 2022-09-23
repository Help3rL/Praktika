$(document).on('change', function(){
    var config = {
             startOnLoad:true,
             htmlLabels:true,
             callback:function(id){
                 console.log(id,' rendered');
             },
             flowchart:{
                     useMaxWidth:false,
                 }
         };
         mermaid.initialize(config);
 });