          var onRun = function(context) {
                                  var sketch = require('sketch')
            var Document = require('sketch/dom').Document
            var document = Document.getSelectedDocument()
            //Get selected layers
            var selection = document.selectedLayers
            var UI = require('sketch/ui')
            //Make sure it's not empty
            if(!selection.isEmpty){
              //Selection needs to be more than one artboard
              if(selection.length>1){
                for(var i = 0; i < selection.length ; i++){
                  if(selection.layers[i].type!='Artboard'){
                    var check = 1;
                  }
                }
                //If selection is more than one
                if(!check){
                  //Create Window
                  var window = createWindow(context);
                  var alert = window[0]; 
                  var response = alert.runModal()
                  //When user clicks 'OK'
                  if (response == "1000"){
                    //Get spacing
                    var spacing = 0

                    //Initialize variables
                    var tempPosX = selection.layers[0].frame.x
                    var tempPosY = selection.layers[0].frame.y
                    for(var i = 0; i < selection.length ; i++){
           
                      selection.layers[i].frame.x = tempPosX
                      selection.layers[i].frame.y = tempPosY

                      //Reassign properties with new values
                      spacing = parseInt(horizontalTextField.stringValue())                       
                      tempPosX += selection.layers[i].frame.width + spacing       
                    }
                    UI.message('Artboards arranged.')
                  }

                }else{
                  UI.message('You need to select only artboards')
                }

              }else{
                UI.message('Please select more than one artboard to arrange')
              }
            }else{
              UI.message('Please select the artboards to arrange')
            }

            function createWindow(){
              var alert = COSAlertWindow.new();

              alert.setMessageText("Re-arrange artboard")

// Creating dialog buttons
alert.addButtonWithTitle("Ok");
alert.addButtonWithTitle("Cancel");

// Creating the view
var viewWidth = 300;
var viewHeight = 90;

var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));
alert.addAccessoryView(view);

// Create label
var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(0, viewHeight - 33, (viewWidth - 30), 35));
var horizontalLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 75, (viewWidth - 20), 20));
var horizontalLabelPx = NSTextField.alloc().initWithFrame(NSMakeRect(110, viewHeight - 75, (viewWidth - 20), 20));


// Configure labels
infoLabel.setStringValue("Please input the spacing for the artboards. The default is set to 20px.");
infoLabel.setSelectable(false);
infoLabel.setEditable(false);
infoLabel.setBezeled(false);
infoLabel.setDrawsBackground(false);


horizontalLabel.setStringValue("Spacing");
horizontalLabel.setSelectable(false);
horizontalLabel.setEditable(false);
horizontalLabel.setBezeled(false);
horizontalLabel.setDrawsBackground(false);

horizontalLabelPx.setStringValue("px");
horizontalLabelPx.setSelectable(false);
horizontalLabelPx.setEditable(false);
horizontalLabelPx.setBezeled(false);
horizontalLabelPx.setDrawsBackground(false);

  // Add label
  view.addSubview(infoLabel);
  view.addSubview(horizontalLabel);
  view.addSubview(horizontalLabelPx);

  // Create textfields
  horizontalTextField = NSTextField.alloc().initWithFrame(NSMakeRect(55, viewHeight - 77, 50, 25));
  horizontalTextField.setStringValue("20");
  view.addSubview(horizontalTextField);

// Show the dialog
return [alert]
}

          };
          