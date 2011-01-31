// ==========================================================================
// Project:   CollisionDetectionDemo.DragEvents
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals CollisionDetectionDemo */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
CollisionDetectionDemo.DragEvents = SC.View.extend(
/** @scope CollisionDetectionDemo.DragEvents.prototype */ {

    mouseDown: function () {
        alert('test');
    },


    mouseDragged:function() {

    },

    mouseUp: function() {

    }

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('collision_detection_demo');