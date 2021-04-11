
setDimensionType(DimensionHelper.typeBuilder().fixedTime(18000).effects("topography:black").build());

var NoFeatureConfig = Java.type("net.minecraft.world.gen.feature.NoFeatureConfig");
var RegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.RegionFeatureConfig");
var StructureFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StructureFeatureConfig");
var StalactiteFormationConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StalactiteFormationConfig");
var FeatureHelper = Java.type("com.bloodnbonesgaming.topography.common.util.features.FeatureHelper");
var COBBLESTONE = BlockHelper.getState("minecraft:cobblestone");

//Columns
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 8, 1, 12, 4, 1)));

//Void holes
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:void_hole", new RegionFeatureConfig(10, 0, 8, 9, 10)));

//Stalactites
//Big
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 8, 5, 36, 2, 10, 4, 1)));
//Medium
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 6, 3, 52, 3, 5, 3, 1)));
//Small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 4, 0, 64, 4, 2, 3, 1)));
//Very small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 2, 0, 64, 5, 1, 2, 1)));

//Stalagmites
//Medium
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 10, 8, 5, 2, 1)));
//Small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 1024, 7, 2, 2, 5)));
//Very small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 1024, 6, 1, 1, 1)));


function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = BiomeHelper.forBiomes("topography:dark_deep");
	
	var biomeProvider = new MultiBiomeProvider(biomes, seed, 6, biomeRegistry);
	
	return new ChunkGeneratorLayersFlat(biomeProvider, function() {
		return RegistryHelper.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed)
		.addLayers(1, 75, BlockHelper.getState("minecraft:stone"))
			.addLayers(76, 80, BlockHelper.getState("minecraft:cobblestone"))
				.addLayers(175, 179, BlockHelper.getState("minecraft:cobblestone"))
					.addLayers(180, 254, BlockHelper.getState("minecraft:stone"))
						.addLayers(0, 0, BlockHelper.getState("minecraft:bedrock"))
							.addLayers(255, 255, BlockHelper.getState("minecraft:bedrock"));
}
