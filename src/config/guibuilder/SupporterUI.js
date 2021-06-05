
backgroundColor(0x141518);

//anchor point, text, color
addElement(new GuiElementText(EnumGuiLocation.TOP_CENTER, "Thanks for the support!", 0xc0c0c0).scale(2, 2).setAbsYOffset(4));

//anchor point, text component, color
addElement(new GuiElementText(EnumGuiLocation.BOTTOM_CENTER, Util.Text.color(Util.Text.url(Util.Text.component("Support on Patreon"), "https://www.patreon.com/Darkosto"), 0xFF424D)).scale(2, 2).setAbsYOffset(-3));

//Read lines of text from file
var supporters = Util.File.readLines("./config/guibuilder/supporters.txt");
//top left anchor point, bottom right anchor point, text list
//combine is the max number of strings per line, and spacing between them
//xPadding is padding on the right and left sides of the gui
addElement(new GuiElementTextListScrollable(EnumGuiLocation.TOP_LEFT, EnumGuiLocation.BOTTOM_RIGHT, supporters).combine(15, 5).setAbsYOffset(23).setBotAbsYOffset(-22).xPadding(100));

//Adds button to go back to the main menu
addButton(new TriFunction({
	//gui, width, height
	apply: function(gui, guiWidth, guiHeight) {
		var btnWidth = 50;
		var btnHeight = 20;
		//x, z, width, height, text, click function
		return new Button(4, guiHeight - btnHeight - 4, btnWidth, btnHeight, Util.Text.component("Back"), function(btn) {
		     Util.Gui.setScreen(gui.parent);
		});
	}
}));