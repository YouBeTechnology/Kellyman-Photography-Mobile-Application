/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1865, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3688, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4924, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6118, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7669, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9863, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${callus}", "touchstart", function(sym, e) {
         window.open("tel:6098078071");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Testimonies_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Testimonies");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${About_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play("About");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Galleries_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play("Galleries");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Services_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play("Services");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Contact_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play("Contact");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Blog_Click_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("Blog");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Kellyman_Back_Button}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play("Intro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Kellyman_About_View_Profile_Button}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.thumbtack.com/pa/morrisville/photographers/photography-services", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fbclick}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://www.facebook.com/KellymanPhotography", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${twitclick}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://twitter.com/kellymanphoto", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${instaclick}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://instagram.com/chriskellyman/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Login_Button}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://app.shootq.com/public/~2007f2/clients/login", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Buttons_Holders'
   (function(symbolName) {   
   
   })("Buttons_Holders");
   //Edge symbol end:'Buttons_Holders'

   //=========================================================
   
   //Edge symbol: 'Buttons_Movie'
   (function(symbolName) {   
   
   })("Buttons_Movie");
   //Edge symbol end:'Buttons_Movie'

   //=========================================================
   
   //Edge symbol: 'blog2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var container2 = sym.$("container2");
         var blog2 = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/KellymanMobile/samples.html"></iframe>'
         container2.html(blog2);

      });
      //Edge binding end

   })("blog2");
   //Edge symbol end:'blog2'

   //=========================================================
   
   //Edge symbol: 'blog2_1'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var container3 = sym.$("container3");
         var blog3 = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://kellymangalleryphotosmobile.blogspot.com/"></iframe>'
         container3.html(blog3);

      });
      //Edge binding end

   })("blog2_1");
   //Edge symbol end:'blog2_1'

   //=========================================================
   
   //Edge symbol: 'conview'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var container5 = sym.$("contactframe");
         var conview = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://kpmobileapp9563247.blogspot.com/"></iframe>'
         contactframe.html(conview);
         

      });
      //Edge binding end

   })("conview");
   //Edge symbol end:'conview'

   //=========================================================
   
   //Edge symbol: 'blog2_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var contactview = sym.$("contactview");
         var blog2 = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/servicedelivery/KPContactForm/index.html"></iframe>'
         contactview.html(blog2);

      });
      //Edge binding end

   })("blog2_2");
   //Edge symbol end:'blog2_2'

   //=========================================================
   
   //Edge symbol: 'slide_movie'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // insert code here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.isPlaying() ) {
         	sym.play(0);
         }

      });
      //Edge binding end

   })("slide_movie");
   //Edge symbol end:'slide_movie'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'Flash_Movie'
   (function(symbolName) {   
   
   })("Flash_Movie");
   //Edge symbol end:'Flash_Movie'

   //=========================================================
   
   //Edge symbol: 'Flash_Timer'
   (function(symbolName) {   
   
   })("Flash_Timer");
   //Edge symbol end:'Flash_Timer'

   //=========================================================
   
   //Edge symbol: 'updateholder'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var updateframe = sym.$("updateframe");
         var blog4 = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://kpmobileapp9563247.blogspot.com/"></iframe>'
         updateframe.html(blog4);
         

      });
      //Edge binding end

   })("updateholder");
   //Edge symbol end:'updateholder'

   //=========================================================
   
   //Edge symbol: 'content'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var photoholder = sym.$("photoholder");
         var content = '<iframe width="480" height="347" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/KellymanMobile/photoSlides1/"></iframe>'
         photoholder.html(content);
         

      });
      //Edge binding end

   })("content");
   //Edge symbol end:'content'

   //=========================================================
   
   //Edge symbol: 'callus'
   (function(symbolName) {   
   
   })("callus");
   //Edge symbol end:'callus'

   //=========================================================
   
   //Edge symbol: 'viiewgal'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var gframe = sym.$("gframe");
         var blog7 = '<iframe width="100%" height="100%" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://kellymangalleryphotosmobile.blogspot.com/"></iframe>'
         gframe.html(blog7);
         

      });
      //Edge binding end

   })("viiewgal");
   //Edge symbol end:'viiewgal'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-341792330");