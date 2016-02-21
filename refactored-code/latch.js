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
            
            jsPlumb.addEndpoint("item_inp1", { 
              anchor:"Left"
            }, common);

            jsPlumb.addEndpoint("item_out", { 
              anchor:"Right"
            }, common); 
            
            jsPlumb.addEndpoint("item_out", { 
              anchor:"Left"
            }, common);

            jsPlumb.addEndpoint("item_inv", { 
              anchor:"Right"
            }, common); 
            
	    jsPlumb.addEndpoint("item_inv1", { 
              anchor:"Right"
            }, common); 
            
            jsPlumb.addEndpoint("item_inv", { 
              anchor:"Left"
            }, common);
            jsPlumb.addEndpoint("item_inv1", { 
              anchor:"Left"
            }, common);
            jsPlumb.addEndpoint("item_mx", { 
              anchor:"Top"
            }, common); 
            jsPlumb.addEndpoint("item_mx", { 
              anchor:"Right"
            }, common); 
            jsPlumb.addEndpoint("item_mx", { 
              anchor:"LeftMid1"
            }, common); 
            
            jsPlumb.addEndpoint("item_mx", { 
              anchor:"LeftMid2"
            }, common);
	
	    jsPlumb.draggable("item_inp", { grid:[10,10] });  
	    jsPlumb.draggable("item_out", { grid:[10,10] });  
	    jsPlumb.draggable("item_inp1", { grid:[10,10] });  
	    jsPlumb.draggable("item_mx", { grid:[10,10] });  
	    jsPlumb.draggable("item_inv", { grid:[10,10] });  
	    jsPlumb.draggable("item_inv1", { grid:[10,10] });  
        });
