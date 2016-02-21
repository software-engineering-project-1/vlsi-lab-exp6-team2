        jsPlumb.ready(function() {
	var common = {
              isSource:true,
              isTarget:true,
              connector: [ "Bezier", { curviness:175 } ],
	      endpoint:[ "Dot", { radius:5 }, common ]
            };

            jsPlumb.addEndpoint("item_inp", { 
              anchor: "Right"
            }, common); 
            
            jsPlumb.addEndpoint("item_inp", { 
              anchor:"Left"
            }, common);
            
            jsPlumb.addEndpoint("item_inp1", { 
              anchor: "Right"
            }, common); 
            
	    jsPlumb.addEndpoint("item_inp2", { 
              anchor: "Right"
            }, common); 
            
            jsPlumb.addEndpoint("item_inp1", { 
              anchor:"Left"
            }, common);
            jsPlumb.addEndpoint("item_inp2", { 
              anchor:"Left"
            }, common);

            jsPlumb.addEndpoint("item_out", { 
              anchor:"Right"
            }, common); 
            
            jsPlumb.addEndpoint("item_out", { 
              anchor:"Left"
            }, common);

            jsPlumb.addEndpoint("item_latch", { 
              anchor:"Top"
            }, common); 
            jsPlumb.addEndpoint("item_latch", { 
              anchor:"Right"
            }, common); 
            jsPlumb.addEndpoint("item_latch", { 
              anchor:"Left"
            }, common); 
            
	    jsPlumb.draggable("item_inp", { grid:[10,10] });  
	    jsPlumb.draggable("item_out", { grid:[10,10] });  
	    jsPlumb.draggable("item_inp1", { grid:[10,10] });  
	    jsPlumb.draggable("item_inp2", { grid:[10,10] });  
	    jsPlumb.draggable("item_latch", { grid:[10,10] });  
        });
