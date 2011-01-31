// ==========================================================================
// Project:   CollisionDetectionDemo.widgetDrag
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals CollisionDetectionDemo */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
CollisionDetectionDemo.DragEvents = SC.ObjectController.create(
/** @scope CollisionDetectionDemo.widgetDrag.prototype */ {

  // TODO: Add your own code here.

    widgetArray: null,

    previousLayout:null,

    mouseDown: function(evt) {

        //Get all Widgets that are childViews of the AppCanvas
        this.set('widgetArray', this.parentView.childViews);

        // indicate dragging - re-renders view
        this.set('isDragging', YES);

        var layout = this.get('layout');
        this._mouseDownInfo = {
          pageX: evt.pageX, // save mouse pointer loc for later use
          pageY: evt.pageY,
          left:  layout.left, // save layout info
          top: layout.top
        };

        //SET LAYOUT
        this.set('previousLayout', layout);


        var newClass = this.get('classNames').push('widget-top');

        console.log(newClass);
        this.displayDidChange();

        console.log(this.get('classNames'));
        
        return YES; // so we get other events
    },

    mouseDragged: function(evt) {

        var info = this._mouseDownInfo,
        loc;

        // handle X direction
        loc = info.left + (evt.pageX - info.pageX);
        this.adjust('left', loc);

        // handle Y direction
        loc = info.top + (evt.pageY - info.pageY);
        this.adjust('top', loc);


        return YES ; // event was handled!
    },
    
    mouseUp: function(evt) {

        this.mouseDragged(evt);

        var counter;

        var Rect1 = this;

        if (counter == this.widgetArray.length) {
            counter = 0;
        }

        for (counter = 0; counter < this.widgetArray.length; counter++) {

            /*Do not proceed if the current object is the same as the one
            to perform the overlap test on*/

            var Rect2 = this.get('widgetArray')[counter];


            //Ensure that the Rectangle is not being compared with itself
            if (Rect1 != Rect2) {

                var overlapRect = (SC.intersectRects(Rect1.get('frame'), Rect2.get('frame')));
                var doesOverlap = (overlapRect.width > 0 && overlapRect.height > 0);


                if (doesOverlap) {

                    //Overlaps Horizontally

                    if (overlapRect.width <= overlapRect.height) {

                        console.log('Overlap Horzontal');

                        console.log(overlapRect.x);
                        console.log(Rect2.get('frame').x + Rect2.get('layout').width/2);

                        //Check if closer to the left or Right

                        //Left
                            if (overlapRect.x + overlapRect.width <= Rect2.get('frame').x + Rect2.get('frame').width/2){

                            Rect1.set('layout', {
                                left: Rect2.get('layout').left-Rect1.get('layout').width,
                                top: Rect2.get('layout').top,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });
                        }


                        //Also Left
                        else if ((overlapRect.x + overlapRect.width <= Rect2.get('frame').x + Rect2.get('frame')
                                    .width/2)&&(overlapRect.x < (Rect2.get('frame').x + Rect2.get('layout').width/2))){

                            Rect1.set('layout', {
                                left: Rect2.get('layout').left-Rect1.get('layout').width,
                                top: Rect2.get('layout').top,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });

                        }

                        //Right
                        else {

                            Rect1.set('layout', {
                                left: Rect2.get('layout').left+Rect1.get('layout').width,
                                top: Rect2.get('layout').top,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });
                        }

                        //Place to the Left

                    } //End Horizontally

                    //Overlaps Vertically
                    else {
                        console.log('Overlap Vertical');

                        //Bottom
                            if (overlapRect.y + overlapRect.height <= Rect2.get('frame').y + Rect2.get('frame').height/2){

                            console.log('Bottom')

                            Rect1.set('layout', {
                                left: Rect2.get('layout').left,
                                top: Rect2.get('layout').top+Rect1.get('layout').height,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });
                        }


                        //Also Bottom
                        else if ((overlapRect.y + overlapRect.height <= Rect2.get('frame').y + Rect2.get('frame')
                                    .width/2)&&(overlapRect.y < (Rect2.get('frame').y + Rect2.get('layout').height/2))){

                            console.log('Bottom2');    


                            //Place Above
                            Rect1.set('layout', {
                                left: Rect2.get('layout').left,
                                top: Rect2.get('layout').top+Rect1.get('layout').height,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });

                        }

                        //Top   
                        else {

                            console.log('Top');

                            //Place Above
                            Rect1.set('layout', {
                                left: Rect2.get('layout').left,
                                top: Rect2.get('layout').top-Rect1.get('layout').height,
                                width: this.get('layout').width,
                                height: this.get('layout').height
                            });

                        }
                    }   //End Vertically
                } // End doesOverlap
            } //End if
        } //End for loop

        //Test if object is intersecting with borders of ParentView

        var overlap = (SC.intersectRects(Rect1.get('frame'), this.parentView.get('frame')));
        var insideBorder = (overlap.width > 0 && overlap.height > 0);

        if (!insideBorder) {
            Rect1.set('layout', this.get('previousLayout'));

        }

        // no longer dragging - will re-render
        this.set('isDragging', NO);

        // apply one more time to set final position

        this._mouseDownInfo = null; // cleanup info
        this.set('widgetArray', null);

        this.set('previousLayout', null);

        Rect1.get('classNames').pop();
        console.log(Rect1.get('classNames'));

        return YES; // handled!
	}
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('collision_detection_demo');