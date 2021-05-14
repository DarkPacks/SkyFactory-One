
//Disables the example scripts
disableExamples(true);

//Sets the global gui background replacement
setGuiBackground("images/options_background");

/*
 * Allows for replacement of the vanilla structure block with a version that can create significantly larger structures.
 * Having the replacement registered during world generation will cause structure blocks in structures to not be properly removed.
 * Disable this option before releasing.
 */
registerStructureBlockReplacement(false);
