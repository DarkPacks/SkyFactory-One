/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Worlds", "examples/images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_void")//Registers script "overworld_void" to be used for generating dimension "overworld"
.registerDimension("the_nether", "examples/dimensions/nether_void")//Registers script "nether_void" to be used for generating dimension "nether"
.registerDimension("the_end", "examples/dimensions/end_void")//Registers script "end_void" to be used for generating dimension "end"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.clearFeatures(event);//Clears all feature generators
		//FeatureHelper.clearStructures(event);//Clears all structure generators

        //event, structure resource location
        FeatureHelper.removeStructure(event, "buried_treasure");
        FeatureHelper.removeStructure(event, "desert_pyramid");
        FeatureHelper.removeStructure(event, "endcity");
        //FeatureHelper.removeStructure(event, "bastion_remnant");
        //FeatureHelper.removeStructure(event, "fortress");
        FeatureHelper.removeStructure(event, "fossil");
        FeatureHelper.removeStructure(event, "igloo");
        FeatureHelper.removeStructure(event, "jungle_pyramid");
        FeatureHelper.removeStructure(event, "mansion");
        FeatureHelper.removeStructure(event, "mineshaft");
        FeatureHelper.removeStructure(event, "monument");
        //FeatureHelper.removeStructure(event, "nether_fossil");
        FeatureHelper.removeStructure(event, "ocean_ruin");
        FeatureHelper.removeStructure(event, "pillager_outpost");
        FeatureHelper.removeStructure(event, "ruined_portal");
        FeatureHelper.removeStructure(event, "shipwreck");
        FeatureHelper.removeStructure(event, "stronghold");
        FeatureHelper.removeStructure(event, "swamp_hut");
        FeatureHelper.removeStructure(event, "underwater_ruin");
        FeatureHelper.removeStructure(event, "village");
        FeatureHelper.removeStructure(event, "woodland_mansion");
        FeatureHelper.removeFeature(event, "void_start_platform");

        if (BiomeHelper.test(event.getName(), BiomeDictionary.Type.OVERWORLD)) {
    var EntityClassification = Java.type("net.minecraft.entity.EntityClassification");
    var Spawners = Java.type("net.minecraft.world.biome.MobSpawnInfo.Spawners");
    var EntityType = Java.type("net.minecraft.entity.EntityType");
    
    event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(EntityType.field_200749_ao, 2, 1, 4));
}
	}
}).class);

registerPreset("skylands", "Skylands", "examples/images/Basic_Tree", "Overworld with skylands generation")//Registers preset
.registerDimension("overworld", "examples/dimensions/overworld_skylands")//Registers script "overworld_skylands" to be used for generating dimension "overworld"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.removeStructure(event, "mineshaft");//Removes mineshafts. They don't generate very well
		FeatureHelper.removeFeature(event, "void_start_platform");//Removes a strange void biome feature
	}
}).class);

