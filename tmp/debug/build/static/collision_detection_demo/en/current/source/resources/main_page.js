// ==========================================================================
// Project:   CollisionDetectionDemo - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals CollisionDetectionDemo */

// This page describes the main user interface for your application.  
CollisionDetectionDemo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'AppCanvas'.w(),

    AppCanvas: SC.View.design({

        childViews: 'Rect1 Rect2 Rect3 Rect4'.w(),

        layout:{top:10, left:10, right:10, bottom:10},
        backgroundColor: 'white',

        Rect1: SC.View.design({
            iidd: '1',
            layout: {width:100, height:100, top:300, left:200},
            backgroundColor: 'red',

            mouseDown: CollisionDetectionDemo.DragEvents.mouseDown,
            mouseDragged: CollisionDetectionDemo.DragEvents.mouseDragged,
            mouseUp: CollisionDetectionDemo.DragEvents.mouseUp

        }), //End Rect1

        Rect2: SC.View.design({
            iidd: '2',
            layout: {width:100, height:100, top:300, left:600},
            backgroundColor: 'blue',

            mouseDown: CollisionDetectionDemo.DragEvents.mouseDown,
            mouseDragged: CollisionDetectionDemo.DragEvents.mouseDragged,
            mouseUp: CollisionDetectionDemo.DragEvents.mouseUp

            
        }),  //End Rect2

        Rect3: SC.View.design ({
            layout: {width:100, height:100, top:300, left:400},
            backgroundColor: 'yellow',
            
            mouseDown: CollisionDetectionDemo.DragEvents.mouseDown,
            mouseDragged: CollisionDetectionDemo.DragEvents.mouseDragged,
            mouseUp: CollisionDetectionDemo.DragEvents.mouseUp
        }),

        Rect4: SC.View.design ({
            layout: {width:100, height:100, top:300, left:800},
            backgroundColor: 'green',

            mouseDown: CollisionDetectionDemo.DragEvents.mouseDown,
            mouseDragged: CollisionDetectionDemo.DragEvents.mouseDragged,
            mouseUp: CollisionDetectionDemo.DragEvents.mouseUp

        })  //End Rect4


    })  //End of AppCanvas

  }) //End of mainPage

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('collision_detection_demo');