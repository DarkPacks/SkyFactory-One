
setDimensionType(DimensionHelper.typeBuilder().fixedTime(18000).effects("topography:black").build());

var NoFeatureConfig = Java.type("net.minecraft.world.gen.feature.NoFeatureConfig");
var RegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.RegionFeatureConfig");
var StructureFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StructureFeatureConfig");
var StalactiteFormationConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StalactiteFormationConfig");
var FeatureHelper = Java.type("com.bloodnbonesgaming.topography.common.util.features.FeatureHelper");
var COBBLESTONE = BlockHelper.getState("minecraft:cobblestone");
var DIORITE = BlockHelper.getState("minecraft:diorite");
var GRANITE = BlockHelper.getState("minecraft:granite");
var ANDESITE = BlockHelper.getState("minecraft:andesite");
var GRAVEL = BlockHelper.getState("minecraft:gravel");

//Columns
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(DIORITE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(GRANITE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(ANDESITE, 10, 0, 2, 1, 12, 4, 1)));

//Void holes
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:void_hole", new RegionFeatureConfig(10, 0, 8, 9, 10)));

//Stalactites
//Big
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 8, 5, 9, 2, 10, 4, 1)));
//Medium
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 6, 3, 13, 3, 5, 3, 1)));

//Small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 4, 0, 16, 4, 2, 3, 1)));

//Very small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 2, 0, 16, 5, 1, 2, 1)));

//Stalagmites
//Medium
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 4, 8, 5, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 3, 8, 5, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 3, 8, 5, 2, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 3, 8, 5, 2, 1)));

//Small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRAVEL, 10, 0, 1500, 7, 2, 2, 5)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 150, 7, 2, 2, 5)));

//Very small
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRAVEL, 10, 0, 400, 6, 1, 1, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 32, 6, 1, 1, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 24, 6, 1, 1, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 24, 6, 1, 1, 1)));
addRegionFeature(FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 24, 6, 1, 1, 1)));


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