
setDimensionType(DimensionHelper.typeBuilder().fixedTime(18000).effects("topography:black").skylight(false).ceiling(true).build());
minGamma(0.0);
maxGamma(0.0);

var NoFeatureConfig = Java.type("net.minecraft.world.gen.feature.NoFeatureConfig");
var RegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.RegionFeatureConfig");
var CircleRegionFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.CircleRegionFeatureConfig");
var StructureFeatureConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StructureFeatureConfig");
var StalactiteFormationConfig = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.StalactiteFormationConfig");
var FeatureHelper = Java.type("com.bloodnbonesgaming.topography.common.util.features.FeatureHelper");
var BlockReplacement = Java.type("com.bloodnbonesgaming.topography.common.world.gen.feature.config.BlockReplacement");
var COBBLESTONE = BlockHelper.getState("minecraft:cobblestone");
var DIORITE = BlockHelper.getState("minecraft:diorite");
var GRANITE = BlockHelper.getState("minecraft:granite");
var ANDESITE = BlockHelper.getState("minecraft:andesite");
var GRAVEL = BlockHelper.getState("minecraft:gravel");

var randomSpawnerOptions = [
	"minecraft:spider",
	"minecraft:zombie",
	"minecraft:skeleton",
	"minecraft:cave_spider",
	"minecraft:husk",
	"minecraft:creeper",
	"minecraft:witch",
	"minecraft:phantom",
	"minecraft:evoker",
	"minecraft:stray",
	"minecraft:vindicator",
	"minecraft:zombie_villager"
]

function getRandomSpawner(rand) {
	return randomSpawnerOptions[rand.nextInt(randomSpawnerOptions.length)];
}

//Floor structures
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 21, 81, "examples/structures/captainq1")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:red_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 22, 81, "examples/structures/captainq2")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:red_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 23, 81, "examples/structures/captainq3")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:red_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 24, 80, "examples/structures/bentley_tower")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:pink_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
	}
	else if (state == BlockHelper.getState("minecraft:cyan_wool")) {
		if (rand.nextInt(2) == 0) {//Only place 50% of spawners
			return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:air"), null);
		} else {
			return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
		}
	}
	else if (state == BlockHelper.getState("minecraft:orange_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildSpawner(getRandomSpawner(rand))));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	else if (state == BlockHelper.getState("minecraft:stone_bricks") && rand.nextInt(20) == 0) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:infested_stone_bricks"), null);
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));

//Columns
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(DIORITE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(GRANITE, 10, 0, 2, 1, 12, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:column_formation", new StalactiteFormationConfig(ANDESITE, 10, 0, 2, 1, 12, 4, 1)));

//Void holes
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:void_hole", new CircleRegionFeatureConfig(10, 0, 8, 9, 10)));

//Stalactites
//Big
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 8, 5, 9, 2, 10, 4, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 8, 5, 9, 2, 10, 4, 1)));
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 6, 3, 13, 3, 5, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 6, 3, 13, 3, 5, 3, 1)));

//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 4, 0, 16, 4, 2, 3, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 4, 0, 16, 4, 2, 3, 1)));

//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(COBBLESTONE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(DIORITE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(GRANITE, 2, 0, 16, 5, 1, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalactite", new StalactiteFormationConfig(ANDESITE, 2, 0, 16, 5, 1, 2, 1)));

//Ceiling structures
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 2, 24, 150, "examples/structures/captainq4")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:red_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildRandomSpawner(rand)));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:structure", new StructureFeatureConfig(10, 0, 1, 25, 77, "examples/structures/captainq_chain")
.addProcessor(new BlockReplacement(function(original, pos, state, nbt, rand) {
	if (state == BlockHelper.getState("minecraft:red_wool")) {
		return Util.Block.buildBlockInfo(pos, BlockHelper.getState("minecraft:spawner"), Util.Block.getNBT(Util.Block.buildRandomSpawner(rand)));
	}
	else if (Util.Block.getBlock(state) == BlockHelper.getBlock("minecraft:chest")) {
		return Util.Block.buildBlockInfo(pos, state, Util.Block.setChestLoot(state, nbt, rand, "minecraft:chests/simple_dungeon"));
	}
	return Util.Block.buildBlockInfo(pos, state, nbt);
}))));


//Stalagmites
//Medium
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 4, 8, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 3, 8, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 3, 8, 5, 2, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 3, 8, 5, 2, 1)));

//Small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRAVEL, 10, 0, 1500, 7, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 150, 7, 2, 2, 5)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 150, 7, 2, 2, 5)));

//Very small
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRAVEL, 10, 0, 400, 6, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(COBBLESTONE, 10, 0, 32, 6, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(DIORITE, 10, 0, 24, 6, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(GRANITE, 10, 0, 24, 6, 1, 1, 1)));
addRegionFeature(GenerationStage.Decoration.UNDERGROUND_DECORATION, FeatureHelper.buildConfiguredFeature("topography:stalagmite", new StalactiteFormationConfig(ANDESITE, 10, 0, 24, 6, 1, 1, 1)));

function buildChunkGenerator(seed, biomeRegistry, dimensionSettingsRegistry) {
	var biomes = BiomeHelper.forBiomes("topography:infinite_dark");
	
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