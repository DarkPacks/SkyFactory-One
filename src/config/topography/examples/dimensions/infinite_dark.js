/*
 * This file creates a dimension similar to the Deep Dark of old
 * Command to reach dimension: /execute in topography:infinite_dark run tp @s ~ 85 ~
 */

/*
 * Builds and sets the DimensionType for the dimension.
 * Fixes the time at midnight.
 * Disables sun/moon/star/sky rendering and enables short distance fog. topography:black is registered internally to handle this. Fog color is set to black in the presets file.
 * Disables skylight
 */
setDimensionType(Util.Dimensions.typeBuilder().fixedTime(18000).effects("topography:black").skylight(false).ceiling(true).build());
/*
 * Sets the min and max gamma setting for this dimension. 0.0 means it will always render as if the option is set to minimum or "moody".
 * Keeps the dimension dark regardless of game settings.
 */
minGamma(0.0);
maxGamma(0.0);
/*
 * Imports a bunch of needed Java classes
 */
var CircleRegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.CircleRegionFeatureConfig");
var SpeleothemConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.SpeleothemConfig");
/*
 * Creates some block variables for cleaner use later
 */
var COBBLESTONE = Util.Blocks.getState("minecraft:cobblestone");
/*
 * Columns
 * SpeleothemConfig takes block, region size, min spacing, attempt count, size, size reduction chance, size reduction attempt count per y level
 */
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:column_formation", new SpeleothemConfig(COBBLESTONE, 10, 0, 2, 12, 4, 1)));
/*
 * Void holes
 * CircleRegionFeatureConfig takes region size, min spacing, attempt count, radius
 */
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:void_hole", new CircleRegionFeatureConfig(10, 0, 6, 10)));
/*
 * Stalactites
 * SpeleothemConfig takes block, region size, min spacing, attempt count, size, size reduction chance, size reduction attempt count per y level
 */
//Big
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 8, 5, 18, 10, 4, 1)));
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 6, 3, 26, 5, 3, 1)));
//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 4, 0, 64, 2, 3, 1)));
//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalactite", new SpeleothemConfig(COBBLESTONE, 2, 0, 64, 1, 2, 1)));
/*
 * Stalagmites
 * SpeleothemConfig takes block, region size, min spacing, attempt count, size, size reduction chance, size reduction attempt count per y level
 */
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 12, 5, 2, 1)));
//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 250, 2, 2, 5)));
//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, Util.Features.buildConfiguredFeature("topography:stalagmite", new SpeleothemConfig(COBBLESTONE, 10, 0, 400, 1, 1, 1)));

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	/*
	 * Import BiomeProvider class and make a new instance
	 * Biome topography:infinite_dark is registered in config/topography/examples/Registration.js
	 */
	var SingleBiomeProvider = Java.type("net.minecraft.world.biome.provider.SingleBiomeProvider");
	var biomeProvider = new SingleBiomeProvider(Util.Biomes.getBiome("topography:infinite_dark"));
	
	/*
	 * Creates and returns ChunkGenerator instance
	 * Adds layers of blocks between inclusive min/max levels
	 */
	return new ChunkGeneratorLayersFlat(biomeProvider, function() {
		return Util.Registries.get(dimensionSettingsRegistry, "minecraft:overworld");
	}, seed)
		.addLayers(1, 75, Util.Blocks.getState("minecraft:stone"))
			.addLayers(76, 80, Util.Blocks.getState("minecraft:cobblestone"))
				.addLayers(175, 179, Util.Blocks.getState("minecraft:cobblestone"))
					.addLayers(180, 254, Util.Blocks.getState("minecraft:stone"))
						.addLayers(0, 0, Util.Blocks.getState("minecraft:bedrock"))
							.addLayers(255, 255, Util.Blocks.getState("minecraft:bedrock"));
}
