var onRun = function(context) {
  var sketch = require('sketch')
  var UI = require('sketch/ui')
  var Page = require('sketch/dom').Page
  var Document = require('sketch/dom').Document
  var document = Document.getSelectedDocument()
  var selectedPage = document.selectedPage
  var selection = selectedPage.layers
  if(selection !=""){
    var window = createWindow(context);
    var alert = window[0]; 
    var response = alert.runModal()
//Setup variables
if (response == "1000"){
var tempPosX, tempPosY
var horizontalSpacing = parseInt(horzSpacingTextField.stringValue())
var verticalSpacing = parseInt(verSpacingTextField.stringValue())
tempPosX = 0
tempPosY = 0
var columns = parseInt(columnTextField.stringValue())   
var totalLoop = Math.ceil(selection.length/columns)
var count = 0
var longHeight = 0
for(var i = 0; i < totalLoop; i++){
 tempPosX = 0
 longHeight = 0
 for(var j = 0; j < columns; j++){
  if(count< selection.length){
    selection[count].frame.x=tempPosX 
    selection[count].frame.y= tempPosY
    tempPosX += selection[count].frame.width + horizontalSpacing                 
    if(longHeight < selection[count].frame.height){
      longHeight = selection[count].frame.height
    }
    count++ 
  }
} 
tempPosY+= longHeight+verticalSpacing
}
UI.message('Artboards arranged.')
}

}else{
  UI.message('There are no artboards to arrange.')
}

function createWindow(){
  var alert = COSAlertWindow.new();

  alert.setMessageText("Re-arrange artboard")

// Creating dialog buttons
alert.addButtonWithTitle("Ok");
alert.addButtonWithTitle("Cancel");

// Creating the view
var viewWidth = 300;
var viewHeight = 100;

var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight));
alert.addAccessoryView(view);

// Create label
var infoLabel = NSTextField.alloc().initWithFrame(NSMakeRect(0, viewHeight - 33, (viewWidth - 30), 35));
var columnLabel = NSTextField.alloc().initWithFrame(NSMakeRect(-1, viewHeight - 55, (viewWidth - 20), 20));
var horzSpacingLabel = NSTextField.alloc().initWithFrame(NSMakeRect(65, viewHeight - 55, (viewWidth - 20), 20));
var horzSpacingpxLabel = NSTextField.alloc().initWithFrame(NSMakeRect(150, viewHeight - 89, 80, 25));
var verSpacingLabel = NSTextField.alloc().initWithFrame(NSMakeRect(185, viewHeight - 55, (viewWidth - 20), 20));
var verSpacingpxLabel = NSTextField.alloc().initWithFrame(NSMakeRect(270, viewHeight - 89, 80, 25));


// Configure labels
infoLabel.setStringValue("Please input the spacing for the artboards.");
infoLabel.setSelectable(false);
infoLabel.setEditable(false);
infoLabel.setBezeled(false);
infoLabel.setDrawsBackground(false);

columnLabel.setStringValue("Columns");
columnLabel.setSelectable(false);
columnLabel.setEditable(false);
columnLabel.setBezeled(false);
columnLabel.setDrawsBackground(false);

horzSpacingLabel.setStringValue("Horizontal spacing");
horzSpacingLabel.setSelectable(false);
horzSpacingLabel.setEditable(false);
horzSpacingLabel.setBezeled(false);
horzSpacingLabel.setDrawsBackground(false);

horzSpacingpxLabel.setStringValue("px");
horzSpacingpxLabel.setSelectable(false);
horzSpacingpxLabel.setEditable(false);
horzSpacingpxLabel.setBezeled(false);
horzSpacingpxLabel.setDrawsBackground(false);

verSpacingLabel.setStringValue("Vertical spacing");
verSpacingLabel.setSelectable(false);
verSpacingLabel.setEditable(false);
verSpacingLabel.setBezeled(false);
verSpacingLabel.setDrawsBackground(false);

verSpacingpxLabel.setStringValue("px");
verSpacingpxLabel.setSelectable(false);
verSpacingpxLabel.setEditable(false);
verSpacingpxLabel.setBezeled(false);
verSpacingpxLabel.setDrawsBackground(false);

 // Add label
 view.addSubview(infoLabel);
 view.addSubview(columnLabel);
 view.addSubview(horzSpacingLabel);
 view.addSubview(horzSpacingpxLabel);
 view.addSubview(verSpacingLabel);
 view.addSubview(verSpacingpxLabel);

// Create textfields
columnTextField = NSTextField.alloc().initWithFrame(NSMakeRect(0, viewHeight - 85, 50, 25));
columnTextField.setStringValue("4");
view.addSubview(columnTextField);

horzSpacingTextField = NSTextField.alloc().initWithFrame(NSMakeRect(66, viewHeight - 85, 80, 25));
horzSpacingTextField.setStringValue("20");
view.addSubview(horzSpacingTextField);

verSpacingTextField = NSTextField.alloc().initWithFrame(NSMakeRect(186, viewHeight - 85, 80, 25));
verSpacingTextField.setStringValue("100");
view.addSubview(verSpacingTextField);

// Create dropdown
  flipDropdown = NSPopUpButton.alloc().initWithFrame(NSMakeRect(0, viewHeight - 130, (viewWidth / 2) + 10, 22));

  // Configure dropdown
  [flipDropdown addItemWithTitle:"No flip"];
  [flipDropdown addItemWithTitle:"Horizontal flip"];
  [flipDropdown addItemWithTitle:"Vertical flip"];
  [flipDropdown addItemWithTitle:"Horizontal and Vertical flip"];

  // Add dropdown
  view.addSubview(flipDropdown);


// Show the dialog
return [alert]
}

};
